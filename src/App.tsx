import { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Canvas from './components/Canvas';
import { CanvasController } from './components/CanvasController';

function App() {
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
        <div className="flex-1">
          <Canvas />
        </div>
        <CanvasController />
      </div>
    </div>
  );
}

export default App;
