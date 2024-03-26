import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

import { SIZES, COLORS, FONT } from "../../../constants";

interface CheckboxProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}
const CreateVoteCheckbox: React.FC<CheckboxProps> = ({
  label,
  description,
  checked,
  onChange,
}) => {
  return (
    <Pressable style={styles.voteItemContainer} onPress={onChange}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemLabelText}>{label}</Text>
        <Text style={styles.itemDescriptionText}>{description}</Text>
      </View>
      {checked ? (
        <View style={styles.checkBoxContainerChecked}></View>
      ) : (
        <View style={styles.checkBoxContainerUnchecked}></View>
      )}
    </Pressable>
  );
};

export default CreateVoteCheckbox;

const styles = StyleSheet.create({
  voteItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.xSmall,
  },
  itemTextContainer: {
    maxWidth: "90%",
  },
  itemLabelText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  itemDescriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.lightGrey,
  },
  checkBoxContainerUnchecked: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: SIZES.small,
    marginLeft: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxContainerChecked: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: SIZES.small,
    marginLeft: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
});
