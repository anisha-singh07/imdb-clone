import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useLocation } from "react-router-dom";
import Cards from "../cards/card";
import Header from "../common/Header";
import { getCategoryMovies } from "../../services/api";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  moviesType,
} from "../../constants/constant";

const MovieList = () => {

  const [movieList, setMovieList] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await getCategoryMovies(API_URL);
      setMovieList(response.results);
    };

    let API_URL = "";

    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    }
    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <div className="movie__list">
        <h2 className="list__title">
          {moviesType[search.split("=")[1]].toUpperCase()} MOVIES
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Cards movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
