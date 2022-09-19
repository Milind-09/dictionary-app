import React from "react";
import DictionaryContext from "../context/DictionaryContext";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SearchBtn() {
  let { inputFunct, inputValue, getInputFunct }: any =
    React.useContext(DictionaryContext);
  return (
    <View>
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
        <Text style={styles.btnTitle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

let styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width: 140,
    alignSelf: "center",
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
  btnTitle: {
    color: "white",
  },
});
