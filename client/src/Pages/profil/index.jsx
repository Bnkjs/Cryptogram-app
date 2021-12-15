import React,{useEffect, useState} from "react";
import { connect } from "react-redux";

const Profil = ({ state }) => {

  return(
    <>
      <h1>Profil Page</h1>
      <h2>{state.email}</h2>
      <p>{state.username}</p>
    </>
  )
}

export default Profil

export const ProfilStore = connect(
  (state) => ({
    state: state.authReducer.currentUserInfo
  })
)(Profil)
