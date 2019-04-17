import store from '../store'
// so we can use store.dispatch()
import dictionary from '../actions/dictionary'


let id = 0

// add new item from text box to current list
export function addNew(entry) {
    id++
    store.dispatch({
        type: dictionary.ADD_NEW,
        todo: {
            text: entry,
            status: 'pending',
            id: id
        }
    })
}

// move item from current list to completed list
export function checkComp(id) {
    store.dispatch({
        type: dictionary.CHECK_COMP,
        id: id,
    })
}

// remove the specific item from current list
export function remCurr(id) {
    store.dispatch({
        type: dictionary.REM_CURR,
        id: id,
    })
}

// remove the specific item from completed list
export function remComp(id) {
    store.dispatch({
        type: dictionary.REM_CURR,
        id: id,
    })
}
