import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Layout from './../../containers/Layout'
import Header from './../../components/Header';

import CSS from './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>  
          <Link to="/Header">Header</Link>
          <Link to="/Layout">Layout</Link>
          <Route path="/Layout" component={Layout}/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
