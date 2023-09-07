import { useState } from 'react';
import Card from './Card';
import './styles/app.css';
import wordList from './assets/common-words-100.json';

const App = () => {

  const fullWords = wordList;
  const [words, setWords] = useState(null);

  const setMode = (gameLength) => {
    if (!gameLength) {
      setWords(null);
      return;
    }
    else if (gameLength === 1) {
      // set words to the phrases
      // shuffle here as well
      return;
    } else {
      setWords(shuffle(fullWords.slice(0, gameLength)));
    }
  }

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
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
        <button className='easy' onClick={() => setMode(100)}>Easy</button>
        <button className='medium' onClick={() => setMode(250)}>Medium</button>
        <button className='hard' onClick={() => setMode(500)}>Hard</button>
        <button className='advanced' onClick={() => setMode(1000)}>Advanced</button>
        <button className='phrases' onClick={() => setMode(1)}>Phrases</button>
        <button className='reset' onClick={() => setMode(null)}>Reset</button>
      </div>
    </div>
  );
}

export default App
