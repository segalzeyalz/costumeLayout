import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

class CircularDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed + 1
    });
  };

  render() {
    let {  onDrag } = this.props;
    if (!onDrag) {
      onDrag = (e) => e.preventDefault()
    }
    return ( <div onClick = {() => this.props.onDelete ? this.props.onDelete() : null}
              onDragStart = {(e) => onDrag(e)}
              onDragOver = {(e) => e.preventDefault()} draggable = {true} >
              <CircularProgress
                onClick = {() => this.props.onDelete ? this.props.onDelete() : null}
                variant = "determinate"
                value = {this.state.completed}
                color = "secondary" />
            </div>
    );
  }
}

CircularDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CircularDeterminate;