import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigator from "./navigation/BottomNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
