import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";

import { useLocalSearchParams } from "expo-router";
import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, FONT, SIZES } from "../../../../constants";
import { ChatInfoHeaderButton, CreateVoteMenu } from "../../../../components";
import { getChatRoom } from "./ChatInfoQueries";

const handleCreateVotePress = () => {
  router.push("home/create-a-vote-modal");
};

const ChatInformationScreen = () => {
  const [votes, setVotes] = useState([]);
  const [chatUsers, setChatUsers] = useState([]);
  const [chatData, setChatData] = useState([]);

  const params = useLocalSearchParams();
  const id = params.id;

  // fetch chat room
  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, { id })).then((result) => {
      setChatData(result.data.getChatRoom);
      setChatUsers(chatData.users.items);
    });
  }, [id]);

  // to do: allow user to invite someone to join
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.chatImageContainer}>
            <Image
              source={{ uri: chatData.chatImage }}
              resizeMode="cover"
              style={styles.chatImage}
            />
          </View>
          <Text style={styles.chatText}>{chatData.chatName}</Text>

          <View style={styles.chatDescriptionContainer}>
            <Text style={styles.chatDescriptionText}>
              Est. {dayjs(chatData.createdAt).format("MMMM D, YYYY")}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <ChatInfoHeaderButton
            iconName={"add-outline"}
            handlePress={handleCreateVotePress}
          />
          <ChatInfoHeaderButton
            iconName={"notifications-off-outline"}
            handlePress={() => {}}
          />
          <ChatInfoHeaderButton
            iconName={"search-outline"}
            handlePress={() => {}}
          />
        </View>

        <View style={styles.listContainer}>
          <Pressable style={styles.listItemContainer} onPress={() => {}}>
            <View style={styles.leftListIconandTitleContainer}>
              <Ionicons
                name="radio-outline"
                size={24}
                color={COLORS.lightWhite}
              />
              <Text style={styles.listItemText}>Active votes {"(4)"}</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={COLORS.lightWhite}
            />
          </Pressable>

          <Pressable style={styles.listItemContainer} onPress={() => {}}>
            <View style={styles.leftListIconandTitleContainer}>
              <Ionicons
                name="people-outline"
                size={24}
                color={COLORS.lightWhite}
              />
              <Text style={styles.listItemText}>Kickback Members {"(8)"}</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={COLORS.lightWhite}
            />
          </Pressable>

          <Pressable style={styles.listItemContainer} onPress={() => {}}>
            <View style={styles.leftListIconandTitleContainer}>
              <Ionicons
                name="file-tray-full-outline"
                size={24}
                color={COLORS.lightWhite}
              />
              <Text style={styles.listItemText}>Gallery</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={COLORS.lightWhite}
            />
          </Pressable>

          <Pressable style={styles.listItemContainer} onPress={() => {}}>
            <View style={styles.leftListIconandTitleContainer}>
              <Ionicons
                name="trophy-outline"
                size={24}
                color={COLORS.lightWhite}
              />
              <Text style={styles.listItemText}>Highlights</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={COLORS.lightWhite}
            />
          </Pressable>

          <Pressable style={styles.listItemContainer} onPress={() => {}}>
            <View style={styles.leftListIconandTitleContainer}>
              <Ionicons
                name="settings-outline"
                size={24}
                color={COLORS.lightWhite}
              />
              <Text style={styles.listItemText}>Settings</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={COLORS.lightWhite}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.medium,
  },
  headerContainer: {
    marginBottom: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  chatImageContainer: {
    width: 150,
    height: 150,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  chatImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  chatText: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  chatDescriptionContainer: {
    marginTop: SIZES.xxSmall,
    marginBottom: SIZES.medium,
  },
  chatDescriptionText: {
    fontFamily: FONT.discoverHeader,
    fontSize: SIZES.medium,
    color: COLORS.lighterGrey,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.small,
  },
  listContainer: {
    paddingVertical: SIZES.xSmall,
    width: "100%",
    paddingHorizontal: SIZES.small,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.medium,
    marginRight: SIZES.xxSmall,
    borderBottomWidth: 0.75,
    borderBottomColor: COLORS.darkDetailsBackground,
    paddingBottom: SIZES.xxSmall,
  },
  leftListIconandTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
    marginLeft: SIZES.medium,
  },
  joinButtonContainer: {
    marginBottom: SIZES.medium,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  jBtnContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
    width: "50%",
    borderWidth: 1,
    borderColor: COLORS.darkDetailsBackground,
  },
  jBtnText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
});
