import React, { Component } from 'react';
// import { connect } from 'react-redux'
import '../styles/base.css'
import { FaPlusSquare } from 'react-icons/fa'
// import { FaRegPlusSquare } from 'react-icons/fa'
import { addNew } from '../actions/todoActions';


class AddToList extends Component {
    state = {
        entry: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.entry !== '') {
            addNew(this.state.entry)
            this.setState({
                entry: ''
            })
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="addToList">
                    <input type="text" name="entry" className="newItem" placeholder="New Item" value={this.state.entry} onChange={this.handleChange}></input>
                    <button type="submit" className="addButton" id="add">
                        <div className="add1"><FaPlusSquare></FaPlusSquare></div>
                        {/* <div className="add2"><FaRegPlusSquare></FaRegPlusSquare></div> */}
                    </button>
                </div>
            </form>
        )
    }
}

// function mapStateToProps(appState) {
//     return {
//         currItems: appState.entry
//     }
// }

export default AddToList