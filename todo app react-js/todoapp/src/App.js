import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    list.push(text);
    setList([...list]);
  };
  const deleteRow = (i) => {
    list.splice(i,1);
    setList([...list]);
  };

  const editRow = (i) => {
 
    list.splice(i,1," ");
    setList([...list]);
  };
  return (
    <div>
      <input
        onChange={
          (event) => {
          setText(event.target.value);
        }
      }
      />
      <button onClick={add}>Add</button>

      {list.map((x, i) => (
        <h1 style={{
          backgroundColor: i%2 === 0 ? "green" : "red"
        }} key={i}> {x} <button onClick={() => editRow(i)}>Edit</button> <button onClick={() => deleteRow(i)}>Delete</button> </h1>
      ))}
    </div>
  );  
}

export default App;