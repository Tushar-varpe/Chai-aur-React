
import Chai from "./Chai"
function App() {

  const username = " Chai aur code"


  return (                  //JSX expressions must have one parent element return.
     <>                       
      <Chai/>
      <h2>Chai aur React{username}</h2>
      <p>Hello world</p>
      </>
  )
}

export default App
