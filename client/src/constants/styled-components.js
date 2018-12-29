import styled from 'styled-components'

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  background-color: ${props => props.theme.background}
`
export const InputPanel = styled.div`
  justify-content: space-evenly;
  background-color: ${props => props.theme.background};
  display: flex;
  align-items: baseline;
  flex: 1;
`
export const FilteringPanel = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  flex: 4
`
export const OutputPanel = styled.div`
  background-color: ${props => props.theme.background};
  flex: 1
`
export const Input = styled.input`
  background-color: ${props => props.theme.inputBackground};
  height: 1.5em;
  margin: 1em 1em 1em 1em;
  &:focus { outline:0; }
`
export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  border-radius: 5em;
  height: 3em;
  margin: 1em 1em 1em 1em;
  padding: 0.5em 1em 0.5em 1em;
  &:hover {
    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;
  }
  &:active {
    -webkit-transition: background-color 0s ease-out;
    -moz-transition: background-color 0s ease-out;
    -o-transition: background-color 0s ease-out;
    transition: background-color 0s ease-out;
  }
    &:focus { outline:0; }
`
export const Filter = styled.div`
  margin: 1em 1em 1em 1em;
  padding: 0.5em 1em 0.5em 1em;
  background-color: ${props => props.theme.componentBackground};
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction:column;
  flex: 1;
  border-radius: 1em;
`

export const Playlist = styled.div`
  margin: 1em 1em 1em 1em;
  padding: 0.5em 1em 0.5em 1em;
  background-color: ${props => props.theme.componentBackground};
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction:column;
  flex: 1;
  border-radius: 1em;
`