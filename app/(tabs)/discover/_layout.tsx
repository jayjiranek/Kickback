import { Stack, router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";

const handleCreatePush = () => {
  router.push("discover/create-kickback-modal");
};

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: true,
          headerTransparent: true,
          headerLeft: () => (
            <Text
              style={{
                fontSize: SIZES.xxLarge,
                fontFamily: FONT.discoverHeader,
                color: COLORS.tertiary,
              }}
            >
              Find a Kickback
            </Text>
          ),
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <ScreenHeaderBtn iconName="search" handlePress={() => {}} />
              <ScreenHeaderBtn
                iconName="add-circle-outline"
                handlePress={handleCreatePush}
              />
            </View>
          ),
          headerTitle: "",
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.xLarge,
            color: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="category/index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerTintColor: COLORS.white,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="join-group-modal/index"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="create-kickback-modal/index"
        options={{
          presentation: "modal",
          headerTitle: "Create a Kickback",
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: true,
          headerTransparent: true,
          headerTitleStyle: {
            fontFamily: FONT.discoverHeader,
            fontSize: SIZES.xxLarge,
            color: COLORS.lightWhite,
          },
        }}
      />
    </Stack>
  );
};

export default StackLayout;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
  },
});
