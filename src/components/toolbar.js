import React from 'react';
import { FaFreeCodeCamp } from "react-icons/fa";
import '../stylesheets/toolbar.scss'

export function Toolbar(props) {
  return(
    <div className='toolbar'>
      <FaFreeCodeCamp className='freecodecamp-logo'/>
      {props.text}
      <i className={props.icon} onClick={props.onClick} />
    </div>
  )
} 