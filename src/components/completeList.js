import React, { Component } from 'react';
import { connect } from 'react-redux'
import CompListItem from './compListItem'

class CompleteList extends Component {
    render() {
        return (
            <div className="lists">
                <h2>{this.props.compItems.length} items Completed</h2>
                <ul>
                    {this.props.compItems.map(todo => (
                        <CompListItem {...todo} key={'comp' + todo.id} ></CompListItem>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        compItems: appState.compItems
    }
}

export default connect(mapStateToProps)(CompleteList)