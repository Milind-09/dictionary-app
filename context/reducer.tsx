export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload.value,
      };
    case "GET_INPUT_VALUE":
      return {
        ...state,
        getInputValue: state.inputValue,
      };
    case "GET_DICTIONARY_DATA":
      return {
        ...state,
        dictionaryData: action.payload.dictionaryData,
        word: action.payload.word,
        loading: false,
        errorMessage: "",
        randomData: {},
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        loading: false,
        errorMessage: "Data Not Found",
      };
    case "GET_RANDOM_DATA":
      return {
        ...state,
        randomData: action.payload.randomData,
        loading: false,
      };
    case "DETAILS_DATA":
      return {
        ...state,
        prounce: action.payload.prounce,
        noun: action.payload.noun,
        verb: action.payload.verb,
      };
  }
}
