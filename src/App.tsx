import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber,age)
    }
    const button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const button3Foo = () => {
        console.log("i'm stupid button")
    }
    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"} callBack={()=>button1Foo("i'm Ivan",22)}/>
            <Button name={"MyYouTubeChanel-2"} callBack={()=>button2Foo("i'm Vasya")}/>
            <Button name={"MyYouTubeChanel-3"} callBack={button3Foo}/>
        </div>
    )
}

export default App;
