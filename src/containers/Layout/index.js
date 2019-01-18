import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import ComponentsCont from './../../containers/ComponentsCont';
import Header from './../Header';
import CSS from './Layout.css';
import { connect } from 'react-redux';

class Layout extends Component {
    render(){
        return (
        <div>
            <Header/>
            <div className={CSS.AppContainer}>
                <div className={CSS.Components}>
                    <ComponentsCont/>
                </div>
                <div className={CSS.Layouts}>
                    Here is Layout Page
                </div>
            </div>
        </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Layout);