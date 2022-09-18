import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import DictionaryContext from "../context/DictionaryContext";

export default function Home() {
  let {
    inputValue,
    inputFunct,
    getInputFunct,
    word,
    dictionaryData,
    loading,
    errorMessage,
    randomData
  }: any = React.useContext(DictionaryContext);

  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Keyword..."
          onChangeText={inputFunct}
          value={inputValue}
          placeholderTextColor={"gray"}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={getInputFunct}>
        <Text>Search</Text>
      </TouchableOpacity>
      <View style={styles.random}>
        <Text>Word of the day</Text>
        <Text>{randomData.word}: {randomData.definition}</Text>
      </View>
      {loading && <ActivityIndicator />}
      {errorMessage !== "" ? (
        <Text>{errorMessage}</Text>
      ) : (
        <View>
          <FlatList
            data={dictionaryData.slice(0, 4)}
            renderItem={(element) => {
              let { definition } = element.item;
              return (
                <View>
                  <TouchableOpacity>
                    <Text>
                      {word}: {definition}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#bcc3f8",
    padding: 10,
  },
  inputStyle: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  searchInput: {
    padding: 10,
    outlineStyle: "none",
  },
  random:{
    marginTop:15,
    marginBottom:20
  }
});
