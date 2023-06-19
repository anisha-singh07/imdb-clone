/*component types- class based component & function based component
    function based component, 2 ways: 
    1.function Home()
        {
            return ();
        }
    2.const Home = (props) => {
            return ();
        }

    export default Home;
*/

import { useEffect, useState } from "react";

//components
import Header from "../components/common/Header";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Slide from "../components/Slides";

import { getCategoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";

import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  padding: 2vw 0;
`;

const Component = styled(Box)`
  padding: 0 7vw;
`;
const Title = styled(Typography)`
  color: white;
  font-weight: 600;
  font-size: 1.5vw;

  & > span {
    color: #ffd601;
    font-size: 2vw;
  }
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await getCategoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    //<React.Fragment> or <> : no extra dom node, faster, less memory
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Title>
          <Box component="span">|</Box> Explore Movies
        </Title>
        <Slide movies={movies} />
      </Component>
    </>
  );
};
export default Home;
//default export
