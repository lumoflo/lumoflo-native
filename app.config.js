//import {NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} from "@env"

module.exports = {
  expo: {
    name: "lumoflo-native",
    slug: "lumoflo-native",
    userInterfaceStyle: "automatic",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    extra: {
      clerkPublishableKey:
        "pk_test_ZWxlZ2FudC1naWJib24tMTkuY2xlcmsuYWNjb3VudHMuZGV2JA",
    },
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
  },
};
