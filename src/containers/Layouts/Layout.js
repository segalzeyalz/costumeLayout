import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import * as actionTypes from './../../store/actions';
import GridLayout from "react-grid-layout";
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import App from './../../components/App'
import CSS from './Layout.css';


//Layout after zoom in
class Layout extends Component {
  render(props) {
    library.add(faHome)
    let {layout, idxLayout} = this.props
        let {gridStructure} = layout[idxLayout]
        //render all the object
      return (
        <div>
        <GridLayout className="layout" layout={gridStructure} cols={12} rowHeight={75} width={1800}>
            {gridStructure.map(key=><div
              onDrop={()=>{this.props.onDrop(idxLayout, key.i)}}
              onDragOver={(e)=>e.preventDefault()}
              className={CSS.Layout}
              key={key.i}>
                {key.comps.map(element=>{
                  return React.cloneElement(
                    element.comp, 
                    { id: element.id, onDelete:() =>this.props.onDelete(idxLayout, key.i, element.id) })
                })}
            </div>)}

            <Route path={`/`} component={App} />
        </GridLayout>
            <div className={CSS.Footer}>
              <Link className={CSS.Link} to={`/`}><FontAwesomeIcon icon="home" />HOME</Link>
            </div>
        </div>
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
      onDrop: (layoutId, positionKey) => dispatch({type:actionTypes.DROP_COMPONENT, layoutId: layoutId, positionKey:positionKey}),
      onDelete: (layoutId, positionKey, idOfElement) => dispatch({type:actionTypes.REMOVE, layoutId: layoutId, positionKey:positionKey, idOfElement:idOfElement}),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Layout);