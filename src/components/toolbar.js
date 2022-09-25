import React from 'react';
import { FaFreeCodeCamp } from "react-icons/fa";
import '../stylesheets/Toolbar.scss'

export function Toolbar({ text, maxMin, maximized }) {
  return(
    <div className='toolbar' id='toolbar'>
      <FaFreeCodeCamp className='freecodecamp-logo'/>
      {text}
      <i onClick={() => maxMin()} className='icon'></i>
    </div>
  )
} 