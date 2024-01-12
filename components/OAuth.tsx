import React from "react";
import * as WebBrowser from "expo-web-browser";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { styles } from "./Styles";
import { useWamUpBrowser } from "../hooks/use-warmup-browser";

WebBrowser.maybeCompleteAuthSession();

export function OAuthButtons() {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWamUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const [isLoading, setIsLoading] = React.useState(false);

  const onPress = React.useCallback(async () => {
    console.log("OAuth button pressed");
    try {
      setIsLoading(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      console.log("OAuth button pressed 2");
      console.log({ createdSessionId });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <TouchableOpacity
        className="bg-primary  font-bold py-4 px-4 rounded-full w-full text-center flex items-center justify-center"
        onPress={onPress}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className="text-primary-foreground font-bold">Continue with Google</Text>
        )}
      </TouchableOpacity>
    </>
  );
}
