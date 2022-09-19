import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DictionaryContext from "../context/DictionaryContext";

export default function Details() {
  let { word, prounce, noun, verb }: any = React.useContext(DictionaryContext);

  
  
  return (
    <View>
      <View style={styles.item}>
        <Text>{word}</Text>
        <Text>Pronuunciation</Text>
        <Text>{prounce.text}</Text>
      </View>

      <View style={styles.item}>
        <Text>noun:</Text>
        <Text>{noun.definition}</Text>
        <Text>example:{noun.example}</Text>
      </View>

      <View style={styles.item}>
        <Text>verb:</Text>
        <Text>{verb.definition}</Text>
        <Text>example:{verb.example}</Text>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  item: {
    marginTop: 25,
    marginLeft:25,
  },
});
