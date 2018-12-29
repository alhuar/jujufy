import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OutputPanel } from '../../constants/styled-components'

class OutputComponent extends Component {
  render () {
    return (
      <OutputPanel>
        <p>I'm an output panel!</p>
      </OutputPanel>
    )
  }
}

OutputComponent.propTypes = {}

export default OutputComponent
