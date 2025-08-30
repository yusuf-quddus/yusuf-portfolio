import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Header />
        <Box mt={4}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Highlights />
          <Contact />
        </Box>
    </Container>
  );
}

export default App;
