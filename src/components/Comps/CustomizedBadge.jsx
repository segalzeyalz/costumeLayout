import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CustomizedBadge= () =>{
  return (
    <IconButton
      aria-label="Cart"
      onDragStart={(e)=>console.log(e.target)}
      onDragOver={(e)=>e.preventDefault()}
      draggable={true}
    >
    <ShoppingCartIcon/>
    </IconButton>
  );
}

export default CustomizedBadge;