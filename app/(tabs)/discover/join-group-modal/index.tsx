import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { router, Link, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

import { COLORS, SIZES, FONT } from "../../../../constants";
import { listChatRoomsByRoomTopic } from "./ChatRoomsByRoomTopicQuery";
import { FeaturedGroupModalCard } from "../../../../components";

const JoinGroupModule = () => {
  const isPresented = router.canGoBack();
  const [chatRooms, setChatRooms] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [items, setItems] = useState<Array<ItemType<string>>>([
    { label: "20 members", value: "20" },
    { label: "50 members", value: "50" },
    { label: "100 members", value: "100" },
  ]);

  // params
  const params = useLocalSearchParams();
  const roomtopicID = params.id;
  const topicName = params.topicName;
  const topicDescription = params.topicDescription;
  const topicImage = params.topicImage;

  // fetch chat rooms by topic
  useEffect(() => {
    API.graphql(
      graphqlOperation(listChatRoomsByRoomTopic, { roomtopicID })
    ).then((result) => setChatRooms(result.data.listChatRooms.items));
  }, [roomtopicID]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.topicImageContainer}>
            <Image
              source={{ uri: topicImage }}
              resizeMode="cover"
              style={styles.topicImage}
            />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.topicTitleText}>{topicName}</Text>
            <Text style={styles.topicDescriptionText}>{topicDescription}</Text>
          </View>
        </View>
        <Text style={styles.featuredGroupText}>Be placed in a Kickback</Text>
        <Text style={styles.featuredGroupDescriptionText}>
          Select your desired group size and let us take care of finding you the
          perfect Kickback.
        </Text>
        <View style={styles.joinGroupContainer}>
          <View style={styles.dropdownPicker}>
            <DropDownPicker
              open={open}
              value={singleValue}
              items={items}
              setOpen={setOpen}
              setValue={setSingleValue}
              setItems={setItems}
              placeholder="Choose group size"
              dropDownDirection="TOP"
              multiple={false}
              style={{
                backgroundColor: COLORS.darkDetailsBackground,
                borderColor: COLORS.lightGrey,
              }}
              textStyle={{
                color: COLORS.lightGrey,
                fontFamily: FONT.bold,
                fontSize: SIZES.medium,
              }}
              containerStyle={{
                backgroundColor: COLORS.darkDetailsBackground,
              }}
            />
          </View>
          <Pressable style={styles.joinGroupButton}>
            <Text style={styles.buttonText}>Join</Text>
          </Pressable>
        </View>

        <View style={styles.featuredGroupsContainer}>
          <Text style={styles.featuredGroupText}>Join a Featured Kickback</Text>
          <FlatList
            data={chatRooms}
            renderItem={({ item }) => (
              <FeaturedGroupModalCard kickback={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JoinGroupModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.medium,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: SIZES.medium,
  },
  topicImageContainer: {
    width: 75,
    height: 75,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  topicImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  headerTextContainer: {
    marginHorizontal: SIZES.medium,
    flexShrink: 1,
  },
  topicTitleText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.lightWhite,
  },
  topicDescriptionText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.lightGrey,
  },
  joinGroupContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.medium,
  },
  dropdownPicker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  joinGroupButton: {
    backgroundColor: COLORS.primary,
    height: 35,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    marginLeft: SIZES.xSmall,
  },
  buttonText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginHorizontal: SIZES.xSmall - 4,
  },
  featuredGroupsContainer: {
    marginVertical: SIZES.medium,
  },
  featuredGroupText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  featuredGroupDescriptionText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.lightGrey,
  },
});
