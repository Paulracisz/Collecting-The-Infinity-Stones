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

function App() {
  
const [myText, setMyText] = React.useState('Null');
function createCookie() {
    if (!document.cookie) {
    let cookie = Date.now()
    document.cookie = cookie
    return cookie
    } else return
}

function getElapsedTime(cookie) {
    let dateNow = Date.now()
    let elapsedTime = dateNow - cookie
    if (elapsedTime) {
    let finalTime = Math.floor(elapsedTime / 1000)
    return finalTime
    }
    else return
}

  function clearCookie(cookie) {
    document.cookie = Date.now();
    return cookie
  }

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    createCookie();
    const interval = setInterval(() => {
      setMyText(getElapsedTime(document.cookie))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Collect The Infinity Stones</h1>
      <h2 className="desc">Gather stones based on how long its been since you last visited the website. <br/>To reset the timer press the 'reset' button.</h2>
      <source src='./resources/ThanosTheme.mp3' type="audio/mp3" autoPlay={true}/>
      <h1>Elapsed Time: { myText / 86400 > 0 ? Math.floor(myText / 86400) : '0'}  Days { myText / 3600 > 0 ? Math.floor(myText / 3600) : '0'}  Hours { myText / 60 > 0 ? Math.floor(myText / 60) : '0'}  Minutes { myText|| '0'}  Seconds</h1>
      <div className="button-flex"><button onClick={clearCookie} className="reset-counter">Reset Counter</button></div>
      <div className="gauntlet-flex">
      <img alt="" src={myText < 86400 ? Gauntlet : ""} className="gauntlet"/> 
      </div>     
      <div className="gauntlet-flex">
      <img alt="" src={myText > 86400 && myText < 604800? Gauntlet1Stone : ""} className="gauntlet"/>     
      </div> 
      <div className="gauntlet-flex">
      <img alt="" src={myText > 86400 && myText < 2.419e+6  ? Gauntlet2Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={myText > 86400 && myText < 604800 ? Gauntlet3Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={myText > 2.419e+6 && myText < 2.628e+6 ? Gauntlet4Stone : ""} className="gauntlet"/>
      </div><div className="gauntlet-flex">
      <img alt="" src={myText > 2.628e+6 && myText < 7.884e+6 ? Gauntlet5Stone : ""} className="gauntlet"/>
      </div>
      <div className="gauntlet-flex">
      <img alt="" src={myText > 7.884e+6  && myText < 3.154e+7 ? Gauntlet6Stone : ""} className="gauntlet"/>
      </div>
      <div className='stones-flex'>
        <img alt="power-stone" className="infinity-stone" src={PowerStone}></img>
        <p> - 1 Day</p>
      </div> <div className='stones-flex'>
        <img alt="space-stone" className="infinity-stone" src={SpaceStone}></img>
        <p> - 3 Days</p>
      </div> <div className='stones-flex'>
        <img alt="reality-stone" className="infinity-stone" src={RealityStone}></img>
        <p> - 1 Week</p>
      </div> <div className='stones-flex'>
        <img alt="soul-stone" className="infinity-stone" src={SoulStone}></img>
        <p> - 1 Month</p>
      </div> <div className='stones-flex'>
        <img alt="time-stone" className="infinity-stone" src={TimeStone}></img>
        <p> - 3 Months</p>
      </div><div className='stones-flex'>
        <img alt="mind-stone" className="infinity-stone" src={MindStone}></img>
        <p> - 1 Year</p>
      </div>
    </div>
  );
}

export default App;
