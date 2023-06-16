import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography, styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled('img')`
margin-top: 2vw;
width: 100%;
`

const Title = styled(Typography)`
color: white;
`

const Slide = ({ movies }) => {
  return (
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
        <Title>{movie.original_title}</Title>
        </>
      ))}
    </Carousel>
  );
};

export default Slide;
