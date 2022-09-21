import React,{ useState } from 'react';
import './App.scss';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar 
        text={'Editor'} />
      <Toolbar 
        text={'Previewer'} />
    </div>
  );
}

export default App;
