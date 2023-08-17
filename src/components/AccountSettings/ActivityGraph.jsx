import React from "react";
import graph from "../../assets/images/graph.png";

const ActivityGraph = () => {
  return (
    <div className="mb_100">
      <div className="activity">
        <h3>Your Activity</h3>
        <img className="img-fluid" src={graph} alt="" />
      </div>
    </div>
  );
};

export default ActivityGraph;
