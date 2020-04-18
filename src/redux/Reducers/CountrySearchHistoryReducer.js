import { CountrySearchHistoryActionTypes } from '../Actions/CountrySearchHistory';

const initialState = {
  countrySearchHistories: []
};

const CountrySearchHistoryReducer = (state = initialState, action) => {

  switch (action.type) {
    case CountrySearchHistoryActionTypes.ADD_HISTORY: {
      return {
        ...state,
        countrySearchHistories: [...state.countrySearchHistories, action.value]
      }
    }
    case CountrySearchHistoryActionTypes.DELETE_HISTORY: {
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