import React from 'react';

const StartButton = ({ onStart }) => {
  return (
    <button className="start-btn" onClick={onStart}>
      Start Exam
    </button>
  );
};

export default StartButton;
