import { useState } from 'react'


const Message = (props) =>{

  return (
    <h1>{props.message}</h1>
    )
}
const Button = (props) => {

  return(
    <button onClick = {props.handleClick}>{props.message}</button>
  )
}


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all,setAll] =  useState(0);
  const [average, setAverage] = useState(0);
  
  const calculatePositive = (good,neutral,bad) => {
    const total = good+neutral+bad;
    if(total ===0)
    return 0;

    return (good/total) * 100;
  }



  const handleClickGood = () => {
    setGood(good+1);
    setAll(all+1);
    setAverage(all/3);
  }
  const handleClickNeutral= () => {
    setNeutral(neutral+1);
    setAll(all+1);
    setAverage(all/3);
   
  }
  const handleClickBad = () => {
    setBad(bad+1);
    setAll(all+1);
    setAverage(all/3);
    
  }



  return (
    <>
      <Message message = "give feedback" />
      <Button handleClick = {handleClickGood} message = "good"/>
      <Button handleClick = {handleClickNeutral} message = "neutral" />
      <Button handleClick = {handleClickBad} message = "bad" />
      <Message message = "statistics"/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {calculatePositive(good,neutral,bad)}%</p>
     

  
    </>
    


  );

}
export default App;
