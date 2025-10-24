import { useState } from 'react'
import Home from './pages/Home'
import Article from './pages/Article'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TESTOVACÍ PROJEKT PRO DANÍKA TOMÁŠKA A FÍLU</h1>
          <Home/>
    <Article/>
    </>
  )
}

export default App
