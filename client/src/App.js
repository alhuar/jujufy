import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import { Main } from './constants/styled-components'
import InputComponent from './Components/InputPanel/InputComponent'
import FilteringPanelComponent from './Components/FilteringPanel/FilteringPanelComponent'
import OutputComponent from './Components/OutputPanel/OutputComponent'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <ThemeProvider theme={() => theme}>
          <Main className='container-fluid'>
            <InputComponent/>
            <FilteringPanelComponent/>
            <OutputComponent/>
          </Main>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
