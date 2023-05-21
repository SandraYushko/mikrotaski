import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const myFirstSubscriber = () => {
        console.log("Hello i'm Vasya")
    }
    const mySecondSubscriber = () => {
        console.log("Hello i'm Ivan")
    }
    return (
        <div className="App">
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>
        </div>
    )
}

export default App;
