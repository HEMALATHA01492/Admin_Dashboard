import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";

const EditMentor = () => {
  let {
    editMentorName,
    setEditMentorName,
    handleEditMentor,
    handleCancelMentor,
    mentorLists,
  } = useContext(DataContext);
  let { id } = useParams();
  let mentor = mentorLists.find((e) => e.id.toString() === id);
  useEffect(() => {
                    if (mentor) 
                    { setEditMentorName(mentor.name); }
                  }, [mentor, setEditMentorName]);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column mt-2 p-2">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            placeholder="Name"
            value={editMentorName}
            required
            className="form-control p-2 mt-2"
            onChange={(e) => setEditMentorName(e.target.value)}
          />
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button
            className="btn btn-warning mr-2 col-1 p-2 m-2"
            onClick={handleCancelMentor}
          >
            Cancel
          </button>
          <button className="btn btn-success col-1 p-2 m-2"
                  onClick={() => handleEditMentor(mentor.id)}>
            Update
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default EditMentor;