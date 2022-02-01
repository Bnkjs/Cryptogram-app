import { myCustomNotif } from "components/notification/notif"

export const validActionModal = (e, selectedCrypto, selectedContact, hook) =>{
  e.preventDefault()
  if(![selectedCrypto].every(Boolean)){
    myCustomNotif('notif notif-warning','Vous devez sélectionner une crypto-monnaie !!')
  }
  if(![selectedCrypto].every(Boolean)){
    myCustomNotif('notif notif-warning','Vous devez sélectionner une crypto-monnaie !!')
  }
  if(![selectedContact].every(Boolean)){
    myCustomNotif('notif-bottom notif-warning','Vous devez sélectionner un contact !!')
  }
  else{
    e.preventDefault()
    const setHook = (hook) =>{
      hook()
    }
    return setHook
  }
}
