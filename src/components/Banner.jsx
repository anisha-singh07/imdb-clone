import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography, styled } from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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

const MovieName = styled(Typography)`
  color: white;
  font-size: 3vw;
  font-weight: 400;
  padding-left: 1vw;
`;

const Wrapper = styled(Box)`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  display: inline-flex;
  width: 100%;
  height: 100%;
  align-items: center;

  & > svg {
    color: white;
    font-size: 7vw;
    padding-left: 1vw;
  }
`;

const BannerMain = styled(Box)`
  display: grid;
  grid-template-rows: 1fr 0.25fr;
  grid-template-columns: 1fr;
  gap: 0;
`;

const BannerMain1 = styled(Box)`
  grid-area: 1 / 1 / 3 / -1;
`;
const BannerMain2 = styled(Box)`
  grid-area: 2 / 1 / 3 /-1;
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
          <>
            <BannerMain>
              <BannerMain1>
                <StyledBanner
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="banner"
                />
              </BannerMain1>
              <BannerMain2>
                <Wrapper>
                  <PlayCircleOutlineIcon />
                  <MovieName>{movie.original_title}</MovieName>
                </Wrapper>
              </BannerMain2>
            </BannerMain>
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
