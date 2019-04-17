import React, { Component } from 'react';
import '../styles/base.css'
import { FaTrashAlt } from 'react-icons/fa'
// import { FaRegTrashAlt } from 'react-icons/fa'
// import todoReducer from '../reducers/todoReducer'
// import { remComp } from '../actions/todoActions';

class CompleteList extends Component {
    // $("#delComp").on('click', function(e) {
    //     e.preventDefault()
    //     remComp()
    //     $(".completeText").html()
    // })



    render() {
        return (
            <ul>
                {/* {
                    compItems.map(item => ( */}
                <li
                    // key={`comp-${item.index}`}
                    className="completeItem">
                    <p className="completeText"></p>
                    <button className="delete" id="delCurr">
                        <div className="delComp1"><FaTrashAlt></FaTrashAlt></div>
                        {/* <div className="delComp2"><FaRegTrashAlt></FaRegTrashAlt></div> */}
                    </button>
                </li>
                {/* ))
                } */}
            </ul>
        )
    }
}

export default CompleteList;