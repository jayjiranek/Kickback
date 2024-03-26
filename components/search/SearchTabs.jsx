import React, { useState } from "react";
import { Pressable, FlatList, Text, View, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <Pressable style={styles.tab(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.tabText(name, activeTab)}>{name}</Text>
    </Pressable>
  );
}

const SearchTabs = ({ tabs, activeTab, setActiveTab }) => {
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

export default SearchTabs;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.grey,
  },
  tab: (name, activeTab) => ({
    paddingTop: SIZES.small,
    paddingBottom: SIZES.small,
    paddingHorizontal: SIZES.xxSmall - 2,
  }),
  tabText: (name, activeTab) => ({
    fontFamily: FONT.discoverHeader,
    fontSize: SIZES.large,
    color: name === activeTab ? COLORS.primary : COLORS.lightGrey,
    textDecorationLine: name === activeTab ? "underline" : "none",
  }),
});
