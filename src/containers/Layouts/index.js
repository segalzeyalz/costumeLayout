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
        console.log(this.props.match)
        return (
                <GridLayout className="layout" layout={this.props.layoutOutlines} cols={12} rowHeight={100} width={1500}>
                    <Switch>   
                     <Route path={`${this.props.match.url}/layout/:id`} component={Layout} />
                    </Switch>
                    {this.props.layoutOutlines.map((elem,index)=>
                        <div className={CSS.Layout} key={elem.i}>
                                <Link to={`${this.props.match.url}/layout/${index}`}>
                                    <GridLayout className="layout" layout={layOuts[index].gridStructure} cols={12} rowHeight={30} width={650}>
                                    {layOuts[index].gridStructure.map(key=>
                                        <div style="width:13%;" className={CSS.Layout} key={key.i}>
                                            <div className={CSS.FlexyContainer}>
                                                {key.comps}
                                            </div>
                                        </div>
                                    )}
                                </GridLayout>
                            </Link>
                        </div>
                                
                    )}
                    
                </GridLayout>
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