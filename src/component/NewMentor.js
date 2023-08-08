import React, { useContext } from "react";
import DataContext from "../Context/DataContext";


//Creating New Mentor 
const NewMentor = () => {
  const { newMentor, setNewMentor, handleUpdateMentor, handleCancelMentor } =
    useContext(DataContext);
  return (
    <div >
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column mt-2 p-2">
          <label htmlFor="text">Mentor Name</label>
          <input
            type="text"
            id="text"
            placeholder="Enter the Mentor Name.."
            value={newMentor}
            required
            className="form-control p-2 mt-2"
            onChange={(e) => setNewMentor(e.target.value)}
          />
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button
            className="btn btn-warning mr-2 col-1 p-2 m-2"
            onClick={handleCancelMentor}
          >
            Cancel
          </button>
          <button
            className="btn btn-success col-1 p-2 m-2"
            onClick={handleUpdateMentor}
          >
            Save
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default NewMentor;