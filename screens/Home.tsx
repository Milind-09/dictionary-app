import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import RandomData from "../components/RandomData";
import SearchBtn from "../components/SearchBtn";
import SearchResult from "../components/SearchResult";
import DictionaryContext from "../context/DictionaryContext";

export default function Home({ navigation }: any) {
  let { loading, errorMessage, detailsData, dictionaryData }: any =
    React.useContext(DictionaryContext);
  function newScreen() {
    navigation.navigate("Details");
    detailsData();
  }
  return (
    <View style={styles.container}>
      <SearchBtn />

      {dictionaryData.length === 0 && <RandomData />}

      {loading && <ActivityIndicator />}
      {errorMessage !== "" ? (
        <View style={styles.errMsg}>
          <Text>{errorMessage}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={newScreen}>
          <SearchResult />
        </TouchableOpacity>
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
  random: {
    marginTop: 15,
    marginBottom: 20,
  },
  errMsg: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
});
