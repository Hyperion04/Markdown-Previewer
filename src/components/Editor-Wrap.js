import '../stylesheets/Editor-Wrap.scss'
import React,{ useState } from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize2 } from "react-icons/tb";

export function EditorWrap() {

  const [display, setWrap] = useState([]);

  const maxMin = () => {
    const maximized = <TbArrowsDiagonal className='arrows' />
    const minimized = <TbArrowsDiagonalMinimize2 className='arrows' />

    const displayActualizado = <></>

    if(true) {
      displayActualizado = maximized
    } else {
      displayActualizado = minimized
    }
    
    setWrap(displayActualizado)
  }

  return(
    <div className='editor-wrap'>
      <Toolbar 
        text={'Editor'}
        maximized={display}
        maxMin={maxMin} />
      < Editor />
    </div>
  )
}