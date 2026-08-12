import './App.css'
import Card from './components/Card';
function App() {

  let myObj = {
    username:"Tushar",
    age:20
  }

  let newArr = [31,13,18]
  return (
    <>
      <h1 className="bg-gray-400 text-black p-4 rounded-xl text-center mb-6">
        Hello Tailwind CSS
      </h1>
      <Card   username = "Chai aur code"  button="learn about more"  myArr={newArr} />
      <Card  username="Chai aur React"/>
      

      
    </>
  );
}

export default App;


