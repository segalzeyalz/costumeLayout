import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import ComponentsCont from './../../containers/ComponentsCont';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from './../../constants/actionTypes';
import CSS from './Layout.css';
import Layout from './Layout';

class LayoutContainer extends Component {
  componentDidMount(){
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

LayoutContainer.propTypes = {
  getLayout: PropTypes.func,
  match: PropTypes.object,
};
export default connect(null, mapDispatchToProps)(LayoutContainer)