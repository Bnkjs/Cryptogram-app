import React from 'react'
import { CgDatabase } from 'react-icons/cg'
import { FaCoins } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'
import './style.scss'

const ShowDetail = ({type, date ,amount, total, status, transactionId}) => {
  return(
    <div id="s-d-container">
      <div className='datas-s-d'>
        <div className="d-rows">
        <div className="r-rows-h">
          <span>Status</span>
            <FiCheckCircle/>
        </div>
          <p>Terminé</p>
        </div>
        <div className="d-rows">
          <div className="r-rows-h">
            <FaCoins/>
            <span>Qte</span>
          </div>
          <p className='r-rows-total'>{amount}</p>
        </div>
        <div className="d-rows">
          <div className="r-rows-h">
            <FaCoins/>
            <span>Somme</span>
          </div>
          <p className='r-rows-total'>{total} €</p>
        </div>
        <div className="d-rows">
          <div className="r-rows-h">
            <CgDatabase/> 
            <span>Id achat</span>
          </div>
            <p>{transactionId}</p>
        </div>
      </div>
    </div>)
}

export default ShowDetail