import React from 'react'
export default function InputArea(props){
    return (
        <div className="input-area">
            <div className="input-history">{props.calculationStream.value}</div>
            <input className="text" value={props.numberStream.value} onChange={()=>{console.log('changed')}} />
        </div>
    )
}