import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";

const Sidebar = () => {
  const { setToggle, toggle, handleToggle, width } = useContext(DataContext);
  return (
    <>
      <ul
        className={
          toggle
            ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "
            : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        }
        id="accordionSidebar"
      >
        <li className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-text mt-2 p-1">Admin Dashboard</div>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link
            className="nav-link collapsed  d-flex align-items-center justify-content-center flex-column"
            to="/"
            onClick={() => (width < 600 ? setToggle(false) : "")}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>{" "}
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            to="/student"
            className="nav-link collapsed  d-flex align-items-center justify-content-center  flex-column"
            onClick={() => (width < 600 ? setToggle(false) : "")}
          >
            <i className="fas fa-fw fa-users"></i> <span>Students</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            to="/mentor"
            className="nav-link collapsed  d-flex align-items-center justify-content-center flex-column"
            onClick={() => (width < 600 ? setToggle(false) : "")}
          >
            <i className="fas fa-sold fa-chalkboard-user"></i>{" "}
            <span>Mentors</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        {/* manual side bar toggle */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={handleToggle}
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;