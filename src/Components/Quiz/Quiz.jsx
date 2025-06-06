import React from 'react'
import './Quiz.css';
import { data } from '../../assets/data';
import { useState } from 'react';
import { useRef } from 'react';

const Quiz = () => {
  let [index,setindex]= useState(0);
  let [question, setquestion]= useState(data[index])
  let [lock,setlock]= useState(false);
  let [score,setscore]= useState(0);
  let [result,setresult]= useState(false);
  const [isToggled, setIsToggled] = useState(false); // Toggle switch
  const [darkMode, setDarkMode] = useState(false);  

  let option1= useRef(null);
  let option2= useRef(null);
  let option3= useRef(null);
  let option4= useRef(null);

  let option = [option1, option2, option3, option4];


  const checkAns= (e,ans)=>{
    if (lock===false) {
      if(question.ans===ans){
      e.target.classList.add('correct');
      setlock(true);
      setscore(prev=>prev+1);
    }else{
      e.target.classList.add('wrong');
      setlock(true);
      option[question.ans-1].current.classList.add('correct');
    }
    }
    
  }

  const next= ()=>{
      if(lock===true){
        if(index===data.length-1){
          setresult(true);
          return 0;
        }
        setindex(++index);
        setquestion(data[index]);
        setlock(false);
        option.map((option)=>{
          option.current.classList.remove('correct');
          option.current.classList.remove('wrong');
          return null;
        })
      }
  }

  const reset=()=>{
    setindex(0);
    setquestion(data[0]);
    setscore(0);
    setlock(false);
    setresult(false);
  }


  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  


return (
  <div className={`container ${darkMode ? 'dark' : ''}`}>
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button onClick={toggleDarkMode} style={{ marginLeft: '20px' }}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>

    <h1>QUIZ APP</h1>
    <hr />

    {!result ? (
      <>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
          <li ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
          <li ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
          <li ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index">
          {index + 1} of {data.length} Question
        </div>
      </>
    ) : (
      <>
        <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button>
      </>
    )}
  </div>
);
}


export default Quiz