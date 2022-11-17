import React, {useState} from "react";
import Child from "./Child";

function App() {
  const [input, setInput] = useState("")

  return (
    <div className="App">
     <h1>App Component</h1>
     <h3>User input: {input}</h3>
     <input 
     type="text" 
     placeholder="Type something cool"
     onChange={(e) => setInput(e.target.value)}/>
     <Child userInput={input}/>
    </div>
  );
}

export default App;
