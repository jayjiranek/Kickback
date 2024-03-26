import { Pressable, Linking, Text, StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const OnlineArticleLink = ({ url }) => {
  const handlePress = async () => {
    // check if the url is valid
    const isValid = await Linking.canOpenURL(url);

    if (isValid) {
      await Linking.openURL(url);
    } else {
      console.error("Invalid url:", url);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.linkText}>See more</Text>
    </Pressable>
  );
};

export default OnlineArticleLink;

const styles = StyleSheet.create({
  linkText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.linkColor,
    marginVertical: 5,
    textDecorationLine: "underline",
  },
});
