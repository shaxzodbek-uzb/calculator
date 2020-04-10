import React, {useState} from 'react';
import HistoryPanel from './HistoryPanel';
import HistoryButton from './HistoryButton';
import MenuButton from './MenuButton';

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
            { historyPanel.show?<HistoryPanel onClick={hideHistory} />: null}  
        </div>
    );
}