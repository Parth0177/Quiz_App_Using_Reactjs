import React from 'react'
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="container">
      <h1>QUIZ APP</h1>
      <hr />
      <h2>Which device is required for the internet connection? </h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>Switch</li>
        <li>LAN Cable</li>
      </ul>
      <button>Next</button>
      <div className="index">
        1 of 10 Question
      </div>
    </div>
  )
}

export default Quiz