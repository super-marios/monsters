import React, { useState, useEffect } from "react";
import "./App.css";

import CarList from "./components/Cardlist";
import Search from "./components/Search";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Monsters</h1>
      <Search search={setSearch} />
      <CarList monsters={filteredMonsters}></CarList>
    </div>
  );
}

export default App;
