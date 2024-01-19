import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import DiscoverSectionHeader from "../../header/DiscoverSectionHeader";
import { COLORS, FONT, SIZES } from "../../../constants";

const trendingNow = [
  {
    title: "nfl",
    iconName: "football-ball",
  },
  {
    title: "fantasy football",
    iconName: "trophy",
  },
  {
    title: "taylor swift",
    iconName: "music",
  },
  {
    title: "unity",
    iconName: "unity",
  },
  {
    title: "gaming",
    iconName: "gamepad",
  },
  {
    title: "artificial intelligence",
    iconName: "robot",
  },
  {
    title: "celebrity gossip",
    iconName: "grin-stars",
  },
];

const TrendingGroups = () => {
  return (
    <View style={styles.container}>
      <DiscoverSectionHeader sectionTitle="Trending Now" />

      <View style={styles.tabsContainer}>
        <FlatList
          data={trendingNow}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab} onPress={() => {}}>
              <Text style={styles.tabText}>
                <FontAwesome5
                  name={item.iconName}
                  size={18}
                  color={COLORS.secondary}
                />
                {"  "}
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TrendingGroups;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: SIZES.medium,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xSmall,
    paddingLeft: SIZES.xSmall,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  tabText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});
