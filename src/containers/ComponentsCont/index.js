import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import Button from './../../components/Comps/Comps'
import CSS from './ComponentsCont.css';

class ComponentsCont extends Component {
    render(){
        return (<div className={CSS.ComponentsCont}>
                    <Button/>
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