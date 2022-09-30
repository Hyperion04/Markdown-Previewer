import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../stylesheets/Preview.scss';

export function Preview({ display, onChange, markdown }) {



  return(
    <div className={display ? 'min' : 'max'} id='preview'>
      <ReactMarkdown 
        onChange={onChange} 
        value={markdown} 
        remarkPlugins={[remarkGfm]}
        />
    </div>
  )

}