import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-warning">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
          <span class="material-icons mr-2">add</span> New Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
