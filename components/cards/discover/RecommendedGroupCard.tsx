import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const RecommendedGroupCard = ({ topic }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topRowContainer}>
        <View style={styles.topicImageContainer}>
          <Image
            source={{ uri: topic.groupTopicImage }}
            resizeMode="cover"
            style={styles.topicImage}
          />
        </View>
        <View style={styles.titleAndCountContainer}>
          <Text style={styles.titleText}>{topic.topicTitle}</Text>
          <Text style={styles.countText}>{topic.groupChatCount} chats</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Join</Text>
        </View>
      </View>
      <View style={styles.groupTopicDescriptionContainer}>
        <Text style={styles.descriptionText}>
          {topic.groupTopicDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedGroupCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: SIZES.medium,
    padding: SIZES.xSmall - 4,
    margin: SIZES.xSmall - 7,
  },
  topRowContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topicImageContainer: {
    width: 45,
    height: 45,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  topicImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  titleAndCountContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  titleText: {
    fontSize: SIZES.medium + 1,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  countText: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.lighterGrey,
  },
  buttonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.xSmall,
    height: "75%",
  },
  buttonText: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.white,
    marginHorizontal: SIZES.xSmall,
  },
  groupTopicDescriptionContainer: {
    flex: 1,
    marginTop: SIZES.xSmall - 4,
  },
  descriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.lighterGrey,
  },
});
