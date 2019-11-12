import React, {Component} from 'react';
import './App.css';
import picsArray from './picArray'
import shuffle from './shuffle'

let shuffledArray = shuffle(picsArray);

class App extends Component {

  componentDidMount() {
    this.setState({loadArray: shuffledArray})
  }

  state = {
  loadArray: [],
  picsPicked: [],
  score: 0
  }

  onPick = (id) => {
    console.log(id);
    let temp = this.state.picsPicked;
    if (this.state.picsPicked.indexOf(id) === -1) {
      console.log("right!");
      temp.push(id);
      this.setState({
        picsPicked: temp,
        score: this.state.score + 1
      }, function(){
          console.log('Picked: '+ this.state.picsPicked + ' - Score: ' + this.state.score)})
    } else {
      console.log("wrong!");
      temp = [];
      this.setState({
        picsPicked: temp,
        score: 0 
      }, function(){
          console.log('Picked: '+ this.state.picsPicked + ' - Score: ' + this.state.score)})
      console.log('Score: ' + this.state.score);
    }
    let shuffledArray = shuffle(this.state.loadArray);
    this.setState({loadArray: shuffledArray});
  };

  render() {
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
                onClick={() => this.onPick(pic[0])}>
              </img>
            )}
        </div>
      </div>
    );
  }
}

export default App;
