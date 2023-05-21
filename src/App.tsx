import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (e:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello i'm Vasya")
    // }
    // const mySecondSubscriber = (e:MouseEvent<HTMLButtonElement) => {
    //     console.log("Hello i'm Ivan")
    // }

    const onClickHandler=(name:string)=>{console.log(name)}
    return (
        <div className="App">
            <button onClick={()=>{onClickHandler("Vasya")}}>MyYouTubeChanel-1</button>
            <button onClick={()=>{onClickHandler("Igor")}}>MyYouTubeChanel-2</button>
        </div>
    )
}

export default App;
