import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import { Main } from './constants/styled-components'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <ThemeProvider theme={() => theme}>
          <Main className='container-fluid'>
            {this.props.children}
          </Main>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
