import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography, styled } from "@mui/material";

import { Link } from "react-router-dom";

import { Star } from "@mui/icons-material";

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

const StyledBanner = styled("img")({
  width: "100%",
});

const BannerMain = styled(Link)`
  display: grid;
  grid-template-rows: 1fr 0.25fr;
  grid-template-columns: 1fr;
  gap: 0;
`;

const BannerMain1 = styled(Box)`
  grid-area: 1 / 1 / 3 / -1;
  align-items: center;
`;
const BannerMain2 = styled(Box)`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  grid-area: 2 / 1 / 3 /-1;
`;

const MovieRuntime = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: left;
`;
const Title = styled(Typography)`
  color: white;
  font-size: 3vw;
  font-weight: 600;
  padding: 0 2vw;
`;
const MovieDescription = styled(Typography)`
  color: white;
  padding: 1vw 2vw;
`;

const Banner = ({ movies }) => {
  return (
    <Box style={{ width: "70%" }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        slidesTOSlide={1}
      >
        {movies.map((movie) => (
          <BannerMain
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <BannerMain1>
              <StyledBanner
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="banner"
              />
            </BannerMain1>

            <BannerMain2>
              <Title>{movie ? movie.original_title : ""}</Title>

              <MovieRuntime>
                <Box style={{ padding: "0 2vw" }}>
                  {movie ? movie.release_date : ""}
                </Box>
                <Box>{movie ? movie.vote_average : ""}</Box>
                <Star style={{ paddingLeft: "0", height: "1.5vw" }} />
              </MovieRuntime>

              <MovieDescription>
                {movie ? movie.overview.slice(0, 200) + ".." : ""}
              </MovieDescription>
            </BannerMain2>
          </BannerMain>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
