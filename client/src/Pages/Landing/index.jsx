import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import Div from "../../components/Div";
import { PageContainer } from "../../components/PageContainer";
import img_gradient_landing from '../../assets/GRADIENT_LANDING.png';
import { FiArrowDown } from "react-icons/fi";
import svg_pointer from '../../assets/mouse-pointer.svg';
import svg_feather from '../../assets/feather.svg';
import svg_lock from '../../assets/lock.svg';


const Landing = ({ state }) => {
  return(<>
    <PageContainer>
      <Div className="container-wrap" display="flex" justifyContent="center">
        <Div className="header-slogan">
          <h1 className="header-title">Achetez et Transférez <br/> des <span className="span-gradient">cryptosmonnaie</span> <br/> instantenément</h1>
          <p className="header-text">Négociez des Bitcoin, Ethereum et toutes les meilleures <br/> cryptomonnaie  du marché. </p>
          {state? 
            <Link>
            <Button gradient padding="0.8em 2em">Découvrir</Button>
            </Link> 
            :
            <Link to="/signup">
              <Button gradient padding="0.8em 2em">S'inscrire</Button>
            </Link>
          }
          <a href='#l-moto'>
            <div className="circle-arrow">
              <FiArrowDown className="circle"/>
            </div>
          </a>
        </Div>
        <Div className="header-image">
          <img width={'400px'} src={img_gradient_landing} alt="" />
        </Div>
      </Div>
    </PageContainer>
    <PageContainer id="l-moto" bg='#F8F8F9'>
     <h1 className="l-hone">Une gamme de fonctionnalités complète</h1>
     <div id="card-feat-wrap">
      <div className="card-feat">
        <div className="card-feat-circle">
          <img className="pointer" src={svg_pointer} alt="icône d'une souris informatique" />
        </div>
        <h2 className="card-feat-htwo round-up">Simple</h2>
        <p className="card-feat-text">Inscrivez-vous en 1 click</p>
        <Link className="btn-cta" to="/signup">
            <Button gradient padding="0.8em 2em">S'inscrire</Button>
        </Link>
      </div>
      <div className="card-feat">
        <div className="card-feat-circle">
          <img className="pointer" src={svg_lock} alt="icône d'une souris informatique" />
        </div>
        <h2 className="card-feat-htwo round-up">Sécurisé</h2>
        <p className="card-feat-text">Achetez, Vendez et Transferez <br/> vos cryptomonnaies en toute sécurité</p>
        <Link className="btn-cta" to="/signup">
            <Button gradient padding="0.8em 2em">S'inscrire</Button>
        </Link>
      </div>
      <div className="card-feat">
        <div className="card-feat-circle">
          <img className="pointer" src={svg_feather} alt="icône d'une souris informatique" />
        </div>
        <h2 className="card-feat-htwo round-up">Gratuit</h2>
        <p className="card-feat-text">Aucun frais lors de votre inscription sur Cryptogram</p>
        <Link className="btn-cta" to="/signup">
            <Button gradient padding="0.8em 2em">S'inscrire</Button>
        </Link>
      </div>
     </div>
     
    </PageContainer>   
  </>)
} 

export default Landing