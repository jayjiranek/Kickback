import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, StyleSheet, Image, View } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

import { ScreenHeaderBtn } from "../../../components";
import { DrawerToggleButton } from "@react-navigation/drawer";

function LogoTitle() {
  return (
    <Image
      source={require("../../../assets/images/kickback-logo-circle.png")}
      style={{ width: 60, height: 60, alignItems: "center" }}
    />
  );
}

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconName="notifications-outline"
              handlePress={() => {}}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <ScreenHeaderBtn iconName="add-circle" handlePress={() => {}} />
          ),
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
