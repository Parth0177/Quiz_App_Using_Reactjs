import React from 'react'
import './Quiz.css';
import { data } from '../../assets/data';
import { useState } from 'react';

const Quiz = () => {
  let [index,setindex]= useState(1);
  let [question, setquestion]= useState(data[index])
  let [lock,setlock]= useState(false);
  let option1= useRef(null);
  let option2= useRef(null);
  let option3= useRef(null);
  let option4= useRef(null);


  const checkAns= (e,ans)=>{
    if (lock===false) {
      if(question.ans===ans){
      e.target.classList.add('correct');
      setlock(true);
    }else{
      e.target.classList.add('wrong')
      setlock(true);
    }
    }
    
  }


  return (
    <div className="container">
      <h1>QUIZ APP</h1>
      <hr />
      <h2>{index+1}. {question.question}</h2>
      <ul>
        <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">
        1 of 5 Question
      </div>
    </div>
  )
}

export default Quiz