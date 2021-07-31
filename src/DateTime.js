import React, { useState, useEffect } from 'react'
const DateTime=()=>{
    const[time,setTime]=useState(new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}));
    const[date,setDate]=useState(new Date().toLocaleDateString('en-IN',{month:'short',year:'numeric',day:'numeric',weekday:'long'}));
    setInterval(() => {
        var  date=new Date().toLocaleDateString('en-IN',{month:'short',year:'numeric',day:'numeric',weekday:'long'})
        var  time=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true})
        setTime(time);
        setDate(date);
      }, 1000);
    return(
   <>

<span class="date">{date}</span><br></br>
      <span class="time">{time}</span>

   </>


    )
}
export default DateTime;