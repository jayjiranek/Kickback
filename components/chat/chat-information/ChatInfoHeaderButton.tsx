import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS, FONT, SIZES } from "../../../constants";

const ChatInfoHeaderButton = ({ iconName, handlePress }) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={handlePress}>
      <Ionicons name={iconName} size={28} color={COLORS.lightWhite} />
    </Pressable>
  );
};

export default ChatInfoHeaderButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.xLarge,
    backgroundColor: COLORS.darkDetailsBackground,
  },
});
