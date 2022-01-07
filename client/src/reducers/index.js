import globalListReducer from './globalListReducer'

const initialState = {
  globalList: []
}

const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          ...reducers[prop]({ [prop]: acc[prop] }, action),
        })
      },
      state
    )
  }
}

const appReducers = combineReducers({
  globalList: globalListReducer,
})

export { initialState, appReducers }
