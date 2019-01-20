import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CustomizedBadge= (props) =>{
  let {onDrag} = props;
  return (
    <IconButton
      aria-label="Cart"
      onDragStart={()=>onDrag()}
      onDragOver={(e)=>e.preventDefault()}
      draggable={true}
    >
    <ShoppingCartIcon/>
    </IconButton>
  );
}

export default CustomizedBadge;