import React, { useEffect, useState } from 'react';
import "./ModalOne.css"
const ModalA = ({closeModalA}) => {
    const [counters,setCounters] =useState([]);
    useEffect(()=>{
        fetch("https://contact.mediusware.com/api/contacts")
        .then(response => response.json())
        .then(data=>console.log(data))

    },[])
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                   <h1>Modal A All Contacts</h1>
                </div>
                <div className="body">
                        <p>This is modal A & Showing All Contacts</p>
                    </div>
                    <div className="footer">
                        <button className='modalButtonA'>All Contacts</button>
                        <button className='modalButtonB'>US Contacts</button>
                        <button onClick={()=>closeModalA(false)} className='modalButtonC'>Close</button>
                        </div>
                    <div className="footers">
                       only even
                       <input
            type="checkbox"
            id="evenCheckboxA"
          />
                        </div>
            </div>
        </div>
    );
};

export default ModalA;