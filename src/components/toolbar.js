import React from 'react';
import { FaFreeCodeCamp } from "react-icons/fa";
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import '../stylesheets/Toolbar.scss'

export function Toolbar({ text, onClick, maximized }) {
  return(
    <div className='toolbar'>
      <FaFreeCodeCamp className='freecodecamp-logo'/>
      {text}
      <i onClick={onClick} className='arrows-content'> { maximized ? <TbArrowsDiagonal className='arrows' /> : <TbArrowsDiagonalMinimize2 className='arrows' /> } </i>
    </div>
  )
} 