
import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {
  return (
    <div>
        <p>{props.course} {props.exercise}</p>

    </div>
  )
}

const Total = (props) => {
  
    
  
  return (
    <p>The total number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const total = parts.reduce((acc,curr)=>{
    return acc + curr.exercises;
  },0);
   
   
  return (
    <div>
      <Header course = {course}/>
      <Content course = {parts[0].name} exercise= {parts[0].exercises}/>
      <Content course = {parts[1].name} exercise= {parts[1].exercises}/>
      <Content course = {parts[2].name} exercise= {parts[2].exercises}/>
      <Total total = {total}/>
      
    
    </div>
  )
}

export default App;
