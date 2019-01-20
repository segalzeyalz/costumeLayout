import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';
import CSS from './ComponentsCont.css';
import {
        DeafultButton,
        CustomizedBadge,
        CircularDeterminate,
        ControlledOpenSelect,
        SimpleTooltips} from './../../components/Comps/';

class ComponentsCont extends Component {
    render(){
        let {onDrag} = this.props;
        return (<div className={CSS.ComponentsCont}>
                   <DeafultButton compName={DeafultButton} onDrag={()=>onDrag(<DeafultButton/>)}/>
                   <CustomizedBadge compName={CustomizedBadge} onDrag={()=>onDrag(<CustomizedBadge/>)}/>
                   <CircularDeterminate compName={CircularDeterminate} onDrag={()=>onDrag(<CircularDeterminate/>)}/>
                   <ControlledOpenSelect compName={ControlledOpenSelect} onDrag={()=>onDrag(<ControlledOpenSelect/>)}/>
                   <SimpleTooltips compName={SimpleTooltips} onDrag={()=>onDrag(<SimpleTooltips/>)}/>
                </div>)
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
      onDrag: (comp) => dispatch({type:actionTypes.DRAG_COMPONENT, comp:comp}),
    }
}
export default connect(null, mapDispatchToProps)(ComponentsCont);