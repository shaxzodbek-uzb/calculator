import React from 'react';
import HistoryLogo from '../asserts/images/history.svg'
export default function HistoryButton(props) {
    return(
        <div className="navigation-btn" onClick={props.onClick}>
            <img src={HistoryLogo} alt="History" width="24"/>
        </div>
    )
}
