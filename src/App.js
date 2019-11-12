import React from 'react';
import './App.css';
import picsArray from './picArray'
import shuffle from './shuffle'

let shuffledArray = shuffle(picsArray);

let picsPicked = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Right/Wrong</span>
        <span>Score</span>
        <span>Top Score</span>
      </header>
        <div id="game">
        {shuffledArray.map(pic =>
          <img 
            key={pic[0]}
            src={"./images/" + pic[1]} 
            alt={"A pic from the interwebz, fascinating"}
            id={pic[0]}
            ></img>)}

      </div>
    </div>
  );
}

export default App;
