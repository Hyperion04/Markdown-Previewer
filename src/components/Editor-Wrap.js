import '../stylesheets/Editor-Wrap.scss'
import React from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'

export function EditorWrap() {
  return(
    <div className='editor-wrap'>
      <Toolbar 
        text={'Editor'}
        maximized={false} />
      < Editor />
    </div>
  )
}