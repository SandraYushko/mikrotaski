import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const button1Foo = () => {
console.log("i'm Vasua")
    }
    const button2Foo = () => {
        console.log("i'm Ivan")
    }
    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"} callBack={button1Foo}/>
            <Button name={"MyYouTubeChanel-2"} callBack={button2Foo}/>
        </div>
    )
}

export default App;
