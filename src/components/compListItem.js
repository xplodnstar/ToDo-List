import React, { Component } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
// import { FaRegTrashAlt } from 'react-icons/fa'
import { remComp } from '../actions/todoActions';

class CompListItem extends Component {
    handleDelete = (e) => {
        e.preventDefault()
        remComp(this.props.id)
    }

    render() {
        return (
            <li className="completeItem">
                <p className="completeText">{this.props.text}</p>
                <button className="delete" id="delComp" onClick={this.handleDelete}>
                    <div className="delComp1"><FaTrashAlt></FaTrashAlt></div>
                    {/* <div className="delComp2"><FaRegTrashAlt></FaRegTrashAlt></div> */}
                </button>
            </li>
        )
    }
}

export default CompListItem;