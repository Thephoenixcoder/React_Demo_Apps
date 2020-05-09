import React from "react";
import Projectssummary from "./Projectsummary";
import { Link } from "react-router-dom";

const Projectlist = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* if we have project then pass it to map  and if we donot  have project donot pass any thing  */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/projects/" + project.id} key={project.id}>
              <Projectssummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};
export default Projectlist;
