import React from 'react'
import QRCode from "react-qr-code";

const Code = () => (
    <div style={{width: '500px', height: '600px', backgroundColor:'white'}}>

    </div>
)

const QR = () => {
  return (
    <div style={{width: '100%', height: '100vh', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <QRCode value="https://www.youtube.com/watch?v=y9mRTos12Sw&list=PLfSUFKdFlttlrDw2756XyiZXrjdTOw9UH&index=3&ab_channel=LearnWithSamAndAsh "/>
    </div>
  )
}

export default QR