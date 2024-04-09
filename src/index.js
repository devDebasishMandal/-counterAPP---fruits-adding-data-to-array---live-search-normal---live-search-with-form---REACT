// entry file of React
import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import App from './App';
// // function 
// function hello(){
//     return "Namaste React";
//     //function return Data type
// }

// // functional-component

// function Hello(){
//     return <h1>Namaste React</h1>
// }


// calling : function - hello();
            //  component- <Hello/>

// const Hello=()=>{

//     let x=2304;
//     return <h1 className='hello'>Namaste React {x}</h1> 

// }

ReactDOM.render(<App/>,document.getElementById("root"));