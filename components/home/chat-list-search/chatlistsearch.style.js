import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	searchContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		height: 40,
		paddingTop: SIZES.xSmall - 6,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.darkDetailsBackground,
		borderColor: COLORS.grey,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZES.small,
		height: "100%",
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.medium,
	},
});

export default styles;
