import React from 'react';
import { FaFreeCodeCamp } from "react-icons/fa";
import '../stylesheets/Toolbar.scss'
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize2 } from "react-icons/tb";


export function Toolbar({ text, maximized, display }) {

  const arrows = (max) => {
    if (max === true) {
      return <TbArrowsDiagonal />
    }
    return <TbArrowsDiagonalMinimize2 />
  }

  return(
    <div className='toolbar' id='toolbar'>
      <FaFreeCodeCamp className='freecodecamp-logo'/>
      {text}
      <i onClick={() => maximized()} className='icon'>{arrows(display)}</i>
    </div>
  )
} 