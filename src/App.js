import './App.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Home from '../src/pages/home'
import ComoFunciona from '../src/pages/comoFunciona';
import Preco from '../src/pages/precos';
import Sobre from '../src/pages/sobre';
import Contato from '../src/pages/contato'
function App() {
  return (
      <div>
        <Home />
        <ComoFunciona />
        <Preco />
        <Sobre />
        <Contato />
      </div>
  );
}

export default App;
