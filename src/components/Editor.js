import React from 'react';
import '../stylesheets/Editor.scss'

export function Editor(props) {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown} />
  );
};