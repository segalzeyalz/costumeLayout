import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layouts from './../../containers/Layouts'
import LayoutContainer from './../../containers/Layouts/SingleLayout'
import Header from './../../components/Header';
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>  
          <Switch>
            <Route exact path="/" component={Layouts}/>
            <Route path="/Layout/:id" component={LayoutContainer}/>
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
