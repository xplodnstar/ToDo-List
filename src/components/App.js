import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'

import AddToList from './addToList'
import CurrentList from './currentList'
import CompleteList from './completeList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wholeList">
            <header className="header">
              <h1 className="title">Nova's To-Do List</h1>
            </header>
            <div className="list">
              <div className="currentList">
                <AddToList></AddToList>
                <CurrentList></CurrentList>
              </div>
              <div className="completeList">
                <CompleteList></CompleteList>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
