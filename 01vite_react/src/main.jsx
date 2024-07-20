import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Anotherapp(){
  let username  = "Surya"
  return (
    <h1>Discode is the best pleace to discussion {username}</h1>
  )
}
//create element without jsx.
const Reactelement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click me to vist google",
  
)
// console.log(Reactelement);



ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    
    Reactelement

)
