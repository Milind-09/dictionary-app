import React, { useEffect, useReducer } from "react";
import DictionaryContext from "./DictionaryContext";
import reducer from "./reducer";
import axios from "axios";
export default function DictionaryState({ children }: any) {
  let initialState = {
    inputValue: "",
    getInputValue: "",
    word: "",
    dictionaryData: [],
    loading: false,
    errorMessage: "",
    randomData: { word: "", definition: "" },
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  function inputFunct(text: string) {
    dispatch({
      type: "INPUT_VALUE",
      payload: {
        value: text,
      },
    });
  }

  function getInputFunct() {
    dispatch({
      type: "GET_INPUT_VALUE",
    });
    dictionaryApi();
  }
  async function dictionaryApi() {
    state.loading = true;
    try {
      let res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${state.inputValue}`
      );

      let data = res.data;
      let { word } = data[0];
      let dictionaryData = data[0].meanings[0].definitions;
      dispatch({
        type: "GET_DICTIONARY_DATA",
        payload: {
          dictionaryData,
          word,
        },
      });
    } catch (error: any) {
      dispatch({
        type: "ERROR_MESSAGE",
      });
    }
  }
  async function randomApi() {
    let res = await axios.get("https://random-words-api.vercel.app/word/");
    let data = res.data;
    let { word } = data[0];
    let { definition } = data[0];

    let randomData = {
      word,
      definition,
    };
    dispatch({
      type: "GET_RANDOM_DATA",
      payload: {
        randomData,
      },
    });
  }

  useEffect(() => {
    randomApi();
  }, []);
  return (
    <DictionaryContext.Provider value={{ ...state, inputFunct, getInputFunct }}>
      {children}
    </DictionaryContext.Provider>
  );
}
