import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Filter } from '../../constants/styled-components'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

class FilterComponent extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { value: 50 }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Filter>
        <p>Danceability!</p>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </Filter>
    )
  }
}

FilterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterComponent);
