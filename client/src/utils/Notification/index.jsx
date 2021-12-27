import React,{ useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import './notif.scss';
import { NotifSuccess, NotifInfo, NotifWarning, NotifDestruct } from '../Notification/index'

const initial = {
  visible: { opacity: 1, y: 10 },
  hidden: { opacity: 0, y: 0 },
}

 const Notification = ({ type ,message }) => {
  const [existModal,setExistModal ] = useState(false)

  return (
        <AnimatePresence>
          <motion.div
            className="notif"
            variants={initial}
            initial={{ opacity: 0, y: 0 }}
            animate={ existModal? "hidden" : "visible"}
            transition={{ duration: .3 }}          
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
          > 
            {type === 'success' &&
              <NotifSuccess>
                { message }
                <div 
                  className="close-notif" 
                  onClick={()=> setExistModal(true)}>
                </div>
              </NotifSuccess>
            }
            {type === 'info' &&
              <NotifInfo>
                { message }
                <div 
                  className="close-notif" 
                  onClick={()=> setExistModal(true)}>
                </div>
              </NotifInfo>
            }
            {type === 'warning' &&
              <NotifWarning>
                { message }
                <div 
                  className="close-notif" 
                  onClick={()=> setExistModal(true)}>
                </div>
              </NotifWarning>
            }
            {type === 'destruct' &&
              <NotifDestruct>
                { message }
                <div 
                  className="close-notif" 
                  onClick={()=> setExistModal(true)}>
                </div>
              </NotifDestruct>
            }
            
          </motion.div>
      </AnimatePresence>
)}
    
export default Notification;
