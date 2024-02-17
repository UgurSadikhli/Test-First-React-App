import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Base = () => {
  const handleButtonPress = () => {
    console.log("butto pressed");
  };

  return (
    <>
      <TouchableOpacity onPress={handleButtonPress}>
        <View style={styles.container}>
          <Text style={styles.title}>testing base componentn</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "green",
    borderRadius: 5,
  },
  title: {
    fontWeight: "700",
    color: "white",
    padding: 4,
  },
});

export default Base;
