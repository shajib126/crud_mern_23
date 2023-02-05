import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.JPG'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack
      m={'auto'}
      w={'80%'}
      justifyContent={'space-between'}
      direction={['column', 'row']}
      background={'orange'}
      paddingRight="1rem"
    >
      <img width={'120px'} src={Logo} alt="" />
      <Link to="/">
        <span class="material-symbols-outlined">home</span>Home
      </Link>
      <Link to="/create">
        <span class="material-symbols-outlined">add</span>Create Product
      </Link>
      <Link to="/products">
        <span class="material-symbols-outlined">density_small</span>Product List
      </Link>
    </Stack>
  );
};

export default Navbar;
