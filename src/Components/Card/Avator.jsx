import React from 'react';

export default function Avator (props){
    return (
        <>
            <img src={props.image} className="rounded" alt={props.name} width="150" height="150" />
        </>
    )
}