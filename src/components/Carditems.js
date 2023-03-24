//import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsHeartPulse } from 'react-icons/bs';
import { AiOutlineWarning } from 'react-icons/ai';
import { SiOxygen} from 'react-icons/si';
import {IoPersonCircle} from 'react-icons/io5';
import {VscFlame} from 'react-icons/vsc';
import { WiHumidity } from 'react-icons/wi';
import BatteryGauge from 'react-battery-gauge'
var b1 =0;

export default function Carditems(props) {
 { b1 =  (props.bpm>0)?parseInt(props.bpm) + 17:0;}

  return (
    <>
      
    <div className=' mt-4 rounded-4 ' style={{border:(props.alert===1||props.gas>50)?"solid red 5px":"solid orange 5px",backgroundColor:(props.mode==="dark")?"":"rgba(0, 0, 0, 0.600)"}} >
    <div className='row px-5  ' style={{height:"40px"} }><div className='col-1 '>{(props.alert===1||props.gas>50)?<AiOutlineWarning color='red' size={40}/>:" "}</div><div className='d-flex ps-3 justify-content-center  col-10'><div className= {`text-center w-75 fs-4 fw-semibold mb-1 text-white `} style={{backgroundColor:"#454441",borderRadius:"0px 0px 35px 35px"}} ><IoPersonCircle className='mb-1' size={30}/> {props.client}</div></div>
    
    {/* <div className='col-1'><BatteryGauge value={60} size={45} customization={{
      readingText: {
    lightContrastColor: '#fff',
    darkContrastColor: '#fff',
    lowBatteryColor: 'red',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 30,
    showPercentage: true
  },
  batteryBody: {
    strokeWidth: 5,
    cornerRadius: 6,
    fill: 'none',
    strokeColor: '#fff'
  },
  batteryCap: {
    fill: 'none',
    strokeWidth: 5,
    strokeColor: '#fff',
    cornerRadius: 2,
    capToBodyRatio: 0.4
  },
  batteryMeter: {
    fill: 'green',
    lowBatteryValue: 15,
    lowBatteryFill: 'red',
    outerGap: 1,
    noOfCells: 1, // more than 1, will create cell battery
    interCellsGap: 1
  },
  
  }}/></div> */}
  
    </div>
      <div className='px-4'>
    
       
  

       <div className='row justify-content-center ms-0 pt-3 mt-2 w-100 mb-2 border border-1 border-warning rounded-5'>
       <div className='col-4 h-100  '  style={{ width: 90, height: 90}}>
  <CircularProgressbar className='fw-bold  ' value={props.bpm} maxValue={200} strokeWidth={15} text={props.bpm}  styles={buildStyles({
   pathColor:  (props.bpm>100)?"red":"orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: (props.bpm>100)?"red":"orange",
    rotation: 0.5})}/>
     <div className='d-flex  justify-content-center mb-2 mt-4'><BsHeartPulse color='white'   size={35}/></div>
    </div>

    <div className='col-4 mx-3  h-100'  style={{ width: 90, height: 90}}>
  <CircularProgressbar className='fw-bold  ' value={props.humidity} maxValue={200} strokeWidth={15} text={props.humidity}  styles={buildStyles({
   pathColor: (props.humidity>100)?"red":"orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: (props.humidity>100)?"red":"orange",
    rotation: 0.5})}/>
    <div className=' d-flex justify-content-center mt-3 mb-1 '><WiHumidity color='white'    size={50}/></div>
    </div>

    <div className='col-4 h-100 '  style={{ width: 90, height: 90}}>
  <CircularProgressbar className='fw-bold ' value={props.temp} maxValue={200} strokeWidth={15} text={props.temp}  styles={buildStyles({
   pathColor:  (props.temp>100)?"red":"orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: (props.temp>100)?"red":"orange",
    rotation: 0.5})}/>
    <div className=' w-100 d-flex ps-2 justify-content-center mt-4 mb-2'><FaTemperatureHigh color='white'   size={35}/></div>
    </div>
       </div>

          {/* PROGRESS BAR */}

   <div className='row  mb-3 text-center'>
    <div className='col-6 px-3'><h6 className='d-flex fw-bold' >GAS:  { <div className='ms-1 fs-5 fw-bold 'style={{color:'orange'}}> {props.gas}%</div>} </h6>
    <div className="progress" role="progressbar" style={{height:"30px"}}  aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated "  style={{width:`${props.gas}%`,backgroundColor:(props.gas>50)?"red":"orange"}}><VscFlame size={30} color='black'/></div></div></div>

    <div className=' col-6 px-3'><h6 className='d-flex fw-bold' >OXIMETER:  { <div className='ms-1 fs-5 fw-bold 'style={{color:'orange'}}> {  b1 }%</div>}  </h6>
    <div className="progress" style={{height:"30px"}} role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="200">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:`${b1}%`,backgroundColor:(props.bpm>100)?"red":"orange"}}><SiOxygen className='ms-2' size={20} color='black'/></div>
</div></div>
   </div></div>

</div>

    </>
  )
}









     {/* <div className='fs-4 mt-5 mb-5'>
        <div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold ' >BPM:           </div>
       <div className='mb-5 ' style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5 ' value={props.bpm} maxValue={200} strokeWidth={15} text={props.bpm}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>  

<div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold' >Humidity:           </div>
       <div className='mb-5' style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5' value={props.humidity} maxValue={200} strokeWidth={15} text={props.humidity}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>
<div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold' >Temperature:           </div>
       <div  style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5' value={props.temp} maxValue={200} strokeWidth={15} text={props.temp}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>

       </div> */}