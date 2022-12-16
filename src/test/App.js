import React, { useState,useRef,useEffect } from 'react';
import Hello from './Hello';

function App() {
    const [text, settext] = useState('')
    const [click, setclick] = useState(true)
    const nameHand = (e) => {
        settext(e.target.value);
    }
    const inputRef = useRef()
    const btnHand = () => {
        console.log(inputRef.current.getBoundingClientRect())
    }
    const btnToggle = () => {
        setclick(!click)
    }
    return (
        <>
        <div className="container text-center d-flex mt-3">
            <input 
            type="text" 
            className="form-control" 
            onChange={nameHand}
            ref={inputRef}
            />
            <button className="btn btn-primary" onClick={btnHand} >Click</button> 
            <button className="btn btn-danger" onClick={btnToggle} >Toggle</button> 
        </div>
        {click && <Hello />}
        </>
    )
}

export default App
