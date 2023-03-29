import { useState } from 'react'

const Message = (props) => {

  return (
    <h1>{props.message}</h1>
  )

} 

const Button = (props) => {

  return (

    <>
      <button onClick = {props.handleClick}>{props.message}</button>
      
    </>

  )
}




const App = () => {

  const [good, setGood] = useState(0);
  const[neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
  <>
    <Message message = "give feedback" />
    <Button handleClick = {()=> {setGood(good+1)}} message = "good"/>
    <Button handleClick = {()=> {setNeutral(neutral+1)}} message = "neutral" />
    <Button handleClick = {()=> {setBad(bad+1)}} message = "bad"/>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>    
    
  
  </>

  );

}



export default App;
