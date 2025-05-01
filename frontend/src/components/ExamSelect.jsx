import React from 'react';

const ExamSelect = ({ selectedExam, onExamSelect }) => {
  return (
    <div className="exam-select">
      <label htmlFor="exam">Select Exam:</label>
      <select id="exam" value={selectedExam} onChange={onExamSelect}>
        <option value="">-- Select Exam --</option>
        <option value="math">Mathematics Test</option>
        <option value="science">Science Test</option>
        <option value="english">English Test</option>
      </select>
    </div>
  );
};

export default ExamSelect;
