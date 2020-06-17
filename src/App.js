import React, { useState, useEffect } from 'react';
import './App.css';
import qusetionAndAnswers from './services/config';
import QuizBox from './components/QuizBox';

function App () {
  const [questions, setQuestions] = useState( qusetionAndAnswers );
  const validateAnswer = ( id, ans ) => {
    let correctAnswer = questions[id].correct;
    if ( correctAnswer === ans ) {
      alert( 'Congrats! Your answer is correct' )
    } else {
      alert( 'Wrong Answer! Try again' )
    }
  }
  const handelNext = ( currIndex ) => {
    const index = currIndex + 1;
    setCurrentQuestion( questions[index] )
  }
  const handelPrevious = ( currIndex ) => {
    const index = currIndex - 1;
    setCurrentQuestion( questions[index] )
  }
  const showAnswer = ( current ) => {
    let ans = questions[current].correct;
    alert( `Correct answer is ${ ans }` )
  }
  const [currentQuestion, setCurrentQuestion] = useState( qusetionAndAnswers[0] );

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Test your GK!</h2>
      <div>
        <QuizBox quiz={currentQuestion}
          next={handelNext}
          previous={handelPrevious}
          len={questions.length}
          showAns={showAnswer}
          validateAns={validateAnswer}
        />

      </div>
    </div>
  );
}

export default App;
