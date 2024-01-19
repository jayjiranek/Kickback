import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import {
  createMessage,
  updateChatRoom,
  createAttachment,
} from "../../../src/graphql/mutations";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../../constants";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const InputBox = ({ chatroom }) => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState({});

  const onSend = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    console.log(authUser);

    const newMessage = {
      chatroomID: chatroom.id,
      text,
      userSenderID: authUser.attributes.sub,
    };

    const newMessageData: any = await API.graphql(
      graphqlOperation(createMessage, { input: newMessage })
    );

    setText("");

    // create attachments
    await Promise.all(
      files.map((file) =>
        addAttachment(file, newMessageData.data.createMessage.id)
      )
    );
    setFiles([]);

    // set new message as lastMessage
    await API.graphql(
      graphqlOperation(updateChatRoom, {
        input: {
          chatRoomLastMessageId: newMessageData.data.createMessage.id,
          id: chatroom.id,
        },
      })
    );
  };

  const addAttachment = async (file: any, messageID: string) => {
    console.log(messageID);
    console.log(file);
    const types = {
      image: "IMAGE",
      video: "VIDEO",
    };

    const newAttachment = {
      storageKey: await uploadFile(file.uri),
      type: types[file.type],
      width: file.width,
      height: file.height,
      duration: file.duration,
      messageID,
      chatroomID: chatroom.id,
    };
    return API.graphql(
      graphqlOperation(createAttachment, { input: newAttachment })
    );
  };

  // image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      if (result.assets) {
        setFiles(result.assets);
      } else {
        setFiles([result]);
      }
    }
  };

  const uploadFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      console.log("here we are");
      const key = `${uuidv4()}.png`;
      console.log("made it here");

      await Storage.put(key, blob, {
        contentType: "image/png", // optional
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgresses((p) => ({
            ...p,
            [fileUri]: progress.loaded / progress.total,
          }));
        },
      });
      console.log("uploaded");
      return key;
    } catch (err) {
      console.log("error uploading file", err);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <AntDesign
          name="camera"
          size={24}
          color={COLORS.tertiary}
          onPress={pickImage}
        />
        <View style={styles.inputContainer}>
          {files.length > 0 && (
            <View style={styles.attachmentsContainer}>
              <FlatList
                data={files}
                horizontal
                renderItem={({ item }) => (
                  <>
                    <Image
                      source={{ uri: item.uri }}
                      style={styles.selectedImage}
                      resizeMode="contain"
                    />

                    {progresses[item.uri] && (
                      <View
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          backgroundColor: "#8c8c8cAA",
                          padding: 5,
                          borderRadius: 50,
                        }}
                      >
                        <Text
                          style={{
                            color: COLORS.lightWhite,
                            fontWeight: "bold",
                          }}
                        >
                          {(progresses[item.uri] * 100).toFixed(0)} %
                        </Text>
                      </View>
                    )}

                    <MaterialIcons
                      name="highlight-remove"
                      onPress={() =>
                        setFiles((existingFiles) =>
                          existingFiles.filter((file) => file !== item)
                        )
                      }
                      size={20}
                      color="grey"
                      style={styles.removeSelectedImage}
                    />
                  </>
                )}
              />
            </View>
          )}
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="Type your message..."
          />
        </View>
        <MaterialIcons
          name="send"
          size={16}
          color={COLORS.lightWhite}
          style={styles.send}
          onPress={onSend}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 5,
    paddingHorizontal: 5,
    backgroundColor: COLORS.darkBackground,
  },
  inputContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.lightGrey,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  input: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderTopColor: COLORS.lightGrey,
    color: COLORS.lightWhite,
  },
  send: {
    backgroundColor: COLORS.primary,
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
  attachmentsContainer: {
    alignItems: "flex-end",
  },
  selectedImage: {
    height: 150,
    width: 200,
    margin: 5,
  },
  removeSelectedImage: {
    position: "absolute",
    right: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default InputBox;
