import React from 'react';
import '../stylesheets/Editor.scss'

export function Editor({ onChange, markdown, display }) {
  return (
    <textarea
      id="editor"
      className={display ? 'minimized' : 'maximized'}
      onChange={onChange}
      type="text"
      value={markdown} />
  );
};