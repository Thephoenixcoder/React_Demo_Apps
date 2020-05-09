import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const Signedinlink = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        {/* // eslint-disable-next-line */}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToprops = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToprops
)(Signedinlink);
