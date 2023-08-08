import React from 'react'
import Sidebar from "./Sidebar";
import Content from "./Content";


function Wrapper() {
  return (
      <div id="wrapper">
        <Sidebar />
        <Content />
      </div>
  )
}

export default Wrapper