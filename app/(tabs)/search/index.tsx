import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";

import { COLORS, SIZES } from "../../../constants";

import { SearchHeader, SearchTabs } from "../../../components";

const tabs = [
  "For you",
  "Trending",
  "Local",
  "Entertainment",
  "News",
  "Sports",
];

const search = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "For you":
        return <Text>For you</Text>;
      case "Trending":
        return <Text>Trending</Text>;
      case "Local":
        return <Text>Local</Text>;
      case "Entertainment":
        return <Text>Entertainment</Text>;
      case "News":
        return <Text>News</Text>;
      case "Sports":
        return <Text>Sports</Text>;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <SearchHeader />
      <SearchTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {displayTabContent()}
    </SafeAreaView>
  );
};

export default search;
