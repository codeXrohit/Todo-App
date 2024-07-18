import React, { useState } from 'react';

function TodoApp() {
    const [schedule, setSchedule] = useState("");
    const [list, setlist] = useState([]);
    const [showClearButton, setShowClearButton] = useState(false);

    function handlelist() {
        if (schedule === "") {
            return;
        }
        console.log(schedule);
        setlist((list) => {
            const updatelist = ([...list, schedule]);
            console.log(updatelist);
            return updatelist;
        });
        setSchedule("");
        setShowClearButton(true);
    }

    function handleRemove(i) {
        const RemoveItem = list.filter((ele, id) => {
            return id != i;
        });
        setlist(RemoveItem);
    }

    function handleClearAll() {
        setlist([]);
        setShowClearButton(false);
    }

    return (
        <div id='maindiv' style={{ fontSize: '14px' }}>
            <div className='scroll'>
                <div className="input-container">
                    <input className='tittle' type='text' placeholder='Add Title' id="inputbox" value={schedule} onChange={(e) => { setSchedule(e.target.value) }} />
                    <button className="button" type='submit' onClick={handlelist}>Submit</button>
                </div>
                <h3 style={{ fontSize: '24px' }}>Here Is Your Today's Schedule:-</h3>
            </div>
            <hr></hr>
            <div className='scroll-div'>
                {showClearButton && <button className='div1' onClick={handleClearAll}>All Clear</button>}
                {
                    list != [] && list.map((data, i) => {
                        return (
                            <div key={i}>
                                <p className='mid'>
                                    <div className='data'>{data}</div>
                                    <div><button style={{ position: 'fixed',marginRight: '25px', marginTop: '-17px' }} className='div' onClick={() => handleRemove(i)}>Remove</button></div>
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TodoApp;
