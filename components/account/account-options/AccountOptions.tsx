import { View, Pressable, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Auth } from "aws-amplify";

import { COLORS, FONT, SIZES } from "../../../constants";

const AccountOptions = () => {
  // sign out button
  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log("Signed Out");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons
          name="file-tray-full-outline"
          size={24}
          color={COLORS.lightWhite}
        />
        <Text style={styles.listItemText}>Your Kickbacks</Text>
      </Pressable>

      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons
          name="notifications-off-circle-outline"
          size={24}
          color={COLORS.lightWhite}
        />
        <Text style={styles.listItemText}>Manage Notifications</Text>
      </Pressable>

      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons name="bulb-outline" size={24} color={COLORS.lightWhite} />
        <Text style={styles.listItemText}>Your Interests</Text>
      </Pressable>

      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons
          name="add-circle-outline"
          size={24}
          color={COLORS.lightWhite}
        />
        <Text style={styles.listItemText}>Create a Kickback</Text>
      </Pressable>

      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons name="settings-outline" size={24} color={COLORS.lightWhite} />
        <Text style={styles.listItemText}>Settings</Text>
      </Pressable>

      <Pressable style={styles.listItemContainer} onPress={() => {}}>
        <Ionicons name="build-outline" size={24} color={COLORS.lightWhite} />
        <Text style={styles.listItemText}>Support</Text>
      </Pressable>

      <Pressable style={styles.lastItemContainer} onPress={() => {}}>
        <Ionicons name="star-outline" size={24} color={COLORS.lightWhite} />
        <Text style={styles.listItemText}>Rate on App Store</Text>
      </Pressable>

      <Pressable style={styles.signOutDeleteContainer} onPress={() => {}}>
        <Text style={styles.signOutDeleteText}>Delete Account</Text>
      </Pressable>

      <Pressable style={styles.signOutDeleteContainer} onPress={signOut}>
        <Text style={styles.signOutDeleteText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default AccountOptions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.xSmall,
    width: "100%",
    paddingHorizontal: SIZES.small,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  listItemText: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
    marginLeft: SIZES.medium,
  },
  lastItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkDetailsBackground,
    paddingBottom: SIZES.medium,
  },
  firstItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.medium,
    borderTopWidth: 1,
    borderTopColor: COLORS.darkDetailsBackground,
    paddingTop: SIZES.medium,
  },
  signOutDeleteContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.medium,
  },
  signOutDeleteText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.lightGrey,
  },
});
