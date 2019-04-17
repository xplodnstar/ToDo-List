import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrListItem from './currListItem'

class CurrentList extends Component {
    render() {
        return (
            <ul>
                {this.props.currItems.map(todo => (
                    <CurrListItem {...todo} key={'todo' + todo.id} ></CurrListItem>
                ))}
            </ul>
        )
    }
}

function mapStateToProps(appState) {
    return {
        currItems: appState.currItems
    }
}

export default connect(mapStateToProps)(CurrentList)