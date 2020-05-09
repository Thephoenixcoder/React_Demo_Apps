import React, { Component } from "react";
import Notifications from "./Notification";
import Projectlist from "../projects/Projectlist";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dshboard container">
        <div className="row">
          {/* project list  */}
          <div className="col s12 m6">
            <Projectlist projects={projects} />
          </div>
          {/* project notifications */}
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.Projects,
    auth: state.firebase.auth,
    // ordered propert to get in order
    notifications: state.firestore.ordered.notifications
  };
};
// export default connect(mapStateToProps)(Dashboard);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Projects", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
