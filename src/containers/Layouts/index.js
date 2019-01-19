import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import CSS from './Layout.css';
import GridLayout from "react-grid-layout";
import { connect } from 'react-redux';

class Layouts extends Component {
    render(){
        // Rendering each layout
        let layoutOutlines = [];
        let jsxLayout =[]
        for(let i=0;i<6;i++) {
            let newY = (parseInt(i/4))*2;
            let newX = (i%4)*4
            layoutOutlines = [...layoutOutlines, {i: 'a'+i, x: newX, y: newY, w: 4, h: 2, static: true}];
            jsxLayout= [...jsxLayout, <div className={CSS.Layout} key={'a'+i}>{'a'+i}</div>]
        }
   
        return (
            <GridLayout className="layout" layout={layoutOutlines} cols={12} rowHeight={100} width={1500}>
                {jsxLayout.map(Layout=>Layout)}
            </GridLayout>
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
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);