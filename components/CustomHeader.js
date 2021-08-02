import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        blurRadius={5}
        resizeMode="cover"
        source={require("../assets/images/profile_banner.jpeg")}
        style={styles.banner}
      />
      <Image
        source={require("../assets/images/profile_avatar.jpg")}
        style={styles.avatar}
      />
      <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
        <Text style={styles.name}>KamiNoZetsubou</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.rank}>#196.000</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.pp}> 2.669 pp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "15%",
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    marginTop: -65,
    marginLeft: 20,
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: -50,
    marginLeft: 75,
    color: "white",
    fontSize: 24,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  rank: {
    marginTop: -41,
    marginRight: 10,
    color: "white",
    fontSize: 24,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  pp: {
    marginTop: -14,
    marginRight: 10,
    color: "white",
    fontSize: 18,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
