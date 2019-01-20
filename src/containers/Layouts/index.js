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
        let {layOuts} =  this.props
        return (
            <BrowserRouter>
                <GridLayout className="layout" layout={this.props.layoutOutlines} cols={12} rowHeight={100} width={1500}>
                    {this.props.layoutOutlines.map((elem,index)=>
                        <div className={CSS.Layout} key={elem.i}>
                            <GridLayout className="layout" layout={layOuts[index].gridStructure} cols={12} rowHeight={30} width={650}>
                                {layOuts[index].gridStructure.map(key=><div className={CSS.Layout} key={key.i}>{key.i}
                                </div>)}
                             </GridLayout>
                        </div>
                    )}
                    <Switch>   
                     <Route path="/layout" component={Layout} />
                    </Switch>
                </GridLayout>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        layoutOutlines: state.layout,
        layOuts:state.layOuts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        updateLayout: () => dispatch({type:actionTypes.GET_LAYOUT})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);