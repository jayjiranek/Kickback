import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { router } from "expo-router";

import { COLORS, FONT, SIZES } from "../../../constants";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createUserChatRoom,
  createUserChatActivity,
} from "../../../src/graphql/mutations";

import { Ionicons } from "@expo/vector-icons";

const FeaturedGroupModalCard = ({ kickback }) => {
  const addUserToChat = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    console.log(authUser);

    // add user to chat
    const newUser = {
      chatRoomId: kickback.id,
      userId: authUser.attributes.sub,
    };

    await API.graphql(graphqlOperation(createUserChatRoom, { input: newUser }));

    // create user chat activity
    const newUserActivity = {
      chatroomID: kickback.id,
      userChatActivityUserIDId: authUser.attributes.sub,
      activityType: "joined",
    };

    await API.graphql(
      graphqlOperation(createUserChatActivity, { input: newUserActivity })
    );

    // go back to home
    router.push("home");
  };

  // update numMembers in chatRoom table

  return (
    <View style={styles.container}>
      <View style={styles.topicImageContainer}>
        <Image
          source={{ uri: kickback.chatImage }}
          resizeMode="cover"
          style={styles.topicImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{kickback.chatName}</Text>
        <Text style={styles.descriptionText}>
          {kickback.numMembers} members
        </Text>
        <View style={styles.maxSizeContainer}>
          <Ionicons name="person" size={12} color={COLORS.lighterGrey} />
          <Text style={styles.descriptionText}> {kickback.maxNumMembers}</Text>
        </View>
      </View>

      <Pressable style={styles.buttonContainer} onPress={addUserToChat}>
        <Text style={styles.buttonText}>Join</Text>
      </Pressable>
    </View>
  );
};

export default FeaturedGroupModalCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: SIZES.xSmall,
  },
  topicImageContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  topicImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  textContainer: {
    justifyContent: "flex-start",
    flex: 1,
    marginHorizontal: SIZES.xSmall,
  },
  titleText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  descriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.lighterGrey,
  },
  buttonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    height: "60%",
  },
  buttonText: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  maxSizeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
