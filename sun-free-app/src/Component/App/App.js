//import logo from './logo.svg';
import React, {useState} from "react"
import Cocktails from '../Cocktails/Cocktails';
import './App.css';

function App() {
const [id, setId] = useState();

function handleClick() {

  const randomId = Math.floor(Math.random() * 1000) + 1;
  setId(randomId);
}

  return (
    <div className="App">
      <h1 style = {{color: "white"}}>Cocktails recipies</h1>
      <h5 style = {{color: "white"}}>All you need to make the perfect cocktail at home!</h5>
      <button
        style={{ padding: "10px", backgroundColor: "orangeRed", color: "white" }}
        className="button"
        onClick={handleClick}
      >
        <strong>Get random Cocktails</strong>
      </button>
      <Cocktails id={id} />
    </div>
  );
}

export default App;
