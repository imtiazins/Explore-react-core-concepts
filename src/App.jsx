import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}


function Person (){
  const age = 23;
  const money = 20000;
  const person = {name:'Imtiaz',age :23}
  return <h3>I am {person.name} with age : {age} & I have only {money} tk in my pocket</h3>
}

function Student (){
  return (
  <div>
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>age:</p>
  </div>
  )
}

export default App
