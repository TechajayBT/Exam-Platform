import React from 'react';

const ExamStarted = ({ selectedExam }) => {
  return (
    <div>
      <h2 className='goodluck'>Good luck! You are starting the {selectedExam} exam.</h2>
      {/* You can replace this with a redirection or a new component that shows questions */}
    </div>
  );
};

export default ExamStarted;
