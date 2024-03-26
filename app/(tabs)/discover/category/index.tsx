import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

import { Stack, useLocalSearchParams } from "expo-router";
import { API, graphqlOperation } from "aws-amplify";

import { COLORS, SIZES, FONT } from "../../../../constants";
import { listRoomTopicsByCategory } from "./RoomTopicByCategoryQuery";
import { RoomTopicCard } from "../../../../components";

const category = () => {
  const [searchText, setSearchText] = useState("");
  const [topics, setTopics] = useState([]);

  // params
  const params = useLocalSearchParams();
  const categoryName: any = params.name;
  const categoryID = params.id;

  //placeholder text for searchbar
  const placeholderText: string = `Search for ${categoryName} Kickbacks...`;

  // fetch the topics
  useEffect(() => {
    API.graphql(
      graphqlOperation(listRoomTopicsByCategory, { categoryID })
    ).then((result) => setTopics(result.data.roomTopicsByCategoryID.items));
  }, [categoryID]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={styles.container}>
        <Text style={styles.topText}>Kickbacks for {categoryName}</Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder={placeholderText}
            />
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={topics}
            renderItem={({ item }) => <RoomTopicCard topic={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.large,
  },
  topText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.discoverHeader,
  },
  listContainer: {
    paddingVertical: SIZES.xSmall,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    paddingTop: SIZES.xSmall - 6,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.darkDetailsBackground,
    borderColor: COLORS.grey,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
});
