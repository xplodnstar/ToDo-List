import store from '../store'
// so we can use store.dispatch()
import dictionary from '../actions/dictionary'


// add new item from text box to current list
export function addNew(entry) {
    // currItems.splice(0, 0, add)
    // return {
    //     currItems: currItems
    // }
    store.dispatch({
        type: dictionary.ADD_NEW,
        newItem: entry,
        // currItems: currItems
    })
}

// // move item from current list to completed list
// export function checkComp() {
//     var moveItem = currItems.splice('index of item', 1)
//     compItems.splice(0, 0, moveItem)
//     return {
//         currItems: currItems,
//         compItems: compItems
//     }
//     store.dispatch({
//         type: dictionary.CHECK_COMP,
//         currItems: currItems,
//         compItems: compItems
//     })
// }

// // // edit specific item from current list
// // export function openEdit() {
// //     // open current item for editing

// //     store.dispatch({
// //         type: dictionary.OPEN_EDIT,
// //         currItems: currItems
// //     })
// // }

// // update the specific item in current list with entered text
// export function updEdit() {
//     currItems.splice('index of item', 0, 'text of input')
//     return {
//         currItems: currItems
//     }
//     store.dispatch({
//         type: dictionary.UPD_EDIT,
//         currItems: currItems
//     })
// }

// // remove the specific item from current list
// export function remCurr() {
//     currItems.splice('index of item', 1)
//     return {
//         currItems: currItems
//     }
//     store.dispatch({
//         type: dictionary.REM_CURR,
//         currItems: currItems
//     })
// }

// // remove the specific item from completed list
// export function remComp() {
//     compItems.splice('index of item', 1)
//     return {
//         compItems: compItems
//     }
//     store.dispatch({
//         type: dictionary.REM_CURR,
//         compItems: compItems
//     })
// }
