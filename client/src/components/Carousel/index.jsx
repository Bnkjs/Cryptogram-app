import React from 'react';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useSelector } from 'react-redux';

const handleDragStart = (e) => e.preventDefault();
  const Gallery = () => {

  const stateToken = useSelector(state => state.user)
  console.log(stateToken);

useEffect(()=>{
  
},[])

  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default handleDragStart;