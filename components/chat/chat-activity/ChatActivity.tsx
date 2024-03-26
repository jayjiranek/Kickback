import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const ChatActivity = ({ activity }) => {
  console.log(activity);

  if (activity.activityType == "joined") {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>
          @{activity.userID.username} has been added to the Kickback.
        </Text>
      </View>
    );
  } else if (activity.activityType == "left") {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>
          @{activity.userID.username} has left the Kickback.
        </Text>
      </View>
    );
  } else if (activity.activityType == "votedOut") {
    <View style={styles.container}>
      <Text style={styles.containerText}>
        @{activity.userID.username} has been voted out of the Kickback.
      </Text>
    </View>;
  }
};

export default ChatActivity;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: SIZES.xxSmall - 2,
    paddingHorizontal: 5,
    borderRadius: SIZES.medium,
    maxWidth: "100%",
    alignSelf: "center",
  },
  containerText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 2,
    color: COLORS.lightGrey,
  },
});
