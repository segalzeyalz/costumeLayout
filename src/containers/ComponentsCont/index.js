import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import CSS from './ComponentsCont.css';

class ComponentsCont extends Component {
    render(){
        return (<div className={CSS.ComponentsCont}>
               <Button variant="contained" color="primary" >ddddddddd</Button>
                </div>)
    }
}
const mapStateToProps = state => {
    return {
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComponentsCont);