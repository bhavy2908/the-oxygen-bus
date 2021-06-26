import React, { Component, useState } from 'react';


const LeftDiv = ({ num1, num3, num6, handleInc1, handleDec1, handleDec3, handleInc3, results }) => {
    // const [num1, setNum1] = useState(30)
    const [num2, setNum2] = useState(0)
    //const [num3, setNum3] = useState(15)
    const [num4, setNum4] = useState(0)
    const [num5, setNum5] = useState(0)


    // const in1 = () => {
    //     setNum1(num1 + 1)
    // }
    const in2 = () => {
        setNum2(num2 + 1)
    };

    const in4 = () => {
        setNum4(num4 + 1)
    };
    const in5 = () => {
        setNum5(num5 + 1)
    };
    // const de1 = () => {
    //     setNum1(num1 - 1)
    // }
    const de2 = () => {
        setNum2(num2 - 1)
    };

    const de4 = () => {
        setNum4(num4 - 1)
    };
    const de5 = () => {
        setNum5(num5 - 1)
    };
    return (

        <div style={{ float: 'left', width: '20%', height: '90vh', backgroundColor: '#dddddd', marginTop: '5px', marginLeft: 0 }}>
            <div className="value-box">No. of Hospitals to be Covered
                <div className="value">
                    <a href="#"><img src="minus.png" onClick={handleDec1} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num1}
                    <a href="#"><img src="plus.png" onClick={handleInc1} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
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
                    <a href="#"><img src="minus.png" onClick={handleDec3} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginRight: '70px' }} /></a>
                    {num3}
                    <a href="#"><img src="plus.png" onClick={handleInc3} alt="" style={{ right: '5px', bottom: '5px', width: '40px', marginLeft: '70px' }} /></a>
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
            <div style={{ marginBottom: '50px', marginTop: '50px', textAlign: 'center' }}><a onClick={results} href="#" className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder' }}>Launch The Oxygen Bus!</a></div>
            <div className="value-box">
                <div style={{ paddingTop: '7px' }}>
                    <img style={{ marginLeft: '-44px' }} src="http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png"></img> Starting Point <img style={{ marginLeft: '15px' }} src="http://maps.google.com/mapfiles/ms/micons/orange-dot.png"></img> End Point
                </div>
                <div style={{ paddingTop: '13px' }}>
                    <img src="http://maps.google.com/mapfiles/ms/micons/red-dot.png"></img> Hospitals <img style={{ marginLeft: '50px' }} src="http://maps.google.com/mapfiles/ms/micons/blue-dot.png"></img> Oxygen Depots
                </div>
            </div>
        </div>
    )

};
export default LeftDiv;