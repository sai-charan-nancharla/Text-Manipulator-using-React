import React,{useState} from 'react'
import propTypes from 'prop-types'
import About from './About'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  // const {data}=props
    
    
  
  return (
   <> 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid mx-1" >
    <Link to="/"><img src='./android-chrome-512x512.png'  height="50" width="50"/></Link>
    <Link className="navbar-brand" to="/" >{props.title}</Link>


    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
      {/* <li><h4 style={{color : props.mode==='light'?'black':'white'}}> &nbsp;|&nbsp;</h4></li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.about}</Link>
        </li>
        


        
    </ul>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Contact us</a>
        </li> */}

        
      
      {/* <button className={link+clr} onClick={Changemode}>{btn}</button> */}

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li><h3 style={{color : props.mode==='light'?'black':'white'}}>  |&nbsp; </h3></li>
        <li>
        <div className={`form-check form-switch my-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==='light'?'Dark':'Light'} Mode</label>
        </div>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>

</>
  )
}

Navbar.propTypes={
    title: propTypes.string.isRequired,
    about : propTypes.string

}

Navbar.defaultProps={

    title: "Set Title",
    about : "Place about"

}