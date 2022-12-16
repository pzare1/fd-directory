import React, { useState, useRef,useEffect } from 'react';

function Hello() {
    const [person, setperson] = useState([])
    const ref = useRef(0)
    const isCurrent = useRef(true)
    console.log(ref.current++)
    useEffect(() => {
        return () => {
           isCurrent.current = false; 
        }
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.ir/users', {
        method: 'GET',
        })
        .then(response => response.json())
        .then(json => setperson(json))
    }, [])
    return (
        <div>
            hello
        </div>
    )
}

export default Hello
