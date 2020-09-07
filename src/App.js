import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/App.css';
import './components/NavMenu';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavMenu/>
      </div>
      <div className="Content">

      </div>
    </div>
  );
}

export default App;
