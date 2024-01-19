import { Stack } from "expo-router";
import { SafeAreaView, View, ScrollView, Text } from "react-native";
import { useCallback, useState } from "react";

import { ChatList, Tabs } from "../../../components";

import { COLORS, FONT, SIZES } from "../../../constants";

const tabs = ["Kickbacks", "Private Chats"];

const home = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Kickbacks":
        return <ChatList />;
      case "Private Chats":
        return <Text>Private Chats</Text>;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <>
        <View style={{ paddingHorizontal: SIZES.medium }}>
          <View style={{ padding: SIZES.small }}>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

export default home;
