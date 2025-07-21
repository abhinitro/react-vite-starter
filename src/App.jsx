import React, { useState, useEffect, use } from "react";
import Child from "./Child";


function App(props) {
  const [name, setName] = useState('default Value');
  const [list, setList] = useState([]);
  const [age, setAge] = useState('26');
  const changeName = (newName) => {
    console.log(`Changing app name to: ${newName}`);
    setName(newName);
  };

  const fn = async () => {
    
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    console.log(json);
    setList(json);
    console.log("List updated with fetched data");

  }

  useEffect(() => {
    fn()
  }, []);

  useEffect(() => {

    console.log("App component did update");

  }, [name, age]);




  return (
    <div>

      {list.length === 0 ? <div>Loaderr...</div> : <Child></Child>}
    </div>
  );
}

export default App;
