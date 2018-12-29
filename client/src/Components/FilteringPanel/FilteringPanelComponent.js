import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterComponent from './FilterComponent'
import PlaylistComponent from './PlaylistComponent'
import { FilteringPanel } from '../../constants/styled-components'

class FilteringPanelComponent extends Component {
  render () {
    return (
      <FilteringPanel>
        <FilterComponent/>
        <PlaylistComponent/>
      </FilteringPanel>
    )
  }
}

FilteringPanelComponent.propTypes = {}

export default FilteringPanelComponent
