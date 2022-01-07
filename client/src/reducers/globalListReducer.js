
const globalListReducer = (state, action = {}) => {
  switch (action.type) {
    case 'CONCATLIST':
      return {
        ...state,
        globalList: state.globalList.concat(action.payload)
      }

    default:
      return state
  }
}

export default globalListReducer