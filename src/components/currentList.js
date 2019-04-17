import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrListItem from './currListItem'

class CurrentList extends Component {
    render() {
        return (
            <div className="lists">
                <h2>{this.props.currItems.length} items Pending</h2>
                <ul>
                    {this.props.currItems.map(todo => (
                        <CurrListItem {...todo} key={'todo' + todo.id} ></CurrListItem>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
        currItems: appState.currItems
    }
}

export default connect(mapStateToProps)(CurrentList)