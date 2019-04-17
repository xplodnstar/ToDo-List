import React, { Component } from 'react';
import '../styles/base.css'
import { FaCheckSquare } from 'react-icons/fa'
// import { FaRegCheckSquare } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
// import { FaRegEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
// import { FaRegTrashAlt } from 'react-icons/fa'
// import { checkComp } from '../actions/todoActions';
// import { openEdit } from '../actions/todoActions';
// import { updEdit } from '../actions/todoActions';
// import { remCurr } from '../actions/todoActions';

class CurrentList extends Component {
    // $("#completed").on('click', function(e) {
    //     e.preventDefault()
    //     checkComp()
    //     $(".currentText").html()
    // })

    // $("#edit").on('click', function(e) {
    //     e.preventDefault()
    //     openEdit()
    //     $(".currentText").html()
    // })

    // $("#delCurr").on('click', function(e) {
    //     e.preventDefault()
    //     remCurr()
    //     $(".currentText").html()
    // })




    render() {
        return (
            <ul>
                {/* {
                    currItems.map(item => ( */}
                <li
                    // key={`curr-${item.index}`}
                    className="currentItem">
                    <button className="markComplete" id="completed">
                        <div className="mark1"><FaCheckSquare></FaCheckSquare></div>
                        {/* <div className="mark2"><FaRegCheckSquare></FaRegCheckSquare></div> */}
                    </button>
                    <p className="currentText"></p>
                    <div className="endButtons">
                        <button className="edit" id="edit">
                            <div className="edit1"><FaEdit></FaEdit></div>
                            {/* <div className="edit2"><FaRegEdit></FaRegEdit></div> */}
                        </button>
                        <button className="delete" id="delCurr">
                            <div className="delCurr1"><FaTrashAlt></FaTrashAlt></div>
                            {/* <div className="delCurr2"><FaRegTrashAlt></FaRegTrashAlt></div> */}
                        </button>
                    </div>
                </li>
                {/* ))
                } */}
            </ul>
        )
    }
}

export default CurrentList;