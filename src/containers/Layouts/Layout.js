import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';
import GridLayout from "react-grid-layout";
import React, { Component } from 'react';
import CSS from './Layout.css';

//Layout after zoom in
class Layout extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        let {layout, idxLayout} = this.props
        console.log(idxLayout)
        let gridStructure = layout[idxLayout].gridStructure
        //render all the object
      return (
        <GridLayout className="layout" layout={gridStructure} cols={12} rowHeight={100} width={1500}>
            {gridStructure.map(key=><div className={CSS.Layout} key={key.i}>{key.i}</div>)}
        </GridLayout>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      layout: state.layOuts,
      idxLayout:state.selectedLayout
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Layout);