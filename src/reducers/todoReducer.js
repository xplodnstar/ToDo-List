import dictionary from '../actions/dictionary'

const initialState = {
  currItems: [],
  compItems: [],
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case dictionary.ADD_NEW:
      return { ...state, currItems: [action.todo, ...state.currItems] }

    case dictionary.CHECK_COMP:
      return {
        ...state,
        compItems: [state.currItems.find(todo => todo.id === action.id), ...state.compItems],
        currItems: state.currItems.filter(todo => todo.id !== action.id)
      }

    case dictionary.REM_CURR:
      return {
        ...state, currItems: state.currItems.filter(todo => {
          return todo.id !== action.id
        })
      }

    case dictionary.REM_COMP:
      return {
        ...state, compItems: state.compItems.filter(todo => {
          return todo.id !== action.id
        })
      }

    default:
      return state
  }
}
