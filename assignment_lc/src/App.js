import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((error) => console.log(error));
    return () => {
      setData([]);
    };
  }, []);
  return (
    <div className='App'>
      <header>
        <h1>Users list</h1>
      </header>
      <main>
        <form>
          <input
            name='search'
            placeholder='Search by user name...'
            type='text'
          />
        </form>
        <article></article>
      </main>
    </div>
  );
}

export default App;
