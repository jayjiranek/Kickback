import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { getUser } from "./AccountPageQuery";
import { Auth, graphqlOperation, API } from "aws-amplify";

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
    console.log(response);
    const details = response.data?.getUser;
    setUserDetails(details);
    console.log(userDetails);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: userDetails.profileImage }}
        />
      </View>
      <Text style={styles.displayNameText}>Jay Bird</Text>
      <Text style={styles.usernameText}>@{userDetails.username}</Text>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    alignItems: "center",
  },
  imageContainer: {
    width: 175,
    height: 175,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.small,
  },
  displayNameText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginTop: SIZES.medium,
  },
  usernameText: {
    color: COLORS.lightGrey,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
});
