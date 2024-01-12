import { Feather, FontAwesome5, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={20}
              color={color}
              className="-mb-3"
              name="dashboard"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <Feather
              name="shopping-cart"
              size={20}
              className="-mb-3"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color }) => (
            <Feather size={20} color={color} className="-mb-3" name="package" />
          ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <Feather
          //           name="package"
          //           size={20}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
            <Tabs.Screen
        name="tools"
        options={{
          title: "Tools",
          tabBarIcon: ({ color }) => (
            <Octicons
              name="tools"
              size={20}
              className="-mb-3"
              color={color}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="stores"
        options={{
          title: "Stores",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="store"
              size={20}
              className="-mb-3"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
