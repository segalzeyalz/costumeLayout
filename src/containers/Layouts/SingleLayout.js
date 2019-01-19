import React, { Component } from 'react';
import ComponentsCont from './../../containers/ComponentsCont';
import CSS from './Layout.css';
import Layout from './Layout'

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
export default LayoutContainer;

