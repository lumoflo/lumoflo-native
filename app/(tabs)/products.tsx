import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-2xl">Lumoflo Products</Text>
      <SignedIn>
        <Text>You are Signed in</Text>
      </SignedIn>
      <SignedOut>
        <Text>You are Signed out</Text>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
