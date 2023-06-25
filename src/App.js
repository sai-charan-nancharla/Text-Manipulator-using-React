import logo from './logo.svg';
import './App.css';
import {useState} from 'react';




const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
let Content;
  let islogged=true;
  if(islogged){
  Content=<Admin />;
  }
  else{
  Content=<Loginform />;
  }

function Admin(){
  return(
    <center><h1>Admin Login</h1>
            <br></br>
            <input  type="text" placeholder="User id"></input><br></br>
            <input  type="password" placeholder="password"></input><br></br>
            <input type="submit"></input>
            </center>
  );
}
function Loginform(){
  return(
    <center><h1> Login</h1>
            <br></br>
            <input  type="text" placeholder="login id"></input><br></br>
            <input  type="password" placeholder="password"></input><br></br>
            <input type="submit"></input>
            </center>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with CHARAN
        </a>
      </header>
    </div>
  );
}


function Button(){

  const [count,setCount]=useState(0);
  function alerting(){
    alert("You clicked me!"+(count+1)+ "times");
    // let res=confirm("Are you sure want to exit?");
    // console.log(res);
    setCount(count+1);
  }
  
    
  
  return(
    // <div className="Button">
    <button onClick={alerting}>Clicked Me! {count} times</button>
  );
}

export default function Main(){
  
   let products=[{title:'cabbage',isfruit:false,id:1},{title:'apple',isfruit:true,id:2},{title:'Cucumber',isfruit:false,id:3}];

    let items=products.map(product=>
      <li key={product.id} style={{
        color : product.isfruit?'magenta':'darkgreen'
      }}>{product.title}</li>
      
      );
      
    let cars=['bmw','benz','WW','kia'];
    let car=cars.map(temp=>
      
      <li>{temp}</li>
      
      );
  return(


    // Rendering Lists
    
   
  
  <>
  <h1>{user.name}</h1>
  <img src={user.imageUrl} style={{width : user.imageSize,height : user.imageSize}}/>
  <Button />
  <Button />
  {/* <App /> */}
  

  {/* {Content }     */}



{/* Terinary operator  */}

  {/* {islogged ? (
    <Admin />
  ) : (
    <Loginform />
  )} */}

{/* ANother WAY */}
  {islogged&& <Admin />}
  <ul>{items}</ul>
  <ul>{car}</ul>
  </>
  );
}
