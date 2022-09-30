import '../stylesheets/Wrap.scss'
import React,{ useState } from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'


export function EditorWrap() {

  const [display, setDisplay] = useState(true);

  const maximized = () => {
    setDisplay(!display)
    return display
  }

  return(
    <div className='wrap-editor' id='editor-wrap'>
      <Toolbar 
        text={'Editor'}
        display={display}
        maximized={maximized}
         />
      <Editor 
      display={display}
      />
    </div>
  )
}