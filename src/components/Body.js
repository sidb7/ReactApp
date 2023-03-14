import React, { useEffect, useState } from 'react'
import Carditems from './Carditems'
import "../App.css"




export default function Body(props) {
  // const [humidity1,setHumidity1] = useState(0);
  // const [temp1,setTemp1] = useState(0);
  // const [client1,setClient1] = useState(0);
  
  

const [users,setUser] = useState([])

{document.body.style.backgroundColor=((props.mode==="dark")?'#212529':'')}


  useEffect(() => {
    const url = "https://sid-b7dd-123-44-435.loca.lt/alltasks";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
       const json = await response.json();
        //val = json[0]['humidity'];
       //console.log( json);
       var danger = 0;
      setUser(json);
    //console.log(json[0]['humidity'])
        // setHumidity1(json[Object.keys(json).length - 1 ]['humidity']);
        // setTemp1(json[Object.keys(json).length - 1 ]['temperature']);
        // setClient1(json[Object.keys(json).length - 1 ]['client']);
       
      //   for(var alert in json) {
          
      //     if(json[alert]['alert']===1)
      //     {
      //       danger=1;
           
      //     }  
      //  }

      // props.setFloat(danger);

      
      {(json.find(use=>use.alert===1))?props.setFloat(1):props.setFloat(0)}
       // {(users.find(use=>use.alert===1))?props.setFloat(1):props.setFloat(0)}
      } catch (error) {
        console.log("error", error);
      }
    };

  
    setInterval(() => {
      fetchData();
   
    }, 1000);

   
}, []);
    const m =0;
  const Cardcomponent = users.map((user) => <div className='col-xsm-12 col-sm-6 col-md-4 col-lg-3 'key={user.id}  ><Carditems alert={user.alert}  mode={props.mode} humidity={user.humidity} temp={user.temperature} bpm={user.bpm} gas={user.gas} client ={user.client}/></div> );
  return (
    <>
   
<div  className={ `text-${(props.mode==="dark")?"light":"dark"} px-3  `}>
<div style={{height:"20px"}}></div>
<div className='mt-5 row d-flex '>
{Cardcomponent}</div>

 </div>
 {/* <Carditems alert={(humidity1>100||temp1>100)?"1":"0"} mode={props.mode} humidity={humidity1} temp={temp1} client ="1" /> */}


 

    </>
  )
}
