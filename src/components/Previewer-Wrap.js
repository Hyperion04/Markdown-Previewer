import '../stylesheets/Wrap.scss';
import React, { useState } from 'react';
import { Toolbar } from './Toolbar';
import { Preview } from './Previewer';

export function PrewieverWrap() {
  
  const [display, setDisplay] = useState(true);

  const maximized = () => {
    setDisplay(!display)
    return display
  }

  return(
    <div className='wrap' id='preview-wrap'>
      <Toolbar 
        text={'Previever'}
        display={display}
        maximized={maximized}
         />
      <Preview 
        display={display} />
    </div>
  )
}


