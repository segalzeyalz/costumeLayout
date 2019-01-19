import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';
import GridLayout from "react-grid-layout";
import React, { Component } from 'react';
import CSS from './Layout.css';


class Layout extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        let {layout, idxLayout} = this.props
        let gridStructure = layout[idxLayout].gridStructure
      return (
        <GridLayout className="layout" layout={gridStructure} cols={12} rowHeight={100} width={1500}>
            <div className={CSS.Layout} key={'a'}>a</div>
            <div className={CSS.Layout} key={'b'}>b</div>
            <div className={CSS.Layout} key={'c'}>c</div>
            <div className={CSS.Layout} key={'d'}>d</div>
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