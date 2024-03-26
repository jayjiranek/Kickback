import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";

import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS, FONT, SIZES } from "../../../constants";

const ChatVote = ({ vote }) => {
  const [isMe, setIsMe] = useState(false);
  const [userSender, setUserSender] = useState([]);
  const [headerText, setHeaderText] = useState("");
  const [votesNeededStr, setVotesNeededStr] = useState("");

  const creatorUser = vote.voteCreationUser;

  useEffect(() => {
    const isMyVote = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      setIsMe(vote.voteCreationUser.id === authUser.attributes.sub);

      if (!isMe) {
        setUserSender(vote.voteCreationUser);
      }
    };

    const headerVoteTitle = () => {
      if (vote.voteType === "REMOVEUSER") {
        let removeUserUsername = vote.userToBeRemoved.username;
        let removeStr = `Remove @${removeUserUsername} from the Kickback?`;
        setHeaderText(removeStr);
      } else if (vote.voteType === "CHANGETITLE") {
        let newTitle = vote.newChatTitle;
        let titleStr = `Vote to change Kickback name to ${newTitle}`;
        setHeaderText(titleStr);
      }
    };

    const getNumVotesNeededStr = () => {
      const currentYesVotes = vote.numYesVotes;
      const currentNoVotes = vote.numNoVotes;
      const yesVotesNeeded = vote.numYesVotesNeeded;

      let votesNeeded = yesVotesNeeded - currentYesVotes;
      let totalVotes = currentNoVotes + currentNoVotes;
      let voteStr = `${votesNeeded} more 'Yes' votes needed`;
      setVotesNeededStr(voteStr);
    };

    isMyVote();
    headerVoteTitle();
    getNumVotesNeededStr();
  }, []);

  return (
    <View>
      {isMe ? (
        <View
          style={[
            styles.container,
            {
              alignSelf: "flex-end",
            },
          ]}
        >
          <View style={styles.headerContainer}>
            <FontAwesome5 name="poll" size={24} color={COLORS.lightWhite} />
            <Text style={styles.headerText}>{headerText}</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.btnContainer}>
              <Pressable
                style={[
                  styles.yesNoButtonContainer,
                  { borderColor: COLORS.green },
                ]}
                onPress={() => {}}
              >
                <Text style={[styles.btnText, { color: COLORS.green }]}>
                  YES
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.yesNoButtonContainer,
                  { borderColor: COLORS.red },
                ]}
                onPress={() => {}}
              >
                <Text style={[styles.btnText, { color: COLORS.red }]}>NO</Text>
              </Pressable>
            </View>

            <View style={styles.votesNeededContainer}>
              <FontAwesome5
                name="exclamation-circle"
                size={16}
                color={COLORS.lightWhite}
              />
              <Text style={styles.votesNeededText}>{votesNeededStr}</Text>
            </View>

            <View style={styles.optionsContainer}>
              <Pressable style={styles.optionsItemContainer} onPress={() => {}}>
                <Text style={styles.optionsText}>All Votes {"(4)"}</Text>
                <FontAwesome5
                  name="arrow-right"
                  size={14}
                  color={COLORS.lightWhite}
                />
              </Pressable>

              <Pressable style={styles.optionsItemContainer} onPress={() => {}}>
                <Text style={styles.optionsText}>Vote Details</Text>
                <FontAwesome5
                  name="arrow-right"
                  size={14}
                  color={COLORS.lightWhite}
                />
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.senderImageContainer}>
            <Image
              source={{ uri: creatorUser.profileImage }}
              style={styles.senderImage}
              resizeMode="cover"
            />
          </View>

          <View
            style={[
              styles.container,
              {
                alignSelf: "flex-start",
              },
            ]}
          >
            <Text style={styles.nameContainer}>@{creatorUser.username}</Text>
            <View style={styles.headerContainer}>
              <FontAwesome5 name="poll" size={24} color={COLORS.lightWhite} />
              <Text style={styles.headerText}>{headerText}</Text>
            </View>

            <View style={styles.contentContainer}>
              <View style={styles.btnContainer}>
                <Pressable
                  style={[
                    styles.yesNoButtonContainer,
                    { borderColor: COLORS.green },
                  ]}
                  onPress={() => {}}
                >
                  <Text style={[styles.btnText, { color: COLORS.green }]}>
                    YES
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.yesNoButtonContainer,
                    { borderColor: COLORS.red },
                  ]}
                  onPress={() => {}}
                >
                  <Text style={[styles.btnText, { color: COLORS.red }]}>
                    NO
                  </Text>
                </Pressable>
              </View>

              <View style={styles.votesNeededContainer}>
                <FontAwesome5
                  name="exclamation-circle"
                  size={16}
                  color={COLORS.lightWhite}
                />
                <Text style={styles.votesNeededText}>{votesNeededStr}</Text>
              </View>

              <View style={styles.optionsContainer}>
                <Pressable
                  style={styles.optionsItemContainer}
                  onPress={() => {}}
                >
                  <Text style={styles.optionsText}>All Votes {"(4)"}</Text>
                  <FontAwesome5
                    name="arrow-right"
                    size={14}
                    color={COLORS.lightWhite}
                  />
                </Pressable>

                <Pressable
                  style={styles.optionsItemContainer}
                  onPress={() => {}}
                >
                  <Text style={styles.optionsText}>Vote Details</Text>
                  <FontAwesome5
                    name="arrow-right"
                    size={14}
                    color={COLORS.lightWhite}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChatVote;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginVertical: SIZES.xxSmall - 2,
    paddingHorizontal: 5,
    borderRadius: SIZES.medium,
    width: "75%",
  },
  nameContainer: {
    fontFamily: FONT.medium,
    color: COLORS.lighterGrey,
    fontSize: SIZES.small + 2,
    marginBottom: 2,
  },
  senderImageContainer: {
    width: 45,
    height: 45,
    marginTop: 15,
    borderRadius: SIZES.large,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  senderImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.blueishPurple,
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: SIZES.small,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
  },
  headerText: {
    fontFamily: FONT.discoverHeader,
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
    paddingHorizontal: SIZES.small,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
  },
  contentContainer: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: 5,
    backgroundColor: COLORS.darkDetailsBackground,
    borderBottomLeftRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
    alignItems: "center",
  },
  votesNeededText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    paddingHorizontal: SIZES.small,
  },
  votesNeededContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.small,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.small,
  },
  yesNoButtonContainer: {
    borderWidth: 1,
    paddingHorizontal: SIZES.medium,
    borderColor: COLORS.green,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  btnText: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  expireTimeContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.xxSmall,
  },
  expireTimeText: {
    color: COLORS.lightGrey,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    paddingHorizontal: SIZES.xSmall,
  },
  optionsContainer: {
    paddingHorizontal: SIZES.xSmall,
    width: "100%",
  },
  optionsItemContainer: {
    flexDirection: "row",
    marginVertical: SIZES.xxSmall,
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionsText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
});
