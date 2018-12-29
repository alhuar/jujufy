import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Playlist } from '../../constants/styled-components'

class PlaylistComponent extends Component {
  render () {
    return (
      <Playlist>
        <p>Here your Playlist result!</p>
      </Playlist>
    )
  }
}

PlaylistComponent.propTypes = {}

export default PlaylistComponent
