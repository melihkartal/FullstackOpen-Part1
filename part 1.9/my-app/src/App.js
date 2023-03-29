import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.buttonName}</button>

const Display = (props) => {
  return (
    <>
      <p>{props.array[props.selected]} has {props.handleScoreboard[props.array[props.selected]]} votes</p>
    </>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [scoreBoard, setScoreBoard] = useState({});
  const [price, setPrice] = useState(100);

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const increment = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected + 1);
    } else {
      setSelected(0);
    }
  };

  const handleIncrement = () => {
    const newScoreBoard = { ...scoreBoard };
    newScoreBoard[anecdotes[selected]] = (newScoreBoard[anecdotes[selected]] || 0) + 1;
    setScoreBoard(newScoreBoard);
  };

  const changePrice = () =>  {
  
  let newPrice = 0;


  if (price === 100)
  {
    return newPrice;
  }
  
  
  else
  setPrice(price-25);

   

  
  }

  return (
    <>
      <Button handleClick={increment} buttonName="next anecdote" />
      <Button handleClick={handleIncrement} buttonName="vote" />
      <Display selected={selected} array={anecdotes} handleScoreboard={scoreBoard} />
      <button onClick={changePrice}>hello world</button>;
      <p>{price}</p>
     
    </>
  );
};


  
export default App;