import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DictionaryContext from "../context/DictionaryContext";
export default function RandomData() {
  let { randomData }: any = React.useContext(DictionaryContext);
  return (
    <View>
      <View style={styles.random}>
        <Text>{randomData.title}</Text>
        <Text>
          {randomData.word} {randomData.definition}
        </Text>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  random: {
    marginTop: 15,
    marginBottom: 20,
  },
});
