import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import CSS from './ComponentsCont.css';
import {
        DeafultButton,
        CustomizedBadge,
        CircularDeterminate,
        ControlledOpenSelect,
        SimpleTooltips} from './../../components/Comps/';

class ComponentsCont extends Component {
    render(){
        return (<div className={CSS.ComponentsCont}>
                   <DeafultButton />
                   <CustomizedBadge/>
                   <CircularDeterminate/>
                   <ControlledOpenSelect/>
                   <SimpleTooltips/>
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