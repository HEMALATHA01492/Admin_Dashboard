import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../Context/DataContext";

const Dashboard = () => {
  const { data, students } = useContext(DataContext);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
      </div>
      <div className="row">
        {data.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
      <h2 className="h1 mb-0 text-center p-2 mb-2 text-black-800">Data List</h2>
      {students.length !== 0 ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr class="table-info">
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Batch</th>
                <th scope="col">Mentor</th>
              </tr>
            </thead>
            <tbody>
              {students.map((data, index) => (
                <tr key={index} class="table-warning">
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.course}</td>
                  <td>{data.mentor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-center h3 text-muted">No students available</p>
      )}
    </>
  );
};

export default Dashboard;