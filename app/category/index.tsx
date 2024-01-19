import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { COLORS, SIZES, FONT } from "../../constants";

const CategoryScreen = () => {
  const params = useLocalSearchParams();
  const categoryName: any = params.name;
  const categoryBanner: any = params.bannerImage;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerTitle: categoryName,
          headerTintColor: COLORS.white,
        }}
      />
      <View style={styles.container}>
        <View style={styles.textHeaderContainer}>
          <Text style={styles.topText}>Let's Talk Ball...</Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listHeaderText}>
            Kickbacks for {categoryName}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeaderContainer: {
    margin: SIZES.large,
  },
  topText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.discoverHeader,
  },
  listContainer: {
    margin: SIZES.large,
  },
  listHeaderText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
});
