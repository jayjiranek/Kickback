import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: COLORS.grey,
		paddingVertical: SIZES.xSmall,
	},
	chatImageContainer: {
		width: 55,
		height: 55,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	chatImage: {
		width: "100%",
		height: "100%",
		borderRadius: SIZES.small,
	},
	nameAndMessageContainer: {
		flex: 3,
		marginHorizontal: SIZES.medium,
	},
	chatName: {
		fontSize: SIZES.medium + 1,
		fontFamily: FONT.bold,
		color: COLORS.white,
	},
	lastChatMessage: {
		fontSize: SIZES.small,
		fontFamily: FONT.regular,
		marginTop: 3,
		color: COLORS.lighterGrey,
	},
	dateAndNotificationsContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	dateText: {
		fontSize: SIZES.small,
		fontFamily: FONT.regular,
		color: COLORS.lighterGrey,
		marginBottom: 3,
	},
});

export default styles;
