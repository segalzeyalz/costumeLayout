import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import CSS from './Layout.css';
import GridLayout from "react-grid-layout";
import { connect } from 'react-redux';

class Layouts extends Component {
    componentWillMount(){
        this.props.updateLayout()
    }
    render(){
        return (
            <GridLayout className="layout" layout={this.props.layoutOutlines} cols={12} rowHeight={100} width={1500}>
                {this.props.layoutOutlines.map(elem=>
                    <div className={CSS.Layout} key={elem.i}>{elem.i}</div>
                )}
            </GridLayout>
        )
    }
}

const mapStateToProps = state => {
    return {
        layoutOutlines: state.layout,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        updateLayout: () => dispatch({type:actionTypes.GET_LAYOUT})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);