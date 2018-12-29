import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputPlaylist from './InputPlaylist'
import { InputPanel } from '../../constants/styled-components'

class InputComponent extends Component {
  render () {
    return (
      <InputPanel>
        <InputPlaylist/>
      </InputPanel>
    )
  }
}

InputComponent.propTypes = {}

export default InputComponent
