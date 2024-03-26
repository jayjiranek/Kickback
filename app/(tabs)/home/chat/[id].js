import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  Platform,
  View,
} from "react-native";
import {
  Stack,
  useRouter,
  useLocalSearchParams,
  useNavigation,
  router,
} from "expo-router";

import Message from "../../../../components/chat/message/Message";
import InputBox from "../../../../components/chat/input-box/InputBox";
import ChatActivity from "../../../../components/chat/chat-activity/ChatActivity";
import ChatVote from "../../../../components/chat/chat-vote/ChatVote";
import { ScreenHeaderBtn, BreakingNewsAlert } from "../../../../components";

import { API, graphqlOperation } from "aws-amplify";
import { getChatRoom } from "../../../../src/graphql/queries";
import { listMessagesByChatRoom } from "./ChatQueries";
import { listUserActivityByChatRoom } from "./UserChatActivityQuery";
import { listVotesByChatRoom } from "./VoteQuery";
import { listBreakingNewsAlertsByRoomTopic } from "./BreakingNewsQuery";
import {
  onCreateAttachment,
  onCreateMessage,
  onUpdateChatRoom,
} from "../../../../src/graphql/subscriptions";

import { COLORS, FONT, SIZES } from "../../../../constants";

const renderItem = ({ item }) => {
  if (item.hasOwnProperty("activityType")) {
    return <ChatActivity activity={item} />;
  } else if (item.hasOwnProperty("voteType")) {
    return <ChatVote vote={item} />;
  } else if (item.hasOwnProperty("roomtopicID")) {
    return <BreakingNewsAlert alert={item} />;
  } else {
    return <Message message={item} />;
  }
};

const ChatScreen = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [votes, setVotes] = useState([]);
  const [breakingNewsAlerts, setBreakingNewsAlerts] = useState([]);

  const navigation = useNavigation();
  const params = useLocalSearchParams();

  const headerChatTitle = `kb/${params.name}`;
  const roomtopicID = params.roomtopicID;

  const chatroomID = params.id;

  const handleChatInfoPress = () => {
    router.push({
      pathname: "home/chat-information",
      params: { id: chatroomID, chatName: headerChatTitle },
    });
  };

  // change title and set up id to be passed to info screen
  useEffect(() => {
    navigation.setOptions({
      headerTitle: headerChatTitle,
      headerRight: () => (
        <ScreenHeaderBtn
          iconName="information-circle-outline"
          handlePress={handleChatInfoPress}
        />
      ),
    });
  }, [navigation]);

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

    // fetch user chat activity
    API.graphql(
      graphqlOperation(listUserActivityByChatRoom, {
        chatroomID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setUserActivity(result.data?.listUserActivityByChatRoom?.items);
    });

    // fetch chat room votes
    API.graphql(
      graphqlOperation(listVotesByChatRoom, {
        chatroomID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setVotes(result.data.listVotesByChatRoom.items);
    });

    // fetch breaking news alerts
    API.graphql(
      graphqlOperation(listBreakingNewsAlertsByRoomTopic, {
        roomtopicID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setBreakingNewsAlerts(
        result.data.listBreakingNewsAlertsByRoomTopic.items
      );
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

  const combinedData = [
    ...messages,
    ...userActivity,
    ...votes,
    ...breakingNewsAlerts,
  ];
  const sortedData = combinedData.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  console.log(sortedData);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        style={styles.list}
        inverted
      />
      <InputBox chatroom={chatRoom} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
