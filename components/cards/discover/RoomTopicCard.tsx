import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";
import { router } from "expo-router";

const RoomTopicCard = ({ topic }) => {
  const handleCardPress = () => {
    router.push({
      pathname: "discover/join-group-modal",
      params: {
        id: topic.id,
        topicName: topic.topicName,
        topicDescription: topic.topicDescription,
        topicImage: topic.topicAvatarImage,
      },
    });
  };
  return (
    <Pressable style={styles.container} onPress={handleCardPress}>
      <View style={styles.topicImageContainer}>
        <Image
          source={{ uri: topic.topicAvatarImage }}
          resizeMode="cover"
          style={styles.topicImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{topic.topicName}</Text>
        <Text style={styles.descriptionText}>
          {topic.countGroupsNumber} groups
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Explore</Text>
      </View>
    </Pressable>
  );
};

export default RoomTopicCard;

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
});
