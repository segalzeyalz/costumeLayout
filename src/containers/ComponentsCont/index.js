import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import {ButtonAppBar, DeafultButton, SecondaryButton} from './../../components/Comps/'
import CSS from './ComponentsCont.css';

class ComponentsCont extends Component {
    render(){
        return (<div className={CSS.ComponentsCont}>
                   <ButtonAppBar position="static">AppBar</ButtonAppBar>
                   <DeafultButton />
                   <SecondaryButton/>
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