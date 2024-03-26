import { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import styles from "./chatlist.style";
import ChatListCard from "../../cards/home/ChatListCard";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { listChatRooms } from "./chatListQueries";
import { useRouter } from "expo-router";

const ChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChat, setSelectedChat] = useState();

  const fetchChatRooms = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser();

    const response: any = await API.graphql(
      graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
    );

    const rooms = response?.data?.getUser?.ChatRooms?.items?.filter(
      (item) => !item._deleted
    );

    const sortedRooms = rooms.sort(
      (r1, r2) =>
        new Date(r2.chatRoom.LastMessage.createdAt).getTime() -
        new Date(r1.chatRoom.LastMessage.createdAt).getTime()
    );

    setChatRooms(sortedRooms);
    setLoading(false);
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);
  return (
    <FlatList
      data={chatRooms}
      renderItem={({ item }) => <ChatListCard chat={item.chatRoom} />}
      refreshing={loading}
      onRefresh={fetchChatRooms}
    />
  );
};

export default ChatList;
