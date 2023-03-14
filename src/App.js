import React, { useState } from 'react'
import Body from './components/Body'
import Graph from './components/Graph';
import Navbar from './components/Navbar'

export default function App() {
  const[mode,setMode] = useState("dark");
  const[float,setFloat] = useState(0);
  return (
    <>

    <Navbar mode = {mode} setMode={setMode} float={float}/>
    <Body mode = {mode} setFloat={setFloat} float={float}/>
    
   
   
    </>
  )
}
