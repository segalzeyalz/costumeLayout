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
  let {onDrag} = props;
  return (
    <div
      draggable={true}
      onDragStart={()=>onDrag()}
      onDragOver={(ev)=>onDragOver(ev)}>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    </div>
  );
}

DeafultButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeafultButton);