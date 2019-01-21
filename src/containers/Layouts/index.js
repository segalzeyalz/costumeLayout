import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { Route, Switch, Link } from 'react-router-dom'
import CSS from './Layout.css';
import GridLayout from "react-grid-layout";
import Layout from './SingleLayout.js';
import { connect } from 'react-redux';
import {
        DeafultButton,
        CustomizedBadge,
        CircularDeterminate,
        ControlledOpenSelect,
        SimpleTooltips} from './../../components/Comps/'

class Layouts extends Component {
    componentWillMount(){
        //Getting layout
        this.props.updateLayout()
    }
    render(){
        let {layOuts} =  this.props
        //Render all layouts
        return (
                <div className={CSS.Container}>
                    {this.props.layoutOutlines.map((elem,index)=>
                        <div className={CSS.Layout} key={elem.i}>
                        <Link to={`/layout/${index}`}>
                            <GridLayout className="layout" layout={layOuts[index].gridStructure} cols={12} rowHeight={25} width={500}>
                            {layOuts[index].gridStructure.map((key,idx)=> {
                                return <div style="width:13%;" className={CSS.Layout} key={key.i}>
                                <div className={CSS.FlexyContainer}>
                                 {key.comps &&key.comps.length>0? key.comps.map(elem=>elem.comp):null}
                                </div>
                                </div>})
                            }
                            </GridLayout>
                        </Link>
                        </div>
                        
                    )}
                    <Switch>   
                         <Route path={`${this.props.match.url}/layout/:id`} component={Layout} />
                    </Switch>
                </div>
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