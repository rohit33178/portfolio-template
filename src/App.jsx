import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Header />
      <Outlet />
    </>
  )
}

export default App
