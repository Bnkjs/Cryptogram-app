export const myCustomNotif = (className, message) => {
 
    const newDivNotif = document.createElement('div')
          newDivNotif.classList = className
    const rootApp = document.getElementById('container-app')
    const img_notif = document.createElement('img')
          img_notif.classList = "img-notif"
    if(className === 'notif notif-success'){
      img_notif.src = `${require ('../../assets/notif-success.svg')}`
    } else if(className === 'notif notif-info'){
      img_notif.src = `${require ('../../assets/notif-info.svg')}`
    } else if(className === 'notif notif-warning'){
      img_notif.src = `${require ('../../assets/notif-warning.svg')}`
    } else if(className === 'notif notif-destruct'){
      img_notif.src = `${require ('../../assets/notif-destruct.svg')}`
    } 
    newDivNotif.appendChild(img_notif)
    const newMessageNotif = document.createElement('p')
          newMessageNotif.textContent = message
          newMessageNotif.classList = 'message-notif'
    newDivNotif.appendChild(newMessageNotif)
    rootApp.appendChild(newDivNotif)
    setTimeout(()=>{rootApp.removeChild(newDivNotif)},5000)
}