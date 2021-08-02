import React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";


export default ForumScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Forum Screen</Text>
      </View>
    </View>
  );
};
