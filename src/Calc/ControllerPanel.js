import React from 'react'
import Button from './Button'

export default function ControllerPanel(props) {
    const buttons = [
        {title: '%', type: 'function', className: 'btn'}, 
        {title: 'CE', type: 'function', className: 'btn'},
        {title: 'C', type: 'function', className: 'btn'},
        {title: 'del', type: 'function', className: 'btn'},
        {title: '1/x', type: 'function', className: 'btn'},
        {title: 'x^2', type: 'function', className: 'btn'},
        {title: 'sqrt(x)', type: 'function', className: 'btn'},
        {title: '/', type: 'function', className: 'btn'},
        {title: '7', type: 'number', className: 'btn font-medium'},
        {title: '8', type: 'number', className: 'btn font-medium'},
        {title: '9', type: 'number', className: 'btn font-medium'},
        {title: '*', type: 'function', className: 'btn'},
        {title: '4', type: 'number', className: 'btn font-medium'},
        {title: '5', type: 'number', className: 'btn font-medium'},
        {title: '6', type: 'number', className: 'btn font-medium'},
        {title: '+', type: 'function', className: 'btn'},
        {title: '1', type: 'number', className: 'btn font-medium'},
        {title: '2', type: 'number', className: 'btn font-medium'},
        {title: '3', type: 'number', className: 'btn font-medium'},
        {title: '-', type: 'function', className: 'btn'},
        {title: '+/-', type: 'function', className: 'btn'},
        {title: '0', type: 'number', className: 'btn font-medium'},
        {title: '.', type: 'char', className: 'btn'},
        {title: '=', type: 'function', className: 'btn'},
    ]
    return (
        <div className="controller-area">
            { buttons.map((button, index) => {
                return <Button button={button} key={index} onClick={props.onButtonClick}/>
            }) }
        </div>
    )
}