import React, { Component, useState } from 'react';


function LeftDiv() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [num4, setNum4] = useState(0)
    const [num5, setNum5] = useState(0)
    const [num6, setNum6] = useState(10)

    const in1 = () => {
        setNum1(num1 + 1)
    }
    const in2 = () => {
        setNum2(num2 + 1)
    }
    const in3 = () => {
        setNum3(num3 + 1)
    }
    const in4 = () => {
        setNum4(num4 + 1)
    }
    const in5 = () => {
        setNum5(num5 + 1)
    }
    const de1 = () => {
        setNum1(num1 - 1)
    }
    const de2 = () => {
        setNum2(num2 - 1)
    }
    const de3 = () => {
        setNum3(num3 - 1)
    }
    const de4 = () => {
        setNum4(num4 - 1)
    }
    const de5 = () => {
        setNum5(num5 - 1)
    }
    return (

        <div style={{ float: 'left', width: '20%', height: '90vh', backgroundColor: '#dddddd', marginTop: '5px', marginLeft: 0 }}>
            <div className="value-box">No. of Hospitals to be Covered
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={de1} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num1}
                    <a href="#"><img src="plus.png" onClick={in1} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
                </div>
            </div>
            <div className="value-box">Maximum Cylinders Required per Hospital
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={de2} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num2}
                    <a href="#"><img src="plus.png" onClick={in2} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
                </div>
            </div>
            <div className="value-box">No. of Oxygen Refilling Stations
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={de3} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num3}
                    <a href="#"><img src="plus.png" onClick={in3} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
                </div>
            </div>
            <div className="value-box">Maximum Cylinders Available per Station
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={de4} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num4}
                    <a href="#"><img src="plus.png" onClick={in4} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
                </div>
            </div>
            <div className="value-box">Capacity of The Oxygen Bus
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={de5} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num5}
                    <a href="#"><img src="plus.png" onClick={in5} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
                </div>
            </div>
            <div style={{ marginBottom: 'auto', marginTop: '80px', textAlign: 'center' }}><a href="#" className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder' }}> Randomize</a></div>
            <div style={{ marginBottom: 'auto', marginTop: '10px', textAlign: 'center' }}><a href="#" className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder' }}>Launch The Oxygen Bus!</a></div>
        </div>
    )

};
export default LeftDiv;