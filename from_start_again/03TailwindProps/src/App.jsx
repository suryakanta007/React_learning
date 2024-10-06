import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black'>Tailwind aur Props in React.</h1>
      <Card userName="Surya" />
      <Card/>
    </>
  )
}

export default App
