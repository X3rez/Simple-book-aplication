import React from 'react'
import Nav from './components/header/nav'
import Container from './components/container'
import Searcher from './components/search'
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    background:#e3f2fd;
    font-family: 'Karla', sans-serif;
    }
  `

function App() {

  return (
    <>
        <GlobalStyle />
        <Nav />
        <Searcher/>
        <Container> 
        </Container>
    </>
  );
}

export default App;
