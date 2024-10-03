import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
function Myapp(){
      return (
            <div>
                  <h1>This is NEW components</h1>
            </div>
      )
}
// const ReactElemet = {
//       type: "h1",
//       props: {
//           class: "div1",
//           id: "d1"
//       },
//       children: "This is our own React . All set."
//   }
const NewElement = (<a href='https://www.google.com' target='_blank'>Go to google</a>)
const ReactElemet = React.createElement(
      "a",
      {
            href:"https://www.google.com",
            target:"_blank"
      },
      "click here vist to google"
)
createRoot(document.getElementById('root')).render(
      <App/>
  
)
