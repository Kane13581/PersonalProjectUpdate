import React from "react";
import { useParams } from "react-router-dom";


function Project() {
  // The <Route> that rendered this component has a path of `/projects/:projectId`.
  // The `:projectId` portion of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { projectId } = useParams();

  return (
    <div className="ProjectPageStyle">
      <h3>{projectId}</h3>
      <div className="HobbiePageSelector">

      </div>

    </div>


  );
}

export default Project;