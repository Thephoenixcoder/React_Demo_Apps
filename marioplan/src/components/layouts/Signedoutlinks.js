import React from "react";
import { NavLink } from "react-router-dom";

const Signedoutlink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Create Account</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default Signedoutlink;
