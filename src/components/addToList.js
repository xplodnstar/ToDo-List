import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/base.css'
import { FaPlusSquare } from 'react-icons/fa'
// import { FaRegPlusSquare } from 'react-icons/fa'
import { addNew } from '../actions/todoActions';


class AddToList extends Component {
    state = {
        entry: '',
    }
    // handleSubmit = handleSubmit.bind(this)

    handleOptionChange = (e) => {
        this.setState({
            entry: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.entry !== '') {
            addNew(this.state.entry)
            this.setState.state({
                entry: ''
            })
        }
        // console.log(currItems)
    };

    render() {
        return (
            <form>
                <div className="addToList">
                    <input type="text" className="newItem" placeholder="New Item"></input>
                    <button type="submit" className="addButton" id="add">
                        <div className="add1"><FaPlusSquare></FaPlusSquare></div>
                        {/* <div className="add2"><FaRegPlusSquare></FaRegPlusSquare></div> */}
                    </button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(appState) {
    return {
        currItems: appState.entry
    }
}

export default connect(mapStateToProps)(AddToList)