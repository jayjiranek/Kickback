import { View, StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { CreateVoteCheckbox } from "../../../../components";
import { COLORS, FONT, SIZES } from "../../../../constants";

const CreateVoteModal = () => {
  const [selectedVoteType, setSelectedVoteType] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleCheckboxChange = (value: string) => {
    console.log(value);
    if (selectedVoteType === value) {
      setSelectedVoteType(null);
      setIsSelected(false);
    } else {
      setSelectedVoteType(value);
      setIsSelected(true);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Create New Vote</Text>
        </View>

        <View style={styles.itemContainer}>
          <CreateVoteCheckbox
            label="Remove User"
            description="Create a vote to remove a user from the Kickback. Users removed from the group won't be able to rejoin."
            checked={selectedVoteType === "Remove User"}
            onChange={() => handleCheckboxChange("Remove User")}
          />

          <CreateVoteCheckbox
            label="Place User in Timeout"
            description="Create a vote to prevent a user from sending messages for specified time."
            checked={selectedVoteType === "User Timeout"}
            onChange={() => handleCheckboxChange("User Timeout")}
          />

          <CreateVoteCheckbox
            label="Temporary Ban for User"
            description="Create a vote to Ban a user from the Kickback for a specified amount of time."
            checked={selectedVoteType === "User Ban"}
            onChange={() => handleCheckboxChange("User Ban")}
          />

          <CreateVoteCheckbox
            label="Change Kickback Information"
            description="Create a vote to change the title, image, or description of the
            Kickback."
            checked={selectedVoteType === "Change Info"}
            onChange={() => handleCheckboxChange("Change Info")}
          />

          <CreateVoteCheckbox
            label="Change Kickback Settings"
            description="Create a vote to change a specific setting of the Kickback."
            checked={selectedVoteType === "Change Settings"}
            onChange={() => handleCheckboxChange("Change Settings")}
          />

          <CreateVoteCheckbox
            label="Create a Poll"
            description="Create a vote to change a specific setting of the Kickback."
            checked={selectedVoteType === "Create Poll"}
            onChange={() => handleCheckboxChange("Create Poll")}
          />

          <View style={styles.btnContainer}>
            <Pressable style={styles.nextButton} onPress={() => {}}>
              <Text style={styles.buttonText}>NEXT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateVoteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.medium,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.discoverHeader,
    color: COLORS.lightWhite,
  },
  itemContainer: {
    padding: 5,
    paddingHorizontal: SIZES.xSmall,
  },
  itemHeaderText: {
    fontFamily: FONT.discoverHeader,
    fontSize: SIZES.xLarge,
    color: COLORS.lighterGrey,
  },
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
  checkBoxContainer: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: SIZES.small,
    marginLeft: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  nextButton: {
    backgroundColor: COLORS.darkDetailsBackground,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  buttonText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.lightGrey,
    marginHorizontal: SIZES.xSmall - 4,
  },
});
