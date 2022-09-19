import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AudioPlay from "../components/AudioPlay";
import DictionaryContext from "../context/DictionaryContext";

export default function Details() {
  let { word, pronounce, noun, verb }: any = React.useContext(DictionaryContext);

  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.wordStyle}>{word}</Text>
        <Text>Pronuunciation</Text>
        <Text>{pronounce.text}</Text>
        <View>
          <AudioPlay/>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.wordStyle}>noun:</Text>
        <Text>{noun.definition}</Text>
        <Text>example:{noun.example}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.wordStyle}>verb:</Text>
        <Text>{verb.definition}</Text>
        <Text>example:{verb.example}</Text>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  item: {
  marginTop:20,
  padding:10,
    borderColor:"blue",
    borderWidth:1,
  },
  container:{
    margin:20,
  },
  wordStyle:{
    fontSize:18
  }
});
