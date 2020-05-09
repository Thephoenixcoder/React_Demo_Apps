import React, { Component } from "react";
import { connect } from "react-redux";
import { createproject } from "../../store/actions/projectaction";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createproject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">CreateProject</h5>
          <div className="input-field ">
            <input
              id="title"
              type="text"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field ">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>

          <div className="input-field">
            <button className=" btn pink z-depth-0 lighten-1">
              CreateProject
            </button>
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
const mapDispatchToprops = dispatch => {
  return {
    createproject: project => dispatch(createproject(project))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(CreateProject);
