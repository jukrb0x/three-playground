import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Canvas from './Canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      three
      <Canvas />
    </div>
  )
}

export default App
