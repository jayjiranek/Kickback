import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
  SafeAreaView,
  Text,
  Platform,
} from "react-native";
import {
  Stack,
  useRouter,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

import Message from "../../components/chat/message/Message";
import InputBox from "../../components/chat/input-box/InputBox";
import { ScreenHeaderBtn } from "../../components";

import { API, graphqlOperation } from "aws-amplify";
import { getChatRoom } from "../../src/graphql/queries";
import { listMessagesByChatRoom } from "./ChatQueries";
import {
  onCreateAttachment,
  onCreateMessage,
  onUpdateChatRoom,
} from "../../src/graphql/subscriptions";

import { COLORS } from "../../constants";

const ChatScreen = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  const navigation = useNavigation();
  const router = useRouter;
  const params = useLocalSearchParams();

  const chatroomID = params.id;
  console.log(chatroomID);

  // fetch chat room
  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, { id: chatroomID })).then(
      (result) => setChatRoom(result.data?.getChatRoom)
    );

    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatroomID } } })
    ).subscribe({
      next: ({ value }) => {
        setChatRoom((cr) => ({
          ...(cr || {}),
          ...value.data.onUpdateChatRoom,
        }));
      },
      error: (err) => console.warn(err),
    });

    return () => subscription.unsubscribe();
  }, [chatroomID]);

  // fetch messages
  useEffect(() => {
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatroomID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setMessages(result.data?.listMessagesByChatRoom?.items);
    });

    // subscribe to new messages
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, {
        filter: { chatroomID: { eq: chatroomID } },
      })
    ).subscribe({
      next: ({ value }) => {
        setMessages((m) => [value.data.onCreateMessage, ...m]);
      },
      error: (err) => console.warn(err),
    });

    // Subscribe to new attachments
    const subscriptionAttachments = API.graphql(
      graphqlOperation(onCreateAttachment, {
        filter: { chatroomID: { eq: chatroomID } },
      })
    ).subscribe({
      next: ({ value }) => {
        const newAttachment = value.data.onCreateAttachment;
        setMessages((existingMessages) => {
          const messageToUpdate = existingMessages.find(
            (em) => em.id === newAttachment.messageID
          );
          if (!messageToUpdate) {
            return existingMessages;
          }
          if (!messageToUpdate?.Attachments?.items) {
            messageToUpdate.Attachments.items = [];
          }
          messageToUpdate.Attachments.items.push(newAttachment);

          return existingMessages.map((m) =>
            m.id === messageToUpdate.id ? messageToUpdate : m
          );
        });
      },
      error: (err) => console.warn(err),
    });

    return () => {
      subscription.unsubscribe();
      subscriptionAttachments.unsubscribe();
    };
  }, [chatroomID]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.grey },
          headerShadowVisible: false,
          headerTitle: params.name,
          headerTintColor: COLORS.white,
          headerRight: () => (
            <ScreenHeaderBtn iconName="menu" handlePress={() => {}} />
          ),
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
        style={styles.bg}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox chatroom={chatRoom} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
