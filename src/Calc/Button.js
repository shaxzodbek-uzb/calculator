import React from 'react'

export default function Button({ button, onClick}) {
    return (
        <div
            className="btn"
            procc={button.title}
            onClick={()=>onClick(button.title)}>{ button.title}</div>
    )
    
}