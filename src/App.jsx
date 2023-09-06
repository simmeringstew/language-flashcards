import { useState } from 'react';
import Card from './Card';
import './styles/app.css';
import wordList from './assets/common-words-100.json';

const App = () => {

  const fullWords = wordList;
  const [words, setWords] = useState(null);

  const setMode = (gameLength) => {
    if (gameLength === 0) {
      // set words to the phrases
      return;
    }
    if (!gameLength) {
      setWords(null);
      return;
    }
    setWords(fullWords.slice(0, gameLength));
  }

  return (
    <div className='container'>
      <Card words={words} />
      <div className='button-group'>
        <button className='easy' onClick={() => setMode(99)}>Easy</button>
        <button className='medium' onClick={() => setMode(249)}>Medium</button>
        <button className='hard' onClick={() => setMode(499)}>Hard</button>
        <button className='advanced' onClick={() => setMode(999)}>Advanced</button>
        <button className='phrases' onClick={() => setMode(0)}>Phrases</button>
        <button className='reset' onClick={() => setMode(null)}>Reset</button>
      </div>
    </div>
  );
}

export default App
