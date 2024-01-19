import { View, Text, StyleSheet } from "react-native";

import {
  Stack,
  useRouter,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

const CategoryScreen = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.grey },
          headerShadowVisible: false,
          headerTitle: params.name,
          headerTintColor: COLORS.white,
        }}
      />
      <Text> hello </Text>
    </View>
  );
};

export default CategoryScreen;
