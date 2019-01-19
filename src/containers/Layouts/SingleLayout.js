import React, { Component } from 'react';
import ComponentsCont from './../../containers/ComponentsCont';
import CSS from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className={CSS.FlexyLayout}>
          <ComponentsCont/>
      </div>
    );
  }
}

export default Layout;
