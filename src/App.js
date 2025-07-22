import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Header />
        <Box mt={4}>
          <About />
          <Skills />
          <Highlights />
          <Projects />
          <Contact />
        </Box>
    </Container>
  );
}

export default App;
