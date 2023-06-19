import { Typography, Box, styled } from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 1vw;

  background-image: linear-gradient(to top, black, #181818);

  & > p {
    color: #ffd601;
    font-weight: 600;
    font-size: 1.5vw;
    display: block;
    background-color: black;
    width: 100%;
    margin-left: 0vw;
    margin-bottom: 1vw;
    padding-left: 1vw;
    padding-bottom: 1vw;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  color: white;
  padding-left: 1vw;
  padding-bottom: 1vw;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div > p {
    margin-left: 1.5vw;
    justify-content: center;
  }

  & > div > svg {
    font-size: 3vw;
    margin-left: 1.5vw;
    margin-bottom: 1vw;
  }
`;

const Trailer = styled('Typography')
`
  color: white;
  font-size: 1.5vw;
  padding-left: 1vw;
  font-weight: 600;
  padding-top: 0.5vw;
  display: inline-flex;
  
  & > svg {
    padding-left: 1vw;
    padding-top: 0.6vw;
    font-size: 1vw;
  }

`

const Poster = styled("img")({
  width: 88,
});

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up next</Typography>
      {movies.splice(3, 3).map((movie) => (
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
          <Box>
            <PlayCircleOutlineIcon />
            <Typography>{movie.original_title}</Typography>
          </Box>
        </Wrapper>
      ))}
      <Trailer>Browse trailers  <ArrowForwardIosIcon/></Trailer>
    </Component>
  );
};

export default UpNext;
