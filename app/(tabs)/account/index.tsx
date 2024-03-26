import { View, ScrollView, SafeAreaView, Button } from "react-native";

import { COLORS, SIZES } from "../../../constants";

import { AccountHeader, AccountOptions } from "../../../components";

const account = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={{ flex: 1, padding: SIZES.small }}>
        <ScrollView>
          <AccountHeader />
          <AccountOptions />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default account;
