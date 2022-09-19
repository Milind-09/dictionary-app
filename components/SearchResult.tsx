import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import DictionaryContext from "../context/DictionaryContext";

export default function SearchResult() {
  let { dictionaryData, word }: any = React.useContext(DictionaryContext);

  return (
    <View>
      <FlatList
        data={dictionaryData.slice(0, 4)}
        renderItem={(element) => {
          let { definition } = element.item;
          return (
            <View style={styles.container}>
              <Text>
                <Text style={styles.wordTitle}>{word}</Text> {" : "} <Text>{definition}</Text>
                
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 1,
  },
  wordTitle:{
    fontSize:18,
  }
});
