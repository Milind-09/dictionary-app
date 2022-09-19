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
    loading: true,
    errorMessage: "",
    randomData: { title: "", word: "", definition: "" },
    prounce: [],
    noun:{},
    verb:{}
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
    state.loading = true;
    let res = await axios.get("https://random-words-api.vercel.app/word");
    let data = res.data;
    let { word } = data[0];
    let { definition } = data[0];

    let randomData = {
      title: "Word of the day",
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
  async function detailsData() {
    try {
      let res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${state.word}`
      );
      let data = res.data;
      let noun = data[0].meanings[0].definitions[0]
      let verb = data[0].meanings[1].definitions[0]
      
      dispatch({
        type: "DETAILS_DATA",
        payload: {
          prounce: data[0].phonetics[1],
          noun,verb
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    randomApi();
  }, []);
  return (
    <DictionaryContext.Provider value={{ ...state, inputFunct, getInputFunct,detailsData }}>
      {children}
    </DictionaryContext.Provider>
  );
}
