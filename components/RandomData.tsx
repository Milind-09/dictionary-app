import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DictionaryContext from "../context/DictionaryContext";
export default function RandomData() {
  let { randomData }: any = React.useContext(DictionaryContext);
  return (
    <View style={styles.container}>
      <View style={styles.random}>
        <Text style={styles.randomTitle}>{randomData.title}</Text>
        <Text>
          <Text style={styles.randWord}> {randomData.word}</Text> : {" "}
          <Text>{randomData.definition}</Text>
        </Text>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
    borderColor:"blue",
    borderWidth:1,
  },
  random: {
    marginTop: 15,
    marginBottom: 20,
  },
  randomTitle: {
    fontSize: 30,
    fontWeight: "500",
  },
  randWord:{
   fontSize:18,
   fontWeight:"500",
  }
});
