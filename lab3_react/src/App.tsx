import './App.css'
import {Counter} from "./Counter.tsx";
import {Button} from "./Button.tsx";
import React from "react";

function App() {
    const [counter, setCounter] = React.useState<number>(0);
    function increment() {
        setCounter(counter + 1);
    }
    return (
        <>
            <Counter value ={counter}></Counter>
            <Button onClick={increment}></Button>
        </>)
}

export default App
