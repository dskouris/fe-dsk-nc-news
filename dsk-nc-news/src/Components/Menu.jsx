import React from 'react';
import { Link } from '@reach/router';

const Menu = () => {
  return (
    <nav>
      <Link to='/'>Articles</Link>
      <Link to='/users'>Users</Link>
    </nav>
  );
};

export default Menu;
