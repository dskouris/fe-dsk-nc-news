import React from 'react';
// import Menu from './Menu';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <>
      <header>
        <Link to='/'>
          <img
            src={require('../img/northcoderslogo.png')}
            alt='northcoderslogo'
          />
        </Link>
        <Link to='/'>
          <h1>[ News ] </h1>
        </Link>
        <p>Logged in as: jessjelly</p>
      </header>
      {/* <Menu /> */}
    </>
  );
};

export default Header;
