import React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};
