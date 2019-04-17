import dictionary from '../actions/dictionary'

const initialState = {
  currItems: [],
  compItems: [],
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case dictionary.ADD_NEW:
      return { ...state, currItems: [action.currItems, ...state] }
    // case dictionary.CHECK_COMP:
    //   return { ...state, currItems, compItems }
    // case dictionary.OPEN_EDIT:
    //   return { ...state, currItems }
    // // case dictionary.UPD_EDIT:
    // //   return { ...state, currItems }
    // case dictionary.REM_CURR:
    //   return { ...state, currItems }
    // case dictionary.REM_COMP:
    //   return { ...state, compItems }
    default:
      return state
  }
}
