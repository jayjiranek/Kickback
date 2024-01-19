import { View, Text, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { onUpdateChatRoom } from "../../../src/graphql/subscriptions";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Link } from "expo-router";
import { router } from "expo-router";

dayjs.extend(calendar);

import styles from "./chatlistcard.style";
import ChatNotificationsIcon from "./ChatNotificationsIcon";

/// need to import handle nav later
const ChatListCard = ({ chat }) => {
	const [user, setUser] = useState(null);
	const [chatRoom, setChatRoom] = useState(chat);

	// llop through chat.users.items and find a user that is not us

	// fetch the chat room
	useEffect(() => {
		const subscription = (
			API.graphql(
				graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chat.id } } })
			) as any
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
	}, [chat.id]);

	const handleChatPress = () => {
		router.push({
			pathname: "/chat/[id]",
			params: { id: chatRoom.id, name: chatRoom.chatName },
		});
	};

	return (
		<Pressable
			style={styles.container}
			onPress={handleChatPress}
		>
			<View style={styles.chatImageContainer}>
				<Image
					source={{ uri: chatRoom.chatImage }}
					resizeMode='cover'
					style={styles.chatImage}
				/>
			</View>

			<View style={styles.nameAndMessageContainer}>
				<Text
					style={styles.chatName}
					numberOfLines={1}
					ellipsizeMode='tail'
				>
					kb/{chatRoom.chatName}
				</Text>
				<Text
					style={styles.lastChatMessage}
					numberOfLines={2}
					ellipsizeMode='tail'
				>
					{chatRoom.LastMessage?.text}
				</Text>
			</View>

			<View style={styles.dateAndNotificationsContainer}>
				<Text style={styles.dateText}>
					{dayjs(chatRoom.LastMessage?.createdAt).calendar(null, {
						sameDay: "h:mm A",
						lastDay: "[Yesterday]",
						lastWeek: "dddd",
					})}
				</Text>

				<ChatNotificationsIcon numUnreadMessages={1} />
			</View>
		</Pressable>
	);
};

export default ChatListCard;
