import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSearchList from "../components/MovieSearchList";

const SearchResultPage = () => {
  const [movies, setMovies] = useState([]);
  const {searchQuery} = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`;

  const fetchSearchResult = () => {
    console.log(searchQuery)
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  return (
    <div>
      <MovieSearchList movies={movies} />
    </div>
  );
};

export default SearchResultPage;
