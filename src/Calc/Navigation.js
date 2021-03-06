import React, {useState} from 'react';
import HistoryPanel from './HistoryPanel';
import HistoryButton from './HistoryButton';
import MenuButton from './MenuButton';
import Fade from "./Fade";

export default function Navigation() {
    let [historyPanel, setStateHistoryPanel] = useState({show: false})

    function showHistory(){
        setStateHistoryPanel({ ...historyPanel, show:true});
    }
    function hideHistory(){
        setStateHistoryPanel({ ...historyPanel, show:false});
    }
    return (
        <div>
            <div className="navigation">
                <MenuButton />
                <HistoryButton onClick={showHistory} />
            </div>
            <Fade show={historyPanel.show}>
                <HistoryPanel onClick={hideHistory} />
            </Fade>
        </div>
    );
}