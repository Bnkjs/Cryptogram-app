import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import store from "./store";
import Container from "./Pages/container";

const App = () => {
  const myStore = store.getState().authReducer.isLoggedIn
  const [isAuthenticated, setIsAuthenticated] = useState(myStore)
  
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  useEffect(()=>{
  },[myStore])
  
  return(
    <>
    
    <Router>
      <Container/>
      <Route exact path ="/signup" render={props => !myStore? <Signup {...props} setAuth={setAuth}/>  : <Redirect to="/login"/>} />
      <Route exact path ="/login" render={props => !myStore ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/>} /> 
      <Route exact path ="/dashboard" render={props => myStore ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login"/>} /> 
    </Router>
      
    </>
  )
}

export default App;