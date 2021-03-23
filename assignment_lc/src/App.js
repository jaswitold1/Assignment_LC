import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => resp.map((el) => Object.entries(el)))
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
        <article>
          <ul>
            {data ? (
              <div>
                {data.map((el, i) => {
                  return <li key={i}>{el[1][1]}</li>;
                })}
              </div>
            ) : (
              <span>loading</span>
            )}
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
