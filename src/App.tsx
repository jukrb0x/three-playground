import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import styled from 'styled-components';
import { CanvasController } from './components/CanvasController';

const Background = styled.div`
  background-color: #c0eb9d;
  width: 100vh;
  height: 50vh;
  user-select: none;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-lime-2 select-none w-6xl">
      <span
        style={{
          fontWeight: 'bold',
        }}
      >
        three.js react app playground
      </span>
      <div className="flex h-3xl">
        <div className='flex-1'>
          <Canvas />
          </div>
        <CanvasController />
      </div>
    </div>
  );
}

export default App;
