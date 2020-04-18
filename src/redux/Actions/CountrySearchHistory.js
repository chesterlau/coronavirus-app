export const CountrySearchHistoryActionTypes =  {
  ADD_HISTORY: "ADD_HISTORY",
  DELETE_HISTORY: "DELETE_HISTORY"
}

export const addHistory = (value) => {
  return {
    type: CountrySearchHistoryActionTypes.ADD_HISTORY,
    value: value
  }
}

export const addHistoryAsync = (value) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addHistory(value))
    }, 2000)
  }
}

export const deleteHistory = (value) => {
  return {
    type: CountrySearchHistoryActionTypes.DELETE_HISTORY,
    value: value
  }
}
