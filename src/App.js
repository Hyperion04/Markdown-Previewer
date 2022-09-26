import React from 'react';
import './App.scss';
import { EditorWrap } from './components/Editor-Wrap';
import { PrewieverWrap } from './components/Previewer-Wrap'

function App() {
  return (
    <div className="App">
      <EditorWrap />
      <PrewieverWrap />
    </div>
  );
}

export default App;
