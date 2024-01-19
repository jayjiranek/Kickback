import { Text, View, Image } from "react-native";
import { useTheme } from "@aws-amplify/ui-react-native";

import styles from "./authheader.style";

const AuthHeader = () => {
	const {
		tokens: { space, fontSizes },
	} = useTheme();
	return (
		<View style={styles.imageContainer(space.xl)}>
			<Image
				source={require("../../assets/images/kb-font.png")}
				resizeMode='cover'
				style={styles.image}
			/>
		</View>
	);
};
export default AuthHeader;
