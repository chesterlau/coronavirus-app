const initialState = {
  countrySearchHistories: []
};

const CountrySearchHistoryReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_HISTORY': {
      return {
        ...state,
        countrySearchHistories: [...state.countrySearchHistories, action.value]
      }
    }
    case 'DELETE_HISTORY': {
      return {
        ...state,
        countrySearchHistories: state.countrySearchHistories.filter((m => m.ApiCallTime !== action.value))
      }
    }
    default: {
      return state;
    }
  }
}

export default CountrySearchHistoryReducer;