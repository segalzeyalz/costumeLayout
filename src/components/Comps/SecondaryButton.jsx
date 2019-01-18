import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const SecondaryButton= (props)=> {
  const { classes } = props;
  return (
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
  );
}
SecondaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondaryButton);