import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store.js';
import { Provider } from 'react-redux';


import Category from './components/category.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Trello Redux Clone</h1>
          </header>
          <Category />
        </div>
      </Provider>
    );
  }
}

export default App;
