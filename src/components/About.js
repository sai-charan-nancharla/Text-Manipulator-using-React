import React,{useState} from 'react'
import Navbar from './Navbar'


export default function About(props) {

  // const [btn,setBtn]=useState('Dark Mode')
  //   const [clr,setClr]=useState('dark')
  //   const[styles,setStyles]=useState({
  //     color:"white",
  //     backgroundColor :"black"
  //   })
  let styles={}
    const link="btn btn-"
    if(props.mode==='dark'){
      // setBtn("Light Mode")
      // setClr("light")
      styles={
        color:"white",
        backgroundColor :"black"
      }
      }
      else{

      // setBtn("Dark Mode")
      // setClr("dark")
      styles={
        color:"black",
        backgroundColor :"white"
      }

      }
    // let flag=true
    // const Changemode=()=>{
        
        
        

    // }
    
  return (
    <>
    <br/>
    <h2 className='mx-3'style={{color :props.mode==='light'?'#090a0a':'#fafbfb'}}>About Us</h2><br/>
    <div className="accordion mx-3" id="accordionExample">
  <div className="accordion-item mx-3" style={styles} >
    <h2 className="accordion-header" style={styles}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={styles}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3" style={styles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={styles}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body mx-3" style={styles}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3" style={styles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={styles}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body mx-3" style={styles}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button className={link+clr+" mx-5"} onClick={Changemode}>{btn}</button> */}
    </>
  );
}
