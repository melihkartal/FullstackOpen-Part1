
import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {
  return (
    <div>
        <p>{props.part} {props.exercise}</p>

    </div>
  )
}

const Total = (props) => {
  const total = props.exercise1 + props.exercise2 + props.exericse3;
  return (
    <p>The total number of exercises:</p>
    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part = {part1.name} exercise = {part1.exercises}/>
      <Content part = {part2.name} exercise = {part2.exercises}/>
      <Content part = {part3.name} exercise = {part3.exercises}/>
      <Total exercise1 = {part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises}/>


    </div>
  )
}

export default App;
