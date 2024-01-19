import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerLeft: () => (
            <Text
              style={{
                fontSize: SIZES.xxLarge,
                color: COLORS.tertiary,
              }}
            >
              Kickbacks
            </Text>
          ),
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <ScreenHeaderBtn iconName="search" handlePress={() => {}} />
              <ScreenHeaderBtn iconName="filter" handlePress={() => {}} />
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
    </Stack>
  );
};

export default StackLayout;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
  },
});
