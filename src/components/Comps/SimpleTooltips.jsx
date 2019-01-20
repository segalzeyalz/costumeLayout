import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

function SimpleTooltips(props) {
  const { classes } = props;
  let { onDrag } = props;
  let fromComps = false;
  console.log(props.id)

  if(!onDrag){
    onDrag = (e)=>e.preventDefault()
    fromComps = true;
  }
  return (
      <Tooltip
        onClick={(e)=>console.log(e)}
        onDragStart={(e)=>onDrag(e)}             
        onDragOver={(e)=>e.preventDefault()}
        draggable={true}
        title="Delete">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>

      </Tooltip>
  );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);