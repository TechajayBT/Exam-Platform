import React, { useState } from 'react';
import FileUpload from './FileUpload';

const ExamSelect = ({ selectedExam, onExamSelect }) => {
  const [showUpload, setShowUpload] = useState(false);

  const handleUploadClick = () => {
    setShowUpload(!showUpload); 
  };

  return (
    <div className="exam-select">
      <button className="exambuttons" onClick={handleUploadClick}>
        Upload document for verification
      </button>

      {showUpload && <FileUpload />} 
    </div>
  );
};

export default ExamSelect;
