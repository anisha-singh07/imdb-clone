import { useState, useEffect } from "react";

import Header from "../components/common/Header";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  moviesType 
} from "../constants/constant";
import MoviesList from "../components/MoviesList";
import { getCategoryMovies } from "../services/api";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography, styled, Divider } from "@mui/material";

import { useLocation } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")`
  height: 60vh;
  width: 100%;
`;

const Component = styled(Box)`
  width: 80%;
  margin: auto;
`;

const Container = styled(Box)
`   
    background-color: #F5F5F5;
    padding: 1.5vw;
`

const CategoryMovies = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await getCategoryMovies(API_URL);
      setMovies(response.results);
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
      <Component>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          slidesTOSlide={1}
        >
          {movies.map((movie) => (
            <>
              <StyledBanner
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="banner"
              />
            </>
          ))}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDb Charts</Typography>
          <Typography variant="h4"> {moviesType[search.split('=')[1]]} Movies</Typography>
          <Divider/>
          <MoviesList movies={movies} />
        </Container>
      </Component>
    </>
  );
};

export default CategoryMovies;
