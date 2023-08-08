import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

//Creating New Student


const NewStudent = () => {
  const {
    newStudentName,
    setNewStudentName,
    course,
    setCourse,
    mentor,
    setMentor,
    handleSubmit,
    handleCancel,
    mentorLists,
  } = useContext(DataContext);
  return (
    <div class="container p-2 m-2">
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column mt-2">
          <label htmlFor="text"><b>Name</b></label>
          <input
            type="text"
            id="text"
            placeholder="Enter the Student Name"
            value={newStudentName}
            required
            className="form-control mt-2"
            onChange={(e) => setNewStudentName(e.target.value)}
          />
        </div>
        <div className="form-group d-flex align-items-baseline flex-column mt-2">
          <label htmlFor="time"><b>Course</b></label>
          <select
            name="course"
            id="course"
            required
            value={course}
            className="form-control mt-2"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">----Select the Course----</option>
            <option value="MERN">MERN Stack</option>
            <option value="MEAN">MEAN Stack</option>
            <option value="MEVN">MEVN Stack</option>
            <option value="DevOps">DevOps</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="form-group d-flex align-items-baseline flex-column mt-2">
          <label htmlFor="mentor"><b>Mentor</b></label>
          <select
            name="mentor"
            id="mentor"
            required
            mentor={mentor}
            className="form-control mt-2"
            onChange={(e) => setMentor(e.target.value)}
          >
            <option value="">----select the Mentor----</option>
            {mentorLists.map((e, i) => (
              <option key={i} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center m-2 g-2">
          <button className="btn btn-danger m-2 col-2" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-success col-2 m-2" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default NewStudent;