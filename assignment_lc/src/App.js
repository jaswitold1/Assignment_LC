import { useState, useEffect } from "react";
import "./App.css";

function App() {
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
