import { View, TextInput } from "react-native";

import styles from "./chatlistsearch.style";

const ChatListSearch = () => {
	return (
		<View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=''
						onChange={() => {}}
						placeholder='Search chats and messages'
					/>
				</View>
			</View>
		</View>
	);
};

export default ChatListSearch;
