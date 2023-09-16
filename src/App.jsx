import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  return (
    <>
      <h1>Vite + React</h1>
      
      <Device name="Laptop"  price="55k"></Device>
      <Device name="Mobile" price = "19k" ></Device>
      <Device name="watch" price = "3k" ></Device>

      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score='55'></Student>
      <Student></Student>
      <Developer></Developer>
      
    </>
  )
}
function Device(props){
  // console.log(props);
  return <h2>This is device: {props.name} , price: {props.price}</h2>
}

function Person (){
  const age = 23;
  const money = 20000;
  const person = {name:'Imtiaz',age :23}
  return <h3>I am {person.name} with age : {age} & I have only {money} tk in my pocket</h3>
}


const {grade, score} ={grade:"7", score:"99"}
function Student ({grade=1,score=0}){
  console.log(grade ,score );
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'10px',
    border:'2px solid purple',
    borderRadius:'20px'

  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>coding:</p>
    </div>
  )
}

export default App
