import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Anotherapp(){
  let username  = "Surya"
  return (
    <h1>Discode is the best pleace to discussion {username}</h1>
  )
}


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>  
    <Anotherapp/>
  </React.StrictMode>,
)
