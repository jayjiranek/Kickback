import { Tabs } from "expo-router";

//icons
import { Ionicons } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../constants";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.darkerBackground,
          paddingTop: 5,
          borderTopWidth: 1,
          borderTopColor: COLORS.grey,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "DMRegular",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-sharp"
              size={35}
              color={focused ? COLORS.primary : COLORS.lightWhite}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="compass-sharp"
              size={35}
              color={focused ? COLORS.primary : COLORS.lightWhite}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search-sharp"
              size={35}
              color={focused ? COLORS.primary : COLORS.lightWhite}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-sharp"
              size={35}
              color={focused ? COLORS.primary : COLORS.lightWhite}
            />
          ),
        }}
      />
    </Tabs>
  );
};
