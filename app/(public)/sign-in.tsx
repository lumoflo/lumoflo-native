import { Link, Stack } from "expo-router";
import {
  ActivityIndicator,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../components/Styles";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import React from "react";
import { OAuthButtons } from "../../components/OAuth";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { isLoaded, userId } = useAuth();

  return (
    <View className="">
      <Stack.Screen options={{ headerShown: false }} />
      {!isLoaded && <ActivityIndicator size="large" color="text-primary" />}

      <SignedIn>
        <Link href={"/profile"} asChild>
          <TouchableOpacity style={{ ...styles.secondaryButton }}>
            <Text style={styles.secondaryButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </Link>
      </SignedIn>

      <SignedOut>
        <SafeAreaView>
          <View className="flex h-full flex-col justify-between items-center space-y-4">
            <View>
              <Image
                source={require("../../assets/images/lumoflo_logo.png")}
                className="w-24 h-24 mx-auto mt-5"
              ></Image>
              <Text className="tracking-tight mt-5 font-bold text-4xl text-center">
                Lumoflo
              </Text>
              <Text className="text-muted-foreground text-lg">
                Please login to continue
              </Text>
            </View>
            <View className="absolute bottom-0 flex mx-5 flex-row space-x-4">
              <OAuthButtons />
            </View>
          </View>
        </SafeAreaView>
      </SignedOut>
    </View>
    // <View style={styles.container}>
    //   <Stack.Screen
    //     options={{
    //       title: "Home",
    //     }}
    //   />
    //   <Text>Welcome!</Text>
    //   <SignedIn>
    //     <Link href={"/profile"} asChild>
    //       <TouchableOpacity style={{ ...styles.secondaryButton }}>
    //         <Text style={styles.secondaryButtonText}>Go to Profile</Text>
    //       </TouchableOpacity>
    //     </Link>
    //   </SignedIn>
    //   <SignedOut>
    //     <Link href={"/sign-in"} asChild>
    //       <TouchableOpacity style={{ ...styles.secondaryButton }}>
    //         <Text style={styles.secondaryButtonText}>Sign In</Text>
    //       </TouchableOpacity>
    //     </Link>
    //     <Link href={"/sign-up"} asChild>
    //       <TouchableOpacity style={{ ...styles.secondaryButton }}>
    //         <Text style={styles.secondaryButtonText}>Sign Up</Text>
    //       </TouchableOpacity>
    //     </Link>
    //   </SignedOut>
    // </View>
  );
}
