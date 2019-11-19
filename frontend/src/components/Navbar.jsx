import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Navbar = props => {
  const { title } = props;

  return (
    <nav className="navbar bg-dark">
      <Link to="/">{title}</Link>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
