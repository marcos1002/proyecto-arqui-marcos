import React from 'react';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="navbar-brand">{props.name}</div>
  </nav>
);

export default Navbar;