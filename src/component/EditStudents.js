import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";

const EditStudents = () => {
  let {
    editStudentName,
    setEditStudentName,
    editcourse,
    setEditCourse,
    editMentor,
    setEditMentor,
    handleUpdate,
    handleCancel,
    students,
    mentorLists,
  } = useContext(DataContext);
  let { id } = useParams();
  let student = students.find((e) => e.id.toString() === id);
  //for loading required data
  useEffect(() => {
    if (student) {
      setEditStudentName(student.name);
      setEditCourse(student.course);
      setEditMentor(student.mentor);
    }
  }, [student, setEditStudentName, setEditCourse, setEditMentor]);
  return (
    <div class="container mt-4 ">
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text"><b>Name</b></label>
          <input
            type="text"
            id="text"
            placeholder="Enter Student Name"
            value={editStudentName}
            required
            className="form-control mt-2"
            onChange={(e) => setEditStudentName(e.target.value)}
          />
        </div>
        <div className="form-group d-flex mt-1 align-items-baseline flex-column">
          <label htmlFor="time"><b>Course</b></label>
          <select
            name="course"
            id="course"
            required
            value={editcourse}
            className="form-control mt-2"
            onChange={(e) => setEditCourse(e.target.value)}
          >
            <option value="">Course</option>
            <option value="MERN">MERN Stack</option>
            <option value="MEAN">MEAN Stack</option>
            <option value="MEVN">MEVN Stack</option>
            <option value="DevOps">DevOps</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="form-group d-flex mt-1 align-items-baseline flex-column">
          <label htmlFor="mentor"><b>Mentor</b></label>
          <select
            name="mentor"
            id="mentor"
            required
            value={editMentor}
            className="form-control mt-2"
            onChange={(e) => setEditMentor(e.target.value)}
          >
            <option value="">Mentor</option>
            {mentorLists.map((e, i) => (
              <option key={i} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2 m-2">
          <button className="btn btn-danger col-2 m-2" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-success col-2 m-2" onClick={() => handleUpdate(student.id)} >
            Update
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default EditStudents;