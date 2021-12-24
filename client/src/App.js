import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import { DashboardStore } from "./Pages/dashboard";
import store from "./store";
import Navbar, { NavbarRes, NavBarResStore, NavbarStore } from "./components/Navbar";
import { useSelector } from "react-redux";
import { ActivityStore } from "./Pages/activity";
import BuyCrypto from "./Pages/buy";
import TransfertCrypto from "./Pages/transfert/transfert";
import { ProfilStore } from "./Pages/profil";
import { ContactStore } from "./Pages/contact/contact";
import { createStore } from "redux";
import contactReducer from "./Reducers/contactReducer";
import { MarketStore } from "./Pages/market";
import './app.scss'
import Landing from "./Pages/Landing";
const App = () => {
  const myStore = store.getState().authReducer.isLoggedIn
  const [isAuthenticated, setIsAuthenticated] = useState(myStore)
  const currentUserInfo = useSelector(state => state.authReducer)


  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  return(
    <div id="container">
      <Router>
        <NavBarResStore setAuth={setAuth}/>
        <NavbarStore setAuth={setAuth} state={currentUserInfo}/>
        <Route exact path ="/" render={props => <Landing {...props} />}/>
        <Route exact path ="/market" render={props =>  <MarketStore {...props} />}/>
        <Route exact path ="/signup" render={props => !myStore? <Signup {...props} setAuth={setAuth}/>  : <Redirect to="/login"/>} />
        <Route exact path ="/login" render={props => !myStore ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/>} />
        <Route exact path="/profil" render={props => myStore? <ProfilStore {...props} token={currentUserInfo.token}/> : <Redirect to="/login"/>}/>
        <Route exact path ="/contact" render={props => myStore ? <ContactStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>} />
        <Route exact path ="/dashboard" render={props => myStore ? <DashboardStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>} />
        <Route exact path="/activity" render={props => myStore? <ActivityStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>}/>
        <Route exact path="/buy_crypto" render={props => myStore? <BuyCrypto {...props}/> : <Redirect to="/login"/>}/>
        <Route exact path="/transfert_crypto" render={props => myStore? <TransfertCrypto {...props}/> : <Redirect to="/login"/>}/>      
      </Router>

    </div>
  )
}

export default App;