import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Notifications screen to be implemented</Text>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkBackground,
    flex: 1,
  },
});
