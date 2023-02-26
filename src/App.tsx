import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Canvas from './Canvas';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #c0eb9d;
  width: 100vh;
  height: 50vh;
  user-select: none;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Background className="App">
      <span
        style={{
          fontWeight: 'bold',
        }}
      >
        three.js react app playground
      </span>
      <Canvas />
    </Background>
  );
}

export default App;
