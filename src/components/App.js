import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'

import AddToList from './addToList'
import CurrentList from './currentList'
import CompleteList from './completeList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wholeList">
          <header className="header">
            <h1 className="title">Nova's To-Do List</h1>
          </header>
          <AddToList></AddToList>
          <div className="list">
            <div className="currentList">
              <CurrentList></CurrentList>
            </div>
            <div className="completeList">
              <CompleteList></CompleteList>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
