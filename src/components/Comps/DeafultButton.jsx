import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
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
  console.log(props)
  const { classes } = props;
  let { onDrag } = props;
  let fromComps = false;
  if(!onDrag){
    onDrag = (e)=>e.preventDefault()
    fromComps = true;
  }
  return (
    <div id={props.id}
      draggable={true}
      onDragStart={(e)=>onDrag(e)}
      onDragOver={(ev)=>onDragOver(ev)}>
      <Button onClick={()=>props.onDelete()} variant="contained" className={classes.button}>
        Default
      </Button>
    </div>
  );
}

DeafultButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeafultButton);