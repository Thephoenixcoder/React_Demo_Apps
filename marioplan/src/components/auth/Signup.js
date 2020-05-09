import React, { Component } from "react";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";
class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create account </h5>
          <div className="input-field ">
            <input
              id="Fname"
              type="text"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="Fname">FirstName</label>
          </div>

          <div className="input-field ">
            <input
              id="Lname"
              type="text"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="Lname">LastName</label>
          </div>
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
            <button className=" btn pink z-depth-0 lighten-1">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
