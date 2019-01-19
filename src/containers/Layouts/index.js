import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import CSS from './Layout.css';
import GridLayout from "react-grid-layout";
import Layout from './SingleLayout.js';
import { connect } from 'react-redux';

class Layouts extends Component {
    componentWillMount(){
        this.props.updateLayout()
    }
    render(){
        return (
            <BrowserRouter>
                <GridLayout className="layout" layout={this.props.layoutOutlines} cols={12} rowHeight={100} width={1500}>
                    {this.props.layoutOutlines.map(elem=>
                        <div className={CSS.Layout} key={elem.i}><Link to="/layouts/layout">{elem.i}</Link></div>
                    )}
                    <Switch>   
                     <Route path="/layouts/layout" component={Layout} />
                    </Switch>
                </GridLayout>
            </BrowserRouter>
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