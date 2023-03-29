   //Header takes care of rendering the name of the course
  
  //Total renders the total number of exercises 
  
  
  const Header = (props) =>{

    return(
      <div>
        <p>The name of the course is{props.course}</p>
      </div>
    )
  }
  
  //Content renders the parts and their number of exercises
  const Content = (props) => {


    return(
      <div>
        <p>
          The name of the part is {props.part1} 
          and number of exercises {props.exercises1}
        </p>
        <p>
          The name of the part is {props.part2} 
          and number of exercises {props.exercises2}
        </p>

        <p>
          The name of the part is {props.part3} 
          and number of exercises {props.exercises3}
        </p>

      </div>
    )

  }


  const Total = (props) => {


    return (
     <div>
       <p>The total number of exercises is {props.total}</p>

     </div>

    )
 }


 

const App = () => {
  const course = ' Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1}
      part2 = {part2}
      part3 = {part3}
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}
      
      />
      <Total total = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App