import React, { useEffect, useState } from "react";
//import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  //skeletal loading effect try later

  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="cards">
        <img
          className="CardImage"
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
        />
        <div className="CardOverlay">
          <div className="CardTitle">{movie ? movie.original_title : ""}</div>
          <div className="CardRuntime">
            {movie ? movie.release_date : ""}
            {/* <span className="CardRating">
              {movie ? movie.vote_average : ""}
              <Star style={{ height: "1.5vw" }} />
            </span> */}
          </div>
          <div className="CardDescription">
            {movie ? movie.overview.slice(0, 120) + "..." : ""}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
