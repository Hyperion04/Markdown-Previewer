import React from 'react';
import '../stylesheets/Editor.scss'

export function Editor({ onChange,markdown }) {
  return (
    <textarea
      id="editor"
      onChange={onChange}
      type="text"
      value={markdown} />
  );
};