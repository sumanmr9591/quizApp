import React, { useState, useRef } from "react";

const QuizBox = ( { quiz, next, previous, len, showAns, validateAns } ) => {
  const [selectedAnswer, setSelectedAnswer] = useState( null );
  const [defaultChecked, setDefaultChecked] = useState( false )
  const radioBtn = useRef();
  const gotoNext = () => {
    setDefaultChecked( false )
    next( quiz.id )
  }
  const gotoPrevious = () => {
    setDefaultChecked( false )
    previous( quiz.id )
  }
  const showCorrectAnswer = () => {
    showAns( quiz.id )
  }
  const validateMyAnswer = () => {
    if ( !selectedAnswer ) {
      alert( 'Please select an answer to validate' )
    } else {
      validateAns( quiz.id, selectedAnswer )
    }
  }
  const onSetAnswer = ( e ) => {
    setDefaultChecked( e.target.value )
    setSelectedAnswer( e.target.value )
  }
  return (
    <div className="quizBox">
      <div className="centerMe">
        <div className="question">{quiz.question}</div>
        <div className="answerContainer">
          {quiz.answers.map( ( text, index ) => (
            <div className="quizCombo">
              <input
                key={index}
                type="radio"
                name={quiz.question}
                value={text}
                onChange={onSetAnswer}
                ref={radioBtn}
                checked={defaultChecked === text}
              />
              <label>{text}</label>
            </div>
          ) )}
        </div>
      </div>

      <div className="optionPanel">
        <button onClick={gotoPrevious}
          className={`optionBtn ${ quiz.id === 0 ? "btnDisabled" : "" }`}>
          Previous</button>
        <button className="optionBtn" onClick={validateMyAnswer}>Submit Answer</button>
        <button onClick={gotoNext}
          className={`optionBtn ${ quiz.id === len - 1 ? "btnDisabled" : "" }`}
        >Next</button>
        <button className="optionBtn" onClick={showCorrectAnswer}>Show Answer</button>
      </div>
    </div>
  );
};

export default QuizBox;
