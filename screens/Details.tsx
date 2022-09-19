import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AudioPlay from "../components/AudioPlay";
import DictionaryContext from "../context/DictionaryContext";

export default function Details() {
  let { word, pronounce, noun, verb }: any = React.useContext(DictionaryContext);

  
  return (
    <View>
      <View style={styles.item}>
        <Text>{word}</Text>
        <Text>Pronuunciation</Text>
        <Text>{pronounce.text}</Text>
        <View>
          <AudioPlay/>
        </View>
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
