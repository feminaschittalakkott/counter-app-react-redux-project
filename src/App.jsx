import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-light p-3 text-center'>Counter App</h1>
      <Counter />
    </>
  )
}

export default App
