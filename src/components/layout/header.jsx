import React from "react";
import { NavLink } from "react-router-dom";
import Loading from "../share/Loading";

const Header = ({ category, loading }) => {
  return (
    <header className="bg-primary">
      <nav className="container">
        <ul className="nav d-flex justify-content-between">
          {loading ? (
            <Loading />
          ) : (
            category.map((category, i) => (
              <li key={i} className="nav-item text-white">
                <NavLink className="nav-link" to="/">
                  {category}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
