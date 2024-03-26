import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import { useEffect, useState } from "react";

import { COLORS, FONT, SIZES } from "../../../constants";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;

const SpotlightGroupCard = ({ topic }) => {
  const [category, setCategory] = useState(topic);
  const handleCategoryPress = () => {
    router.push({
      pathname: "discover/category",
      params: {
        id: topic.id,
        name: topic.categoryName,
        bannerImage: topic.categoryBannerImage,
      },
    });
  };
  return (
    <Pressable style={styles.container} onPress={handleCategoryPress}>
      <Text style={styles.descriptionText}>
        {topic.categoryShortDescription}
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: topic.categoryBannerImage,
          }}
          resizeMode="cover"
          style={styles.topicImage}
        />
      </View>
      <View style={styles.bottomRowContainer}>
        <View style={styles.exploreTopicImageContainer}>
          <Image
            source={{
              uri: topic.categoryAvatarImage,
            }}
            resizeMode="cover"
            style={styles.exploreTopicImage}
          />
        </View>

        <View style={styles.topicTitleAndCountContainer}>
          <Text style={styles.topicTitleText}>{topic.categoryName}</Text>
          <Text style={styles.countText}>
            {topic.categoryGroupsCount} members
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Explore</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SpotlightGroupCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ITEM_WIDTH,
    height: 335,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: SIZES.medium,
    padding: SIZES.xSmall,
    marginTop: SIZES.small,
  },
  descriptionText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.small,
  },
  topicImage: {
    width: "95%",
    height: "100%",
    borderRadius: SIZES.small,
  },
  bottomRowContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  exploreTopicImageContainer: {
    width: 45,
    height: 45,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  exploreTopicImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  topicTitleAndCountContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  topicTitleText: {
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
    padding: SIZES.xSmall - 4,
    height: "75%",
  },
  buttonText: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.white,
    marginHorizontal: SIZES.xSmall - 4,
  },
});
