const initialState = {
  countryHistories: []
};

const CountryStatisticsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_HISTORY': {
      return {
        ...state,
        countryHistories: [...state.countryHistories, action.value]
      }
    }
    case 'DELETE_HISTORY': {
      return {
        ...state,
        countryHistories: state.countryHistories.filter((m => m.ApiCallTime !== action.value))
      }
    }
    default: {
      return state;
    }
  }
}

export default CountryStatisticsReducer;