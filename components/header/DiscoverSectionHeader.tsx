import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

const DiscoverSectionHeader = ({ sectionTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitleText}>{sectionTitle}</Text>
    </View>
  );
};

export default DiscoverSectionHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: SIZES.medium,
  },
  sectionTitleText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium + 2,
  },
});
