import React, { Component } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
// import { FaRegCheckSquare } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
// import { FaRegTrashAlt } from 'react-icons/fa'
import { checkComp } from '../actions/todoActions';
import { remCurr } from '../actions/todoActions';


class CurrListItem extends Component {
    handleComplete = (e) => {
        e.preventDefault()
        checkComp(this.props.id)
    }

    handleDelete = (e) => {
        e.preventDefault()
        remCurr(this.props.id)
    }

    render() {
        return (
            <li className="currentItem">
                <button className="markComplete" id="completed" onClick={this.handleComplete}>
                    <div className="mark1"><FaCheckSquare></FaCheckSquare></div>
                    {/* <div className="mark2"><FaRegCheckSquare></FaRegCheckSquare></div> */}
                </button>
                <p className="currentText">{this.props.text}</p>
                <div className="endButtons">
                    <button className="delete" id="delCurr" onClick={this.handleDelete}>
                        <div className="delCurr1"><FaTrashAlt></FaTrashAlt></div>
                        {/* <div className="delCurr2"><FaRegTrashAlt></FaRegTrashAlt></div> */}
                    </button>
                </div>
            </li>
        )
    }
}

export default CurrListItem