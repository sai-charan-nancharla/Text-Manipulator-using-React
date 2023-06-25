// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfor from './components/Textfor';
import About from './components/About';
import './practice.css'
import React, { useState } from 'react'
// let name="charan";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";



function Project1(){

  const [mode,setMode]=useState('light')

  const [alert,setAlert]=useState(null)


  const Alertshow=(msg,type)=>{

    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>
      setAlert(null),1500
    )

  }
  document.title="Text Manipulator";

  const toggleMode=()=>{

  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black';
    Alertshow("Dark Mode Enabled")
    // document.title="Text Manipulator-Dark";

  }else{

    setMode('light')
    document.body.style.backgroundColor='#acaaaa';
    Alertshow("Light Mode Enabled")
    // document.title="Text Manipulator-Light";
    // setInterval(()=>{
    //     document.title="refresh";
    // },1500)

    // setInterval(()=>{
    //   document.title="Update";
    // },2000)


  }
}
    return(
        <>

      {/* <Navbar /> */}
      
      {/* <div className='container'>
          <Textfor heading='Analyze your text' mode={mode} alert={alert} Alertshow={Alertshow}/>
      </div> */}
      {/* <About/> */}
      <Router>
      <Navbar title="TeXt MaNiPuLaToR" about="About us!" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
      <div className='container'>
        <Routes>
        
          
            
          
          <Route exact path="/" element={<Textfor heading='Analyze your text' mode={mode} alert={alert} Alertshow={Alertshow}/>} />
          <Route exact path="/about" element={<About mode={mode}/>}/>
            
        
        </Routes>
        </div>
      </Router>
        </>
    );
}

export default Project1;
