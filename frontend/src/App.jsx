import React, { useState } from 'react';
import Heading from './components/heading';
import Tagline from './components/Tagline';
import Instructions from './components/Instructions';
import ExamSelect from './components/ExamSelect';
import StartButton from './components/StartButton';
import ExamStarted from './components/ExamStarted';
import './App.css';

const App = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [examStarted, setExamStarted] = useState(false);

  const handleExamSelect = (e) => {
    setSelectedExam(e.target.value);
  };

  const startExam = () => {
    if (selectedExam) {
      setExamStarted(true);
    } else {
      alert('Please select an exam before starting!');
    }
  };

  return (
    <div className="container">
      <Heading />
      <Tagline />
      <Instructions />

      {!examStarted ? (
        <>
          <ExamSelect selectedExam={selectedExam} onExamSelect={handleExamSelect} />
          <StartButton onStart={startExam} />
        </>
      ) : (
        <ExamStarted selectedExam={selectedExam} />
      )}
    </div>
  );
};

export default App;
