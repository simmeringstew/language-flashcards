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
      // shuffle them here as well
      return;
    }
    if (!gameLength) {
      setWords(null);
      return;
    }
    setWords(shuffle(fullWords.slice(0, gameLength)));
  }

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  return array;
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
