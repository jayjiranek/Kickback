import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES, FONT } from "../../../constants";

const AccountListItemCard = (itemName: string) => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.itemNameText}>{itemName}</Text>
      </View>
    </Pressable>
  );
};

export default AccountListItemCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
  },
  itemNameText: {
    color: COLORS.lightWhite,
  },
});
