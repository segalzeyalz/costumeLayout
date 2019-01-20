import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CustomizedBadge= (props) =>{
  console.log(props.id)

  let {onDrag} = props;
  if(!onDrag){
    onDrag = (e)=>e.preventDefault()
  }
  return (
    <IconButton
      aria-label="Cart"
      onClick={(e)=>console.log(e.target)}
      onDragStart={(e)=>onDrag(e)}
      onDragOver={(e)=>e.preventDefault()}
      draggable={true}
    >
    <ShoppingCartIcon/>
    </IconButton>
  );
}

export default CustomizedBadge;