import { View, StyleSheet } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import ChatInfoHeaderButton from "./ChatInfoHeaderButton";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, FONT, SIZES } from "../../../constants";

const CreateVoteMenu = () => {
  return (
    <MenuProvider style={styles.container}>
      <Menu>
        <MenuTrigger customStyles={{ triggerWrapper: { top: -20 } }}>
          <Ionicons name="add-sharp" size={28} color={COLORS.lightWhite} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`user`)} text="Remove User" />
          <MenuOption onSelect={() => alert(`title`)} text="Change Title" />
          <MenuOption onSelect={() => alert(`pic`)} text="Change Picture" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default CreateVoteMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flexDirection: "column",
  },
});
