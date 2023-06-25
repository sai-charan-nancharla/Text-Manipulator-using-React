import React from 'react'
import { useState } from 'react'



export default function Textfor(props) {

    const [textval,setTextval]=useState("")

    const HandleChange=(event)=>{
        let val=event.target.value
        setTextval(val)
    }
    const HandleUpperCase=()=>{
        let val=textval.toUpperCase();
        setTextval(val)
        props.Alertshow("Converted to Upper case","Success")
    }
    const HandleLowerCase=()=>{
        let val=textval.toLowerCase();
        setTextval(val)
        props.Alertshow("Converted to Lower case","Success")
    }
    const ExtraSpace=()=>{
        let vals=textval.split(/[ ]+/)
        setTextval(vals.join(" "))
        props.Alertshow("Extra spaces are removed","Success")



    }
    const HandleCopy=()=>{
        let vals=document.getElementById("mybox").value;
        // vals.select()
        navigator.clipboard.writeText(vals);
        props.Alertshow("Copied to Clip board.","Success")
    }

    // const capitalizeWords = (textval) => {

    //     let c= textval.replace(/\b\w/g, (char) => char.toUpperCase());
    //     setTextval(c)
    // }

    const HandleClear=()=>{
        let val=''
        setTextval(val)
        props.Alertshow("Cleared !","Success")
    }

  return (
<>  
    <div className="container">
        <br></br>
         <h2 style={{color : props.mode==='light'?'#090a0a':'#fafbfb'}}>{props.heading}</h2>  
         <br/> 
        <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={textval} onChange={HandleChange} placeholder='Enter your text' style={{color : props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#434040' }}></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={HandleUpperCase}>Convert To Upper Case</button>
        {/* <pre> </pre> */}
        <button className="btn btn-primary mx-1" onClick={HandleLowerCase}>Convert To Lower Case</button>
        
        <button className="btn btn-primary mx-1" >Captialize</button>

        <button className="btn btn-primary mx-1" onClick={ExtraSpace}>Remove Extra Space</button>

        <button className="btn btn-primary mx-1" onClick={HandleClear}>Clear</button>

        <button className="btn btn-primary mx-1" onClick={HandleCopy}>Copy</button>
        <div className="container my-2" style={{color : props.mode==='light'?'black':'#fafbfb'}}>
            <h2>Text Summary</h2>
            <p>{(textval.split(/[ ]+/)).length} words ,{textval.length} characters.</p>
            <p>Read in {0.008 * textval.split('').length} minutes.</p>
        </div>
    </div>
</>  
  )
}
