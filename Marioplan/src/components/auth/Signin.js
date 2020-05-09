import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignIN</h5>
          <div className="input-field ">
            <input
              id="email"
              type="email"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field ">
            <input
              id="password"
              type="password"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button className=" btn pink z-depth-0 lighten-1">Login</button>
            <div className="red-text center">
              {/* if this auth have error show it in  <p>  else make it empty */}
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToprops = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToprops = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(
  mapStateToprops,
  mapDispatchToprops
)(Signin);
