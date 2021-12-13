import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import { DashboardStore } from "./Pages/dashboard";
import store from "./store";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Activity from "./Pages/activity";
import BuyCrypto from "./Pages/buy";
import TransfertCrypto from "./Pages/transfert/transfert";
import getDashboardInfo from "./services/dashboard.service";
import { ProfilStore } from "./Pages/profil";

const App = () => {
  const myStore = store.getState().authReducer.isLoggedIn
  const [isAuthenticated, setIsAuthenticated] = useState(myStore)
  const currentUserInfo = useSelector(state => state.authReducer)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  useEffect(()=>{
    getDashboardInfo(currentUserInfo.token)
  },[myStore])
  


  return(
    <>
    
    <Router>
      <Navbar setAuth={setAuth}/>
      <Route exact path="/profil" render={props => myStore? <ProfilStore {...props}/> : <Redirect to="/login"/>}/>
      <Route exact path="/activity" render={props => myStore? <Activity {...props}/> : <Redirect to="/login"/>}/>
      <Route exact path="/buy_crypto" render={props => myStore? <BuyCrypto {...props}/> : <Redirect to="/login"/>}/>
      <Route exact path="/transfert_crypto" render={props => myStore? <TransfertCrypto {...props}/> : <Redirect to="/login"/>}/>      
      <Route exact path ="/signup" render={props => !myStore? <Signup {...props} setAuth={setAuth}/>  : <Redirect to="/login"/>} />
      <Route exact path ="/login" render={props => !myStore ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/>} /> 
      <Route exact path ="/dashboard" render={props => myStore ? <DashboardStore {...props} /> : <Redirect to="/login"/>} /> 
    </Router>
      
    </>
  )
}

export default App;