import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: SIZES.small,
	},
	rowContainer: {
		flexDirection: "row",
		paddingVertical: SIZES.xSmall,
	},
	optionText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.large,
		color: COLORS.lightWhite,
		marginLeft: SIZES.medium,
	},
});

export default styles;
