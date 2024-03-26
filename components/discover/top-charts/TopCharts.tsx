import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";
import DiscoverSectionHeader from "../../header/DiscoverSectionHeader";

import { AntDesign } from "@expo/vector-icons";

const TopCharts = () => {
  const topics = [
    {
      title: "Gaming News & Discussion",
      rank: 1,
      topicId: "gd1",
    },
    {
      title: "fantasy football",
      rank: 2,
      topicId: "gd2",
    },
    {
      title: "taylor swift",
      rank: 3,
      topicId: "gd3",
    },
    {
      title: "unity",
      rank: 4,
      topicId: "gd4",
    },
    {
      title: "gaming",
      rank: 5,
      topicId: "gd5",
    },
    {
      title: "artificial intelligence",
      rank: 6,
      topicId: "gd6",
    },
    {
      title: "celebrity gossip",
      rank: 7,
      topicId: "gd7",
    },
  ];

  return (
    <View style={styles.container}>
      <DiscoverSectionHeader sectionTitle="Kickback Top Charts" />
      <View style={styles.tabsContainer}>
        <FlatList
          data={topics}
          renderItem={({ item }) => (
            <Pressable style={styles.row} onPress={() => {}}>
              <Text style={styles.rowText}>{item.title}</Text>
              <AntDesign name="arrowright" size={18} color={COLORS.white} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default TopCharts;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: SIZES.medium,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xSmall,
    paddingHorizontal: SIZES.medium,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  rowText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});
