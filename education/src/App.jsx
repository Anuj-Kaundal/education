import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './componenet/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
