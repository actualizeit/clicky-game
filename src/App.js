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
  rightWrong: ["Click a pic to get started champ!", " Just don't click the same pic twice!"],
  score: 0,
  topScore: 0
  }

  onPick = (id) => {
    console.log(id);
    let temp = this.state.picsPicked;
    if (this.state.picsPicked.indexOf(id) === -1) {
      console.log("right!");

      temp.push(id);
      this.setState({
        picsPicked: temp,
        score: this.state.score + 1,
        rightWrong: ["OH YEAH!"]
      }, function(){
        if(this.state.score > this.state.topScore){
          this.setState({topScore: this.state.score})
        }
        console.log('Picked: '+ this.state.picsPicked + ' - Score: ' + this.state.score)})
    } else {
      console.log("wrong!");
      temp = [];
      this.setState({
        picsPicked: temp,
        score: 0,
        rightWrong: ["OH NO! It coo, click a pic to start over, we'll save your top score fam"]
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
          <span>{this.state.rightWrong[0]}</span>
          <span>{this.state.rightWrong[1]}</span>
          <span>Score: {this.state.score}</span>
          <span>Top Score: {this.state.topScore}</span>
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
