import { useState } from 'react';
import Card from './Card';
import Control from './Control';
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

  const start = () => {
    setWords(shuffle(fullWords.slice(0, gameLength)));
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

  const next = (gotIt) => {
    if (gotIt) {
      if (words.length === 1) {
        setWords(null);
      } else {
        setWords(words.slice(1));
      }
    } else {
      const [first, ...rest] = words;
      setWords([...rest, first]);
    }
  }

  return (
    <div className='container'>
      <Card words={words} />
      <Control words={words} next={next} />
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
          <button className='easy' onClick={() => setGameLength(100)}>Easy</button>
          <button className='medium' onClick={() => setGameLength(250)}>Medium</button>
          <button className='hard' onClick={() => setGameLength(500)}>Hard</button>
        </div>
        <div className='bottom-buttons'>
          <button className='advanced' onClick={() => setGameLength(1000)}>Advanced</button>
          {/* add later phrases will pull a seperate json file and start the game on its own */}
          <button className='phrases'>Phrases</button>
          <button className='start' onClick={start}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default App
