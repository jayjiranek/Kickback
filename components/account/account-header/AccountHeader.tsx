import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

import dayjs from "dayjs";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { Ionicons } from "@expo/vector-icons";

import { getUser } from "./AccountPageQuery";
import { COLORS, SIZES, FONT } from "../../../constants";

interface IUser {
  createdAt: string;
  id: string;
  profileImage: string;
  updatedAt: string;
  username: string;
}

const AccountHeader = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<IUser>({
    createdAt: "",
    id: "",
    profileImage: "",
    updatedAt: "",
    username: "",
  });

  const fetchUser = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser();

    const response: any = await API.graphql(
      graphqlOperation(getUser, { id: authUser.attributes.sub })
    );
    const details = response.data?.getUser;
    setUserDetails(details);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: userDetails.profileImage }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <Text style={styles.displayNameText}>{userDetails.username}</Text>
        </View>
        <Pressable style={styles.rightHeaderContainer} onPress={() => {}}>
          <Text style={styles.headerButtonText}>Edit Profile</Text>
        </Pressable>
      </View>

      <Pressable style={styles.friendsContainer} onPress={() => {}}>
        <Text style={styles.friendsText}>24 friends</Text>
      </Pressable>

      <Text style={styles.usernameKBDateText}>
        @{userDetails.username} | 2 Kickbacks |{" "}
        {dayjs(userDetails.createdAt).format("MMMM D, YYYY")}
      </Text>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small,
    marginBottom: SIZES.medium,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  leftHeaderContainer: {
    flexDirection: "column",
  },
  rightHeaderContainer: {
    marginRight: SIZES.small,
    borderWidth: 1.5,
    borderRadius: SIZES.medium,
    borderColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  headerButtonText: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: COLORS.tertiary,
    marginHorizontal: SIZES.small,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.xSmall,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.small,
  },
  displayNameText: {
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    marginBottom: SIZES.xSmall - 4,
  },
  friendsContainer: {
    marginBottom: SIZES.xSmall - 6,
    flexDirection: "row",
    alignItems: "center",
  },
  friendsText: {
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  usernameText: {
    color: COLORS.lightGrey,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  usernameKBDateText: {
    color: COLORS.lightGrey,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
  },
});
