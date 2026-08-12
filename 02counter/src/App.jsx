import { useState } from 'react'

import './App.css'

function App() {

  let [Counter,setCounter] = useState(15)

  //let Counter=15
  
  const addvalue= () => {
    if(Counter<20){
      //console.log("value added", Counter);
      // setCounter(Counter + 1)
      // setCounter(Counter + 1)
      // setCounter(Counter + 1)
      // setCounter(Counter + 1)

      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

    }
  }

  const removeValue = () => {
    if(Counter>0){
    setCounter(Counter-1)
  }
}
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value:{Counter}</h2>

    <button
    onClick={addvalue}
    >Add value:{Counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value:{Counter}</button>
    <p>footer:{Counter}</p>
    </>
  )
}

export default App
