import './App.css';
import React from 'react';
import Gauntlet from './resources/gauntlet-empty.png';
import Gauntlet1Stone from './resources/gauntlet-1-stone.png';
import Gauntlet2Stone from './resources/gauntlet-2-stone.png';
import Gauntlet3Stone from './resources/gauntlet-3-stone.png';
import Gauntlet4Stone from './resources/gauntlet-4-stone.png';
import Gauntlet5Stone from './resources/gauntlet-5-stone.png';
import Gauntlet6Stone from './resources/gauntlet-6-stone.png';
import SpaceStone from './resources/space-stone.png';
import PowerStone from './resources/power-stone.png';
import RealityStone from './resources/reality-stone.png';
import MindStone from './resources/mind-stone.png';
import TimeStone from './resources/time-stone.png';
import SoulStone from './resources/soul-stone.png';

let displayTime = 0;
function App() {
const [state, setState] = React.useState();
function createCookie() {
  // if there is not already a cookie
    if (!document.cookie) {
    let cookie = Date.now()
    document.cookie = cookie
    console.log(cookie)
    return cookie
    } 
}

function getElapsedTime(cookie) {
    let dateNow = Date.now()
    let dateResult = dateNow - cookie
    let dateResultInSeconds = Math.floor(dateResult / 1000)
    let timeInMinutes = Math.floor(dateResultInSeconds / 60)
    let finalTime = displayTimeSeconds(dateResultInSeconds)
    let finalTimeArr = [finalTime, timeInMinutes]
    return finalTimeArr
}

  function displayTimeSeconds(dateResultInSeconds) {
    displayTime+= 1
    if (dateResultInSeconds % 61 === 1) {
      displayTime = 0;
    }
    return displayTime
  }

  function clearCookie(cookie) {
    document.cookie = Date.now();
    return cookie
  }

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    createCookie();
    const interval = setInterval(() => {
      setState(getElapsedTime(document.cookie))
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className="snow">
      <h1 className="title">Collect The Infinity Stones</h1>
      <h2 className="desc">Gather stones based on how long its been since you last visited the website. <br/>To reset the timer press the 'reset' button.</h2>
      <source src='./resources/ThanosTheme.mp3' type="audio/mp3" autoPlay={true}/>
      <h1>Elapsed Time: {state[1]} Minute{ state[1] > 1 ? "s": ""} {state[0]} Second{ state[0] > 1 ? "s": ""}</h1>
      <div className="button-flex"><button onClick={clearCookie} className="reset-counter">Reset Counter</button></div>
      <div className="gauntlet-flex">
      <img alt="" src={state[1] < 1 ? Gauntlet : ""} className="gauntlet"/> 
      </div>     
      <div className="gauntlet-flex">
      <img alt="" src={state[1] >= 1 && state[1] < 3? Gauntlet1Stone : ""} className="gauntlet"/>     
      </div> 
      <div className="gauntlet-flex">
      <img alt="" src={state[1] >= 3 && state[1] < 6 ? Gauntlet2Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={state[1] >= 6 && state[1] < 9 ? Gauntlet3Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={state[1] >= 9 && state[1] < 12 ? Gauntlet4Stone : ""} className="gauntlet"/>
      </div><div className="gauntlet-flex">
      <img alt="" src={state[1] >= 12 && state[1] < 15 ? Gauntlet5Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={state[1] >= 15 ? Gauntlet6Stone : ""} className="gauntlet"/>
      </div>
      <div className='stones-flex'>
        <img alt="power-stone" className="infinity-stone" src={PowerStone}></img>
        <p> - 1 Minute</p>
      </div> <div className='stones-flex'>
        <img alt="space-stone" className="infinity-stone" src={SpaceStone}></img>
        <p> - 3 Minutes</p>
      </div> <div className='stones-flex'>
        <img alt="reality-stone" className="infinity-stone" src={RealityStone}></img>
        <p> - 6 Minutes</p>
      </div> <div className='stones-flex'>
        <img alt="soul-stone" className="infinity-stone" src={SoulStone}></img>
        <p> - 9 Minutes</p>
      </div> <div className='stones-flex'>
        <img alt="time-stone" className="infinity-stone" src={TimeStone}></img>
        <p> - 12 Minutes</p>
      </div><div className='stones-flex'>
        <img alt="mind-stone" className="infinity-stone" src={MindStone}></img>
        <p> - 15 Minutes</p>
      </div>
      </div>
    </div>
  );
}

export default App;
