import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Instructions from './components/Instructions';
import StartButton from './components/StartButton';
import Tagline from './components/Tagline';

const App = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [examStarted, setExamStarted] = useState(false);
  const [userRole, setUserRole] = useState(''); // Track whether the user is Admin or Student

  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  const startExam = () => {
    if (selectedExam && userRole) {
      setExamStarted(true);
    } else {
      alert('Please select your role and exam before starting!');
    }
  };

  return (
    <div className="container">
      <Heading />
      {!userRole ? (
        // Login screen with Admin and Student selection
        <div className="role-selection">
          <h2>Select your role</h2>
          <button className="role-btn" onClick={() => handleRoleSelect('Admin')}>Login as Admin</button>
          <button className="role-btn" onClick={() => handleRoleSelect('Student')}>Login as Student</button>
        </div>
      ) : !examStarted ? (
        // Exam Start screen after role selection
        <div>
          <h3>Welcome {userRole}</h3>
          <StartButton onStart={startExam} />
        </div>
      ) : (
        // Exam or instructions after starting
        <div>
          <Tagline />
          <Instructions />
        </div>
      )}
    </div>
  );
};

export default App;
