import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	imageContainer: (paddingTop) => ({
		paddingBottom: paddingTop,
		alignItems: "center",
		justifyContent: "center",
	}),
	image: {
		width: 300,
		height: 80,
	},
});

export default styles;
