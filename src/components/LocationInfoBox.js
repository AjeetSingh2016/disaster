import React from 'react'

const LocationInfoBox = ({info}) => {
    console.log(info);
  return (
    <div className="w-64 h-40 z-20 sticky"  style={{
     top: "100px",
     right: "50px",
     position: 'fixed',
     backgroundColor: "white",
     borderRadius: "15px",
     padding: "5px",

    }}>
        <h2>Event Location Info</h2>
        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
        </ul>
    </div>
  )
}

export default LocationInfoBox