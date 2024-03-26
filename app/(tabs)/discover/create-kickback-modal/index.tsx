import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import { COLORS, FONT, SIZES } from "../../../../constants";

const CreateKickbackModule = () => {
  const [kickbackName, setKickbackName] = useState("");
  const [kickbackCategory, setKickbackCategory] = useState("");
  const [selectedMemberOption, setSelectedMemberOption] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [items, setItems] = useState<Array<ItemType<string>>>([
    { label: "20 members", value: "20" },
    { label: "50 members", value: "50" },
    { label: "100 members", value: "100" },
    { label: "No Max Size", value: "00" },
  ]);

  const handleOptionPress = (option) => {
    if (selectedMemberOption === option) {
      setSelectedMemberOption(null);
    } else {
      setSelectedMemberOption(option);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.setImageContainer}>
            <Text style={styles.labelText}>Set Avatar</Text>
            <Text style={styles.labelText}>{"(optional)"}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            value={kickbackName}
            onChangeText={setKickbackName}
            style={styles.textInputBox}
            placeholder="Enter Kickback Name"
            placeholderTextColor={COLORS.lightGrey}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            value={kickbackName}
            onChangeText={setKickbackName}
            style={styles.textInputBox}
            placeholder="Enter Kickback Category (optional)"
            placeholderTextColor={COLORS.lightGrey}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemHeaderText}>Max Size*</Text>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <Text style={styles.itemText}>25 members</Text>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <Text style={styles.itemText}>50 members</Text>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <Text style={styles.itemText}>100 members</Text>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <Text style={styles.itemText}>No Max Size</Text>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemHeaderText}>Membership*</Text>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Open</Text>
              <Text style={styles.itemDescriptionText}>
                Anyone can join and/or be invited to the Kickback.
              </Text>
            </View>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Restricted</Text>
              <Text style={styles.itemDescriptionText}>
                People must ask to join, and the members will vote to
                approve/deny requests. People invited by members are
                automatically approved to join.
              </Text>
            </View>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>

          <Pressable style={styles.memberItemContainer} onPress={() => {}}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Admin Controlled</Text>
              <Text style={styles.itemDescriptionText}>
                Only owners of the Kickback will be allowed to add members.
              </Text>
            </View>
            <View style={styles.checkBoxContainer}></View>
          </Pressable>
        </View>

        <View style={styles.headerContainer}>
          <Pressable style={styles.nextButton} onPress={() => {}}>
            <Text style={styles.buttonText}>NEXT</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateKickbackModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.medium,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  setImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.darkDetailsBackground,
    height: 150,
    width: 150,
    borderRadius: SIZES.small,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  itemContainer: {
    padding: 5,
    paddingHorizontal: SIZES.xSmall,
  },
  labelText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  textInputBox: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.xxSmall,
    marginHorizontal: SIZES.xSmall,
    borderRadius: SIZES.small,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.lighterGrey,
    color: COLORS.lightWhite,
  },
  memberItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.xSmall,
  },
  itemText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  itemDescriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.lightGrey,
  },
  itemTextContainer: {
    maxWidth: "90%",
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
  itemHeaderText: {
    fontFamily: FONT.discoverHeader,
    fontSize: SIZES.xLarge,
    color: COLORS.lighterGrey,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
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
    color: COLORS.lightWhite,
    marginHorizontal: SIZES.xSmall - 4,
  },
});
