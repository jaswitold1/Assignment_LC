import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  let searchData = data.filter((el) => {
    return el[1][1].toLowerCase().includes(search);
  });

  return (
    <div className='App'>
      <header>
        <h1>Users list</h1>
      </header>
      <main>
        <form>
          <input
            onChange={handleInput}
            name='search'
            placeholder='Search by user name...'
            type='text'
          />
        </form>
        <article>
          <ul>
            {data ? (
              <div>
                {searchData.map((el, i) => {
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
