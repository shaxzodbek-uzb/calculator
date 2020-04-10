import React, { useRef, useEffect, useState } from 'react';
function useOutsideAlerter(ref, closeHistory) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            closeHistory();
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
export default function HistoryPanel(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,props.onClick);
    let [items, setItems] = useState([]);
    let gettingHistory = async () => {
        const res = await fetch('http://localhost:3001/calculations?_order=asc');
        const data = await res.json();
        console.log(data);
        setItems(data);
    }
    useEffect(() => {
        gettingHistory();
    }, []);
    return (
        <div className="history-panel">
            <div className="content" ref={wrapperRef}>
                {items.length == 0 ? <div className="not-found">There is no history yet!</div>:null}
                <div className="history-list">
                    {   
                        items.map((item, index) => {
                            return (
                                <div className="history-item">
                                    <div className="equation">{item.equation}</div>
                                    <div className="result">{item.result}</div>
                                </div>
                            ) 
                        })
                    }
                </div>
            </div>
        </div>
    )
}