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
        ...state, compItems: state.currItems.map(todo => {
          if (todo.id === action.id) {
            return {
              text: todo.text,
              status: 'complete',
              id: todo.id
            }
          } else {
            return todo
          }
        }).filter(todo => {
          if (todo.status === 'complete') {
            return todo
          }
        }), currItems: state.currItems.filter(todo => {
          if (todo.status !== 'complete') {
            return todo
          }
        })
      }

    case dictionary.REM_CURR:
      return {
        ...state, currItems: state.currItems.filter(todo => {
          if (todo.id !== action.id) {
            return todo
          }
        })
      }

    case dictionary.REM_COMP:
      return {
        ...state, compItems: state.compItems.filter(todo => {
          if (todo.id !== action.id) {
            return todo
          }
        })
      }

    default:
      return state
  }
}
