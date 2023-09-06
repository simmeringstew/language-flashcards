import { useState } from 'react';
import Card from './Card';
import './styles/app.css';

const App = () => {
  return (
    <div className='container'>
      <Card />
      <div className='button-group'>
        <button className='easy'>Easy</button>
        <button className='medium'>Medium</button>
        <button className='hard'>Hard</button>
        <button className='advanced'>Advanced</button>
        <button className='phrases'>Phrases</button>
        <button className='reset'>Reset</button>
      </div>
    </div>
  );
}

export default App
