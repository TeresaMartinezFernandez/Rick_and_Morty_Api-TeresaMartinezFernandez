import React, { useEffect, useState } from "react";
// // import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
// // import UserDetail from "./UserDetail";
import getDataFromApi from "../services/getDataFromApi";
import FilterByName from "./FilterByName";
import CharacterList from "./CharacterList";
import logo from "../images/logo.png";

// console.log(getDataFromApi());

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  // console.log(characters);

  //event handlers

  const handleFilter = (data, filterKey) => {
    // console.log("manejando los inputs", data, filterKey);
    setNameFilter(data.value);
  };
  // console.log(nameFilter);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });
  console.log(filteredCharacters);

  return (
    <>
      <header>
        <img
          className="card__img"
          src={logo}
          alt="logo Rick and Morty"
          title="Logo Rick and"
        ></img>
        <h1 className="title--big">Personajes Rick and Morty </h1>
      </header>
      <main>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
      </main>
      <footer>hasta luego mari Carmen</footer>
    </>
  );
};
export default App;
