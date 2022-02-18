import React, { useEffect, useState } from 'react';


export default function Oprators() {
  const [count, setCount] = useState(0);
  const calculation = expensiveCalculation(count);
  const [Arr, setArr] = useState(0);
  const [todos, setTodos] = useState([]);
  const week = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];


  // const list = [ "Sunday"];

  //      const addTodo = () => {
  //       setTodos((t) => [...t, list]);
  //   }



  useEffect(() => {
    if (Arr < week.length) {
      todos.push(week[Arr])
    }
  }, [Arr]);





  return (
    <div>
      {/* <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div> */}
      <p>{
        todos.map((i)=>{
          return <>
          { i }
          <br />
          </>
        })
      }
      </p>
      <button type='button' onClick={() => { setArr(Arr + 1) }}>Week</button>

      <hr />
      <div className='d-flex'>
        <p className='pl-5'> Count :{calculation}</p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  const i = '';
  for (let i = 0; i < 5; i++) {
    num += 1;
  }
  return num;
};


