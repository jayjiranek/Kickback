import { View, ScrollView, SafeAreaView, Button } from "react-native";

import { COLORS, SIZES } from "../../../constants";

import { AccountHeader, AccountOptions } from "../../../components";
import { Auth } from "aws-amplify";

async function signOut() {
  try {
    await Auth.signOut();
    console.log("Signed Out");
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const account = () => {
  console.log("Hey there");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={{ flex: 1, padding: SIZES.small }}>
        <ScrollView>
          <AccountHeader />
          <AccountOptions />
          <Button onPress={() => signOut()} title="Sign out" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default account;
