import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Home = ({setSearchValue}) => {

  return (
    <div className="home">
      <h2>Avengers Series</h2>
      <div className="scroll-x">
        <MovieList searchValue="avengers" setSearchValue={setSearchValue} />
      </div>

      <h2>Harry Potter Series</h2>
      <div className="scroll-x">
        <MovieList searchValue="harry+potter" setSearchValue={setSearchValue} />
      </div>

      <h2>Toy Story Series</h2>
      <div className="scroll-x">
        <MovieList searchValue="toy+story" setSearchValue={setSearchValue} />
      </div>
    </div>
  );
};
export default Home;