import React, { useContext } from "react";
import { profile } from "../assets/index";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";


// creating Students list

const Feed = () => {
  const { students, handleDelete } = useContext(DataContext);
  return (
    <>
      {students.map((e, i) => (
        <div key={i}>
          <div key={i} className="row">
            <div className="d-flex align-items-center flex-wrap justify-content-between row p-2 col-12">
              <div className="img col-3">
                <img
                  src={profile}
                  className="rounded-circle float-right"
                  style={{ width: "40px" }}
                  alt="..."
                />
                <div className="px-2 col-3">{e.name}</div>
              </div>
              
              <div className="taskTime px-md-1 col-1">{e.course}</div>
              <div className="taskTime px-md-1 col-2">{e.mentor}</div>
              <div>
              <Link className="taskTime " data-set={e.id} to={`${e.id}`}>
                <button className="btn btn-primary col-1 m-2">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(e.id)}>
                Delete
              </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Feed;