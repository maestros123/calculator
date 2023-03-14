import React, {useState} from 'react';
import './App.css';
import {Numbers} from "./components/numbers";
import {Display} from "./components/display";
import {Operators} from "./components/operators";
import {Equal} from "./components/equal";
import {Switcher} from "./components/switcher";

function App() {
    const [result, setResult] = useState('0')
    const [tmpResult, setTmpResult] = useState('0')
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div className="App">
            <div className="board">
                <div className="elements">
                    <div className="item" draggable={true}>
                        <Display result={result}/>
                    </div>
                    <div className="item" draggable={true}>
                        <Operators setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} activeButton={activeButton}/>
                    </div>
                    <div className="item" draggable={true}>
                        <Numbers result={result} setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} activeButton={activeButton}/>
                    </div>
                    <div className="item" draggable={true}>
                        <Equal setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} activeButton={activeButton}/>
                    </div>
                </div>
            </div>
            <div className="board">
                <div className="switch__buttons">
                    <Switcher activeButton={activeButton} setActiveButton={setActiveButton}/>
                </div>
                <div className="dropped filled">

                </div>
            </div>
        </div>
    );
}

export default App;
