import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './../../containers/Layout'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          
        <Route path="/" component={Layout}/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
