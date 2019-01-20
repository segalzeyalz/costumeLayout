import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CustomizedBadge= (props) =>{
  let {onDrag} = props;
  if(!onDrag){
    onDrag = (e)=>e.preventDefault()
  }
  return (
    <IconButton
      aria-label="Cart"
      onClick={()=>props.onDelete? props.onDelete():null}        
      onDragStart={(e)=>onDrag(e)}
      onDragOver={(e)=>e.preventDefault()}
      draggable={true}
    >
    <ShoppingCartIcon/>
    </IconButton>
  );
}

export default CustomizedBadge;