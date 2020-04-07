import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Widgets from './components/Widgets';
import Weather from './widgets/Weather';
import Currency from './widgets/Currency';
import Bus from './widgets/Bus';

const App = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Awesome-Widget</Navbar.Brand>
    </Navbar>
    <Widgets>
      <Weather />
      <Currency />
      <Bus />
    </Widgets>
  </>
);

export default App;
