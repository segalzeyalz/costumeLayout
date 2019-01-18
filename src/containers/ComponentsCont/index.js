import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import CSS from './ComponentsCont.css';
import {ButtonAppBar,
        DeafultButton,
        SecondaryButton,
        CustomizedBadge,
        CircularDeterminate,
        ControlledOpenSelect,
        CustomizedSnackbars,
        SimpleTooltips} from './../../components/Comps/'

class ComponentsCont extends Component {
    render(){
        return (<div className={CSS.ComponentsCont}>
                   <ButtonAppBar position="static">AppBar</ButtonAppBar>
                   <DeafultButton />
                   <SecondaryButton/>
                   <CustomizedBadge/>
                   <CircularDeterminate/>
                   <ControlledOpenSelect/>
                   <CustomizedSnackbars/>
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