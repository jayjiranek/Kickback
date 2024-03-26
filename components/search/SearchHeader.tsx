import { Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import { COLORS, SIZES, FONT } from "../../constants";

const SearchHeader = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Search"
        style={styles.inputContainer}
      />
      <Ionicons name="settings-outline" size={24} color={COLORS.lightWhite} />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
  },
  inputContainer: {
    backgroundColor: COLORS.grey,
    color: COLORS.lightGrey,
    borderRadius: 50,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.xxSmall,
    marginHorizontal: SIZES.small,
    flex: 1,
  },
});
