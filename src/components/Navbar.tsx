import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/members">Members</Link>
    </nav>
  );
};

export default Navbar;

//Links para diferentes paginas