import { useEffect, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { getUser } from "./messageUserQuery";
import dayjs from "dayjs";
// implement dayjs here

import ImageAttachments from "./ImageAttachments";
import VideoAttachments from "./VideoAttachments";
import { COLORS, FONT, SIZES } from "../../../constants";

const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);
  const [userSender, setUserSender] = useState([]);
  const [downloadAttachments, setDownloadedAttachments] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const isMyMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.userSenderID === authUser.attributes.sub);

      // fetch the user
      API.graphql(graphqlOperation(getUser, { id: message.userSenderID })).then(
        (result) => setUserSender(result.data.getUser)
      );
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
          <View style={styles.myMessageTextContainer}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.senderImageContainer}>
            <Image
              source={{ uri: userSender.profileImage }}
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
            <Text style={styles.nameContainer}>@{userSender.username}</Text>
            {downloadAttachments.length > 0 && (
              <View style={[{ width: imageContainerWidth }, styles.images]}>
                <ImageAttachments attachments={imageAttachments} />

                <VideoAttachments
                  attachments={videoAttachments}
                  width={imageContainerWidth}
                />
              </View>
            )}
            <View style={styles.messageTextContainer}>
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
    marginVertical: SIZES.xxSmall - 2,
    paddingHorizontal: 5,
    borderRadius: SIZES.medium,
    maxWidth: "80%",
  },
  messageTextContainer: {
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.grey,
    paddingHorizontal: SIZES.small,
  },
  myMessageTextContainer: {
    backgroundColor: COLORS.blueishPurple,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
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
    color: COLORS.lighterGrey,
    fontSize: SIZES.small + 2,
    marginBottom: 2,
    marginLeft: SIZES.xSmall,
  },
  messageText: {
    fontFamily: FONT.medium,
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
