import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username:"Surya",
    age : 19
  }
  let arr = [4,5,6,8];
  return (
    <>
      <h1 className='bg-gray-800 text-black rounded-xl mb-3'>Tailwind CSS</h1>
      <Card userName="Sabita"btnText="see more"/>
      <Card btnText="about me"/>

    </>
  )
}

export default App
