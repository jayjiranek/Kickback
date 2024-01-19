import { useEffect, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { Auth, Storage } from "aws-amplify";
import dayjs from "dayjs";
// implement dayjs here

import ImageAttachments from "./ImageAttachments";
import VideoAttachments from "./VideoAttachments";
import { COLORS, FONT, SIZES } from "../../../constants";

const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);
  const [downloadAttachments, setDownloadedAttachments] = useState([]);

  const { width } = useWindowDimensions();

  console.log(message);
  useEffect(() => {
    const isMyMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.userSenderID === authUser.attributes.sub);
    };

    isMyMessage();
  }, []);

  useEffect(() => {
    const downloadAttachments = async () => {
      if (message.Attachments.items) {
        const downloadedAttachments = await Promise.all(
          message.Attachments.items.map((attachment) =>
            Storage.get(attachment.storageKey).then((uri) => ({
              ...attachment,
              uri,
            }))
          )
        );
        setDownloadedAttachments(downloadedAttachments);
      }
    };
    downloadAttachments();
  }, [JSON.stringify(message.Attachments.items)]);

  const imageContainerWidth = width * 0.8 - 30;
  const imageAttachments = downloadAttachments.filter(
    (at) => at.type === "IMAGE"
  );
  const videoAttachments = downloadAttachments.filter(
    (at) => at.type === "VIDEO"
  );
  return (
    <View>
      {isMe ? (
        <View
          style={[
            styles.container,
            {
              backgroundColor: COLORS.primary,
              alignSelf: "flex-end",
            },
          ]}
        >
          {downloadAttachments.length > 0 && (
            <View style={[{ width: imageContainerWidth }, styles.images]}>
              <ImageAttachments attachments={imageAttachments} />

              <VideoAttachments
                attachments={videoAttachments}
                width={imageContainerWidth}
              />
            </View>
          )}
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.senderImageContainer}>
            <Image
              source={{ uri: message.userSender.profileImage }}
              style={styles.senderImage}
              resizeMode="cover"
            />
          </View>

          <View
            style={[
              styles.container,
              {
                alignSelf: "flex-start",
              },
            ]}
          >
            <Text style={styles.nameContainer}>
              @{message.userSender.username}
            </Text>
            <View style={styles.messageTextContainer}>
              {downloadAttachments.length > 0 && (
                <View style={[{ width: imageContainerWidth }, styles.images]}>
                  <ImageAttachments attachments={imageAttachments} />

                  <VideoAttachments
                    attachments={videoAttachments}
                    width={imageContainerWidth}
                  />
                </View>
              )}
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    maxWidth: "80%",
  },
  messageTextContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.grey,
    paddingHorizontal: 10,
  },
  senderImageContainer: {
    width: 45,
    height: 45,
    marginTop: 15,
    borderRadius: SIZES.large,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  senderImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  nameContainer: {
    fontFamily: FONT.medium,
    color: COLORS.lightGrey,
    fontSize: SIZES.small + 2,
    marginBottom: 2,
  },
  messageText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginVertical: 5,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
  images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    padding: 3,
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
});

export default Message;
