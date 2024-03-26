import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";

import OnlineArticleLink from "../../common/OnlineArticleLink";

import { COLORS, FONT, SIZES } from "../../../constants";

const BreakingNewsAlert = ({ alert }) => {
  const imageURL =
    "https://us.123rf.com/450wm/anatolir/anatolir1910/anatolir191000598/131053220-storm-lightning-bolt-icon-simple-style.jpg?ver=6";
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.senderImageContainer}>
        <Image
          source={{ uri: imageURL }}
          style={styles.senderImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.headerText}>breaking news</Text>
        <View style={styles.messageTextContainer}>
          <Text style={styles.messageText}>{alert.text}</Text>
          <OnlineArticleLink url={alert.articleLink} />
        </View>
      </View>
    </View>
  );
};

export default BreakingNewsAlert;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginVertical: SIZES.xxSmall - 2,
    paddingHorizontal: 5,
    borderRadius: SIZES.medium,
    width: "80%",
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
  messageTextContainer: {
    borderRadius: SIZES.medium,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.grey,
    paddingHorizontal: SIZES.small,
  },
  headerText: {
    fontFamily: FONT.discoverHeader,
    color: COLORS.primary,
    fontSize: SIZES.large,
    marginBottom: 2,
    marginLeft: SIZES.small,
  },
  messageText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginVertical: 5,
  },
});
