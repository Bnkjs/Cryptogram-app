import React from "react";
import {  BrowserRouter as Router, Link } from "react-router-dom";

const Container = () => {
  return(
    <>
     <div className="container">
        <h2>
          <Link to="/signup">
            Signup
          </Link>
        </h2>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/dashboard">Dashboard</Link>
        </h2>
      </div>
    
    </>
  )
}

export default Container;