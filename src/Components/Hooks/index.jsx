import React, { useState, useEffect } from 'react';

export default function Index() {
    const name = useFormInput('Ashwin')
    useEffect(() => {
        console.log("na")
    })
    const surname = useFormInput('Laly')
    useEffect(() => {
        console.log("sr")
    })
    return (
        <>
            <input type ="text" {...name}/>
            <input type ="text" {...surname}/>
        </>
    )
}

function useFormInput(input){
    const [value, setValue] = useState(input)
    function handleChange(event){
        setValue(event.target.value)
    }
    return {
        value, onChange: handleChange
    }
}