import React, { Component } from 'react';
import Header from './../Header';
import ComponentsCont from './../../containers/ComponentsCont';
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <div className={CSS.App}>
        <Header/>
        <div className={CSS.AppContainer}>
          <div className={CSS.Components}>
            <ComponentsCont/>
          </div>
          <div className={CSS.Layouts}>
            Here is Layout
          </div>
        </div>
      </div>
    );
  }
}

export default App;
