import React, { Component } from 'react';
import * as actionTypes from './../../constants/actionTypes';
import PropTypes from 'prop-types';
import CSS from './Layout.css';
import GridLayout from "react-grid-layout";
import Layout from './SingleLayout.js';
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux';
    
class Layouts extends Component {
    constructor(props){
        super(props)
        this.props.updateLayout()
    }
    render(){
        let { layOuts } =  this.props
        //Render all layouts
        return (
            <div className={CSS.Container}>
                {this.props.layoutOutlines.map((elem,index)=>
                    <div className={CSS.Layout} key={elem.i}>
                        <Link to={`/layout/${index}`}>
                            <GridLayout className="layout" layout={layOuts[index].gridStructure} cols={12} rowHeight={25} width={500}>
                            {layOuts[index].gridStructure.map((key)=> {
                                return <div className={CSS.Layout} key={key.i}>
                                 {key.comps && key.comps.length>0? key.comps.map(elem=>elem.comp):null}
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
            layoutOutlines: state.layout.layout,
            layOuts:state.components.layOuts
        };
    };
  
  const mapDispatchToProps = dispatch => {
    return {
        updateLayout: () => dispatch({type:actionTypes.GET_LAYOUT})
    }
    
}
Layouts.propTypes = {
    updateLayout: PropTypes.func,
    layOuts: PropTypes.array,
    layoutOutlines: PropTypes.array,
    match:PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);