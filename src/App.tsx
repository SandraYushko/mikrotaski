import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";
import {NewComponent} from "./NewComponent";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <div className="App">
            <div className="container">
                <Header title={'New Header'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForFooter={'New Footer'}/>
                <NewComponent cars={topCars}/>
            </div>

        </div>
    );
}

export default App;
