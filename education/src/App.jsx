import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './componenet/Header'
import Home from './componenet/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
