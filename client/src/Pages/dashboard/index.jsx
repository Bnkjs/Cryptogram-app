import React,{useEffect, useState} from "react";
import { connect } from "react-redux";

const Dashboard = ({ state }) =>{

  const currentUserEmail = state? state.user.email : null
  const currentUserName = state? state.user.username : null
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  const orderLength = state? currentUserOrder.length : null
  const transfertLength = state? currentUserTransfert.length : null

  const [order, setOrder] = useState([])

  const orders = [
    {
			"order_id": "8ad70f45-3b92-48ff-aa53-89e90af47c90",
			"crypto_name": null,
			"amount": "120.5",
			"created_at": "10 Dec 2021 19:27"
		},
		{
			"order_id": "e80f58bd-df05-4181-aad9-c8c7b62efa3f",
			"crypto_name": null,
			"amount": "120.5",
			"created_at": "13 Dec 2021 11:16"
		}
  ]
  const getOrder = state? currentUserOrder.map((el, index) => {
    return (<>
      <h4 className="order-item" key={index}> n° identifiant de l'achat: </h4>
      <p>{el.order_id}</p>
      <h4 className="order-item" key={index}> Nom de la cryptomonnaie: </h4>
      <p>{el.crypto_name}</p> 
      
    </>)
  }) : null


  
  useEffect(()=>{

  }, [orderLength, transfertLength])
  
   
  return(
    <>
        <div>
          <h1>Dashboard</h1>
           <h2>{currentUserEmail}</h2>
           <p>{currentUserName}</p>
           {currentUserOrder === null?
            <p>vous n'avez pas encore effectué d'achat </p>
            :getOrder
           }

        </div>
    </>
  )
}


export const DashboardStore = connect(
  (state) => ({
    state: state.dashboardReducer.dashboardInfos
  })
)(Dashboard)


export default Dashboard;