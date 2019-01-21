import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import ComponentsCont from './../../containers/ComponentsCont';
import { connect } from 'react-redux';
import * as actionTypes from './../../constants/actionType';
import CSS from './Layout.css';
import Layout from './Layout';

class LayoutContainer extends Component {
  componentWillMount(){
    this.props.getLayout(this.props.match.params.id)
  }
  render() {
    return (
      <div className={CSS.FlexyLayout}>
          <div className={CSS.Components}><ComponentsCont/></div>
          <div className={CSS.Layouts}><Layout/></div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getLayout: (layoutId) => dispatch({type:actionTypes.CHANGE_LAYOUT, id: layoutId}),
  }
}
export default connect(null, mapDispatchToProps)(LayoutContainer);