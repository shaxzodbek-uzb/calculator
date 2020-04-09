import React from 'react'

export default function Button({ button, onClick}) {
    return (
        <div
            className="btn"
            onClick={()=>onClick(button)}>{ button.title}</div>
    )
    
}