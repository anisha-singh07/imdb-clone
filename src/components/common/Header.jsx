import { useState } from 'react';

import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
  Fade,
  Button
} from '@mui/material';
import { logoURL } from '../../constants/constant';

import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';

//header menu
import HeaderMenu from './HeaderMenu';

//styled, Toolbar: materialUI
const StyledToolBar = styled(Toolbar)`
  background-color: black;
  min-height: 5vw !important;
  padding: 0 3.5vw !important;
  justify-content: space-between;
  & > * {
    padding: 1vw;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 1vw;
      font-weight: 600;
      color: white;
    }
  }
  & > p {
    font-size: 1vw;
    font-weight: 600;
    color: white;
  }
  & > p > span {
    color: aqua;
  }
  & > div > button {
    color: white;
    text-transform: none;
  }
`;

const InputSearchField = styled(InputBase)`
  background-color: white;
  height: 2vw;
  width: 55%;
  border-radius: 5px;
`;
//styled: materialUI, img- html tag
const Logo = styled("img") ({
  width: 64,
});



const Header = () => {
  
  const [open, setOpen] = useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="IMDBlogo" />
        <Box onClick={handleClick}>
        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Menu />
          <Typography> Menu </Typography>
      </Button>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
