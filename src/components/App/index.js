import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layouts from './../../containers/Layouts'
import Layout from './../../containers/Layouts/SingleLayout'
import Header from './../../components/Header';

import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>  
          <Route path="/Layouts" component={Layouts}/>
          <Route exact path="/" component={Layouts}/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
