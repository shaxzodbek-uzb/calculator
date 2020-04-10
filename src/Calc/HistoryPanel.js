import React, { useRef, useEffect } from 'react';
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
    return (
        <div className="history-panel">
            <div className="content" ref={wrapperRef}>
                <div className="not-found">There is no history yet!</div>
                <div className="history-list">
                    <div className="history-item">
                        <div className="equation">9*8-2=</div>
                        <div className="result">70</div>
                    </div>
                    <div className="history-item">
                        <div className="equation">9*8-2=</div>
                        <div className="result">70</div>
                    </div>
                    <div className="history-item">
                        <div className="equation">9*8-2=</div>
                        <div className="result">70</div>
                    </div>
                    <div className="history-item">
                        <div className="equation">9*8-2=</div>
                        <div className="result">70</div>
                    </div>
                    <div className="history-item">
                        <div className="equation">9*8-2=</div>
                        <div className="result">70</div>
                    </div>
                </div>
            </div>
        </div>
    )
}