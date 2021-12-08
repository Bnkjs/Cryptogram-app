import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Form from "./components/Form";
import Dashboard from "./Pages/dashboard";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  }
  console.log(isAuthenticated);
  return(
    <>
    <Router>
      <div className="app-container">
        <Route exact path ="/signup" render={props => !isAuthenticated? <Signup {...props} />  : <Redirect to="/login"/>} />
        <Route exact path ="/login" render={props => !isAuthenticated ? <Login {...props} /> : <Redirect to="/dashboard"/>} /> 
        <Route exact path ="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} /> : <Redirect to="/login"/>} /> 

      </div>  
    </Router>
      
    </>
  )
}

export default App;