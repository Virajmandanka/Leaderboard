import React from 'react'
import { useState } from 'react'

const Adduser = () => {

const [name,setName]=useState('');


const handeluser=async()=>{
       if (!name)
        {
              return alert("Name is required");
        } 
        const res =await fetch("http://localhost:8080/api/adduser",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ name })
        })

        const data=await res.json();
           if(res.ok){

             alert(`User '${data.name}' added!`);
          setName('');

        }else{
             alert("Error adding user");
        }
}



  return (
    <div  className="add-user-container">
        <input type="text" placeholder='Enter you user name' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={ handeluser}>Adduser</button>
    </div>
  )
}

export default Adduser