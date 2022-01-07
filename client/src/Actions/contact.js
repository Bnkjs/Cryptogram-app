import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";
import { myCustomNotif } from "../components/notification/notif";

export const getAllContact = async (token) => {
  try {
      return await axios.get(apiUrls.contact,{
          headers: {
            'Content-Type': 'application/json',
            token: token
        } 
      }).then(response => {
        if(response.data){
            store.dispatch({
              type: types.GET_ALL_CONTACT_SUCCESS,
              payload: response.data
            });
           
        }else{
          store.dispatch({
            type: types.GET_ALL_CONTACT_FAIL,
            payload: response.data
          })
        }
      })
  } catch (error) {
      myCustomNotif('notif notif-warning',error.response.data);
  }
}

export const addContact = async (e,token,email,firstname,lastname) => {
  
    e.preventDefault()
    try {
      
        return await axios.post(apiUrls.contact,{
          email: email,
          firstname: firstname,
          lastname : lastname 
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token
          }
        }).then(response => {
          if(response.data){
              store.dispatch({
                type: types.ADD_CONTACT_SUCCESS,
                payload: response.data              
              })
             setTimeout(()=>{
              myCustomNotif('notif notif-success', 'Contact ajouté');
             }, 300)
          }else{
            store.dispatch({
              type: types.ADD_CONTACT_FAIL,
              payload: response.data
            }) 
            myCustomNotif('notif notif-warning', response.data)     
          }
        })
    } catch (error) {
        myCustomNotif('notif notif-warning', error.response.data)
    }
}

export const deleteContact = async (e,token,email) => {
  e.preventDefault()
  try {
      return await axios.delete(apiUrls.contact,
        
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
          },
          data: {
            email : email
          }
        }
          
      ).then(response => {
        if(response.data){
            store.dispatch({
              type: types.DELETE_CONTACT_SUCCESS,
            })
          myCustomNotif('notif notif-success', response.data)
        }else{
          store.dispatch({
            type: types.DELETE_CONTACT_FAIL,
            payload: response.data
          })
          myCustomNotif('notif notif-warning', response.data)
        }
      })
  } catch (error) {
      myCustomNotif('notif notif-warning', error.response.data);
  }
}

export const deleteAllContact = async (e,token) => {
  e.preventDefault()
  try {
    if(token){
      return await axios.delete(apiUrls.allContact,{
        headers: {
          token: token
        }
      }).then(response => {
          if(response.data){
            store.dispatch({
              type: types.DELETE_ALL_CONTACT_SUCCESS,
            })
            store.dispatch({
              type: types.SET_MESSAGE,
              payload: response.data
            })
          }else{
            store.dispatch({
              type: types.DELETE_ALL_CONTACT_FAIL,
              payload: response.data
            })
          }
      })
    } 
  } catch (error) {
      myCustomNotif('notif notif-warning',error.response.data);
  }
}

