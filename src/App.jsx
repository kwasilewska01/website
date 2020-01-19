import React from 'react';
import './App.scss';
import StepsContainer from './components/stepsContainer'
import AboutUsContainer from './components/AboutUsContainer'
import Contact from './components/Contact'
import NavBar from './container/NavBar'
import { Container  } from 'react-bootstrap'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <AboutUsContainer/>
        <StepsContainer />
        <Contact />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;