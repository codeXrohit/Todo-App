import React, { useState } from 'react'

function TodoApp() {
    const [schedule,setSchedule]=useState("")
    const [list,setlist]=useState([])
    const [showClearButton, setShowClearButton] = useState(false);

    function handlelist(){
        if(schedule === "") {
            return;
        }
        console.log(schedule);
        setlist((list)=>{
            const updatelist=([...list,schedule])
            console.log(updatelist);
            return updatelist
        })
        setSchedule("")
        setShowClearButton(true);
        
    }


    function handleRemove(i) {
        const RemoveItem = list.filter((ele, id)=>{
            return id!=i
        })
        setlist(RemoveItem)
    }

    function handleRemove(i){
        const RemoveItem = list.filter((ele, id)=>{
            return id!=i
        })
        setlist(RemoveItem)
    }
  function handleClearAll(){
    setlist([]);
    setShowClearButton(false);
  }
 

  return (
    <div id='maindiv' style={{ fontSize: '14px' }}>
        <input type='text' placeholder='Add Tittle' id="inputbox"  value={schedule} onChange={(e)=>{setSchedule(e.target.value)}} />
        <button className="button" type='submit' onClick={handlelist}>Submit</button>
        <h3 style={{ fontSize: '24px' }}>Here Is Your Today's Schedule:-</h3>
        {showClearButton && <button className='div' onClick={handleClearAll}>All Clear</button>}
        {
            list!=[] && list.map((data,i)=>{
                
                return(
                    <>
                          <p className='mid' key={i}>
                            <div className='data'>{data}</div>
                            <div><button style={{position: 'fixed', right: '9rem',marginTop:'-17px'}} className='div' onClick={()=>handleRemove(i)}>Remove</button></div>
                          </p>
                     
                    </>
                )
            })
        }

    </div>
  )
}

export default TodoApp


