import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";
import {NewComponent} from "./NewComponent";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header title={'New Header'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForFooter={'New Footer'}/>
                <NewComponent students={}/>
            </div>

        </div>
    );
}

export default App;
