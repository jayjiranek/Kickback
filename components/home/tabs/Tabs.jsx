import React, { useState } from "react";
import { Pressable, FlatList, Text, View, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <Pressable style={styles.tab(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.tabText(name, activeTab)}>{name}</Text>
    </Pressable>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.grey,
  },
  tab: (name, activeTab) => ({
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.small,
    paddingHorizontal: SIZES.xLarge,
  }),
  tabText: (name, activeTab) => ({
    fontFamily: FONT.discoverHeader,
    fontSize: SIZES.xLarge,
    color: name === activeTab ? COLORS.primary : COLORS.lightGrey,
    textDecorationLine: name === activeTab ? "underline" : "none",
  }),
});
