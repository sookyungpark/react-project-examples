import * as actions from './actions'

const initialState = {
  open: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_SIDEBAR:
      return { ...state, ...{ open: true } }
    case actions.CLOSE_SIDEBAR:
      return { ...state, ...{ open: false } }
    default:
      return state
  }
}

export default reducer
