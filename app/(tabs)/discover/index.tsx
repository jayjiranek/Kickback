import { Stack } from "expo-router";
import { View, SafeAreaView, ScrollView } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

import {
  KickbackSpotlight,
  RecommendedGroups,
  TrendingGroups,
  TopCharts,
} from "../../../components";

const discover = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KickbackSpotlight />
          <TrendingGroups />
          <RecommendedGroups />
          <TopCharts />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default discover;
