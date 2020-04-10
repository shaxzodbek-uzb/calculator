import React from 'react';
import MenuLogo from '../asserts/images/menu.svg';

export default function MenuButton(){
    return (
        <div className="navigation-btn">
            <img src={MenuLogo} alt="menu" width="24"/>
        </div>
    )
}