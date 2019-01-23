import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});
function onDragOver(ev){
  ev.preventDefault()
}
const DeafultButton = (props)=> {
  const { classes } = props;
  let { onDrag } = props;
  if (!onDrag){
    onDrag = (e)=>e.preventDefault()
  }
  return (
    <div id={props.id}
      draggable={true}
      onDragStart={(e)=>onDrag(e)}
      onDragOver={(ev)=>onDragOver(ev)}>
      <Button 
        onClick={()=>{return props.onDelete? props.onDelete():null}}        
        variant="contained" className={classes.button}>
        Default
      </Button>
    </div>
  );
}

DeafultButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrag: PropTypes.func,
  onDelete: PropTypes.func,
  id: PropTypes.string
};

export default withStyles(styles)(DeafultButton);