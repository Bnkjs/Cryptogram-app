import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button";
import Div from "../../components/Div";
import { PageContainer } from "../../components/PageContainer";
import { delete_profil } from "../../Actions/profil";
import  cube_white from '../../assets/cube_white.svg';
import  cube_black  from '../../assets/cube_black.svg'
import { myCustomNotif } from "components/notification/notif";
import { navDisable, navEnable } from "utils/navUtils";

const Profil = ({ state, token }) => {

  const submitDelete = (e) => {
    delete_profil(e,token)
    setTimeout(()=>{
      myCustomNotif('notif notif-destruct','votre compte à bien été supprimé')
    },800)
    
  }
  useEffect(()=>{
    navEnable()
  },[])
  return(
    <PageContainer bg='#F8F8F9'>
      <h1 className="hone-center">Informations profil</h1>
      <Div display='flex' alignItems='center' justifyContent='center' flexDirection='column' className="profil-wrap">
        <img className="cube-white cube" src={cube_white} alt="cube blanc" />
        <img className="cube-black cube" src={cube_black} alt="cube noir" />
        <Div display='flex' alignItems='center' justifyContent='start' flexDirection='column'  className="user-infos-wrap">
            <div className="avatar-p">
                {state.username.toUpperCase()[0]}
            </div>
            <h2 className="user-name">{state.username}</h2>
            <p className="user-email">{state.email}</p>
            <p className="user">Inscrit depuis: {state.created_at}</p>
            <div className="hr"></div>
            <div className="d-user">
              <h2>Supprimer son compte</h2>
              <Button primary_xl_del onClick={(e)=> submitDelete(e)}>Supprimer son compte</Button>
            </div>
        </Div>
      </Div>
    </PageContainer>
  )
}

export default Profil

export const ProfilStore = connect(
  (state) => ({
    state: state.authReducer.currentUserInfo
  })
)(Profil)
