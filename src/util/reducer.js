//the state object

const initialState = {
    data: [],
    isFetching: false,
    error: "",
    YahooName: "",
    searchTerm: "",
  };
  
  export const nbaReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PLAYER_START":
        return {
          ...state,
          isFetching: true,
          error: "",
        };
      case "FETCH_PLAYER_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isFetching: false,
  
        };
      case "FETCH_PLAYER_FAIL":
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case "SET_SEARCH_TERM":
        return {
          ...state,
          searchTerm: action.payload,
        };
      default:
        return state;
    }
  };
  