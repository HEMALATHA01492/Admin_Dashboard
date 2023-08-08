import React from "react";
import { Link } from "react-router-dom";

// Creating dasboard cards

const Card = ({ data }) => {
  return (
    <Link
      to={data.title === "No. of Students" ? "/student" : "/mentor"}
      className="col-xl-6 col-md-6 mb-4 text-decoration-none"
    >
      <div className={`card border-left-${data.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-md font-weight-bold text-black text-capitalize p-2 mb-1`}>
                <h4>{data.title}</h4>
              </div>
              <div className="p-2 font-weight-bold color-blue">
                <h3>{data.value}</h3>
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${data.icon} fa-2x text-${data.color}`}></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;