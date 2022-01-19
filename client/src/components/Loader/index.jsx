import React from "react";
import cubes from 'assets/cubes_gradients_b.svg'

const CustomLoader = () => {
  return(
    <>
       <div className="is-loading">
        <img className="cubes_form" src={cubes} alt="deux cubes avec un dégradé bleu transparent" />
       </div>
    </>)
}
export default CustomLoader