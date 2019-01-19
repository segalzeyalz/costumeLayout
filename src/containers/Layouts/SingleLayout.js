import React, { Component } from 'react';
import ComponentsCont from './../../containers/ComponentsCont';
import CSS from './Layout.css';

class LayoutContainer extends Component {
  render() {
    return (
      <div className={CSS.FlexyLayout}>
          <div className={CSS.Components}><ComponentsCont/></div>
          <div className={CSS.Layouts}><Layout/></div>
      </div>
    );
  }
}
class Layout extends Component {
  render() {
    return (
      <h1>LayOut</h1>
    );
  }
}

export default LayoutContainer;
