import App from './App'
import React from 'react'
import { createRoot } from 'react-dom/client'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// <a>, <span> → Inline elements 
//<div>, <p>, <h1> → Block elements




// const ReactElement = {
//     type:'a',                          
//     props:{
//         href:'htpps://Google.com',
//         target:'_blank'
//     },
//     Children:"click me to visit google"
// }

// हा object React Element नाही.

// React ला असा plain JavaScript object render करता येत नाही.

// React ला अशी structure हवी असते.

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

// जेव्हा तुम्ही JSX लिहिता:

// Babel त्याचे रूपांतर असे करते:
// React.anotherElement(
//   "a",
//   {
//     href: "https://google.com"
//   },
//   "Visit Google"
// )

const anotherUser = "Chai aur React"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me Visit To Google',
  anotherUser
)

 //  render => Render म्हणजे React ने Component किंवा Element तयार करून Browser मध्ये स्क्रीनवर दाखवणे.
//render() फक्त एकच React element स्वीकारतो.

createRoot(document.getElementById('root')).render(
  <>
     <App/>
     <br/>
    <MyApp />
    <br/>
    {anotherElement}
    <br/>
    {ReactElement}
  </>
)
