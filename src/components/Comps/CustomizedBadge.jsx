import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CustomizedBadge= (props) =>{
  let {onDrag} = props;
  if (!onDrag) {
    onDrag = (e)=>e.preventDefault()
  }
  return (
    <IconButton
      aria-label="Cart"
      onClick={()=> {return props.onDelete ? props.onDelete() : null}}        
      onDragStart={(e)=>onDrag(e)}
      onDragOver={(e)=>e.preventDefault()}
      draggable={true}
    >
    <ShoppingCartIcon/>
    </IconButton>
  );
}
CustomizedBadge.propTypes = {
  onDelete: PropTypes.func,
  onDrag: PropTypes.func,
};

export default CustomizedBadge;