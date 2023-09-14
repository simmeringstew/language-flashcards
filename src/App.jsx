import { useState } from 'react';
import Card from './Card';
import Next from './Next';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/app.css';
import wordList from './assets/common-words.json';

const App = () => {

  const fullWords = wordList;
  const [words, setWords] = useState(null);
  const [gameLength, setGameLength] = useState(20);

  const handleSliderChange = (value) => {
    setGameLength(value);
  }

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

  const next = () => {
    if (words.length === 1) {
      setWords(null);
      return;
    }
    setWords(words.slice(1));
  }

  return (
    <div className='container'>
      <Card words={words} />
      <Next words={words} next={next} />
      <div className='button-group'>
        <div className='slider-group'>
          <p>{gameLength} Words</p>
          <Slider 
            className='slider'
            min={20}
            max={1000}
            step={20}
            value={gameLength}
            onChange={handleSliderChange}
          />
        </div>
        <div className='top-buttons'>
          <button className='easy' onClick={() => setMode(100)}>Easy</button>
          <button className='medium' onClick={() => setMode(250)}>Medium</button>
          <button className='hard' onClick={() => setMode(500)}>Hard</button>
        </div>
        <div className='bottom-buttons'>
          <button className='advanced' onClick={() => setMode(1000)}>Advanced</button>
          <button className='phrases' onClick={() => setMode(1)}>Phrases</button>
          <button className='reset' onClick={() => setMode(null)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App
