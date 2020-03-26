import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Widgets from './components/Widgets';
import Weather from './widgets/Weather';

const App = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Awesome-Widget</Navbar.Brand>
    </Navbar>
    <Widgets>
      <Weather />
    </Widgets>
  </>
);

export default App;
