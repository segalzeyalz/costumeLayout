import React, { Component } from 'react';
import Header from './../Header'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <div className={CSS.App}>
        <Header/>
      </div>
    );
  }
}

export default App;
