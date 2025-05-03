import React, { useState } from 'react';
import './Admin.css';

const Admin = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [examData, setExamData] = useState([
    { id: 1, name: 'Mathematics', status: 'Active', students: 45 },
    { id: 2, name: 'Physics', status: 'Scheduled', students: 32 },
    { id: 3, name: 'Computer Science', status: 'Completed', students: 28 },
    { id: 4, name: 'Biology', status: 'Active', students: 37 }
  ]);
  
  const [newExamName, setNewExamName] = useState('');
  const [showAddExamForm, setShowAddExamForm] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  const handleAddExam = (e) => {
    e.preventDefault();
    if (newExamName.trim()) {
      const newExam = {
        id: examData.length + 1,
        name: newExamName,
        status: 'Scheduled',
        students: 0
      };
      setExamData([...examData, newExam]);
      setNewExamName('');
      setShowAddExamForm(false);
    }
  };

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Active Exams</h3>
          <p className="stat-number">{examData.filter(exam => exam.status === 'Active').length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="stat-number">{examData.reduce((total, exam) => total + exam.students, 0)}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Exams</h3>
          <p className="stat-number">{examData.filter(exam => exam.status === 'Completed').length}</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          <li>New student registered for Mathematics exam</li>
          <li>Physics exam scheduled for next week</li>
          <li>Computer Science exam results published</li>
          <li>5 new questions added to Biology exam</li>
        </ul>
      </div>
    </div>
  );

  const renderExams = () => (
    <div className="exams-content">
      <div className="exams-header">
        <h3>Manage Exams</h3>
        <button 
          className="add-exam-btn"
          onClick={() => setShowAddExamForm(!showAddExamForm)}
        >
          {showAddExamForm ? 'Cancel' : 'Add New Exam'}
        </button>
      </div>
      
      {showAddExamForm && (
        <form className="add-exam-form" onSubmit={handleAddExam}>
          <input 
            type="text" 
            placeholder="Enter exam name" 
            value={newExamName}
            onChange={(e) => setNewExamName(e.target.value)}
            required
          />
          <button type="submit">Create Exam</button>
        </form>
      )}
      
      <table className="exams-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {examData.map(exam => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.name}</td>
              <td>
                <span className={`status-badge ${exam.status.toLowerCase()}`}>
                  {exam.status}
                </span>
              </td>
              <td>{exam.students}</td>
              <td>
                <button className="action-btn edit">Edit</button>
                <button className="action-btn view">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-content">
      <h3>Admin Settings</h3>
      
      <div className="settings-form">
        <div className="form-group">
          <label>Admin Name</label>
          <input type="text" defaultValue="Administrator" />
        </div>
        
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" defaultValue="admin@example.com" />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" defaultValue="********" />
        </div>
        
        <div className="form-group">
          <label>Notification Settings</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Email notifications
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> New student alerts
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Exam completion alerts
            </label>
          </div>
        </div>
        
        <button className="save-settings-btn">Save Settings</button>
      </div>
    </div>
  );

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <h3>Admin Panel</h3>
        </div>
        
        <nav className="admin-nav">
          <ul>
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''} 
              onClick={() => handleTabChange('dashboard')}
            >
              Dashboard
            </li>
            <li 
              className={activeTab === 'exams' ? 'active' : ''} 
              onClick={() => handleTabChange('exams')}
            >
              Manage Exams
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''} 
              onClick={() => handleTabChange('settings')}
            >
              Settings
            </li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </div>
      
      <div className="admin-content">
        <header className="admin-header">
          <h2>{activeTab === 'dashboard' ? 'Dashboard' : 
               activeTab === 'exams' ? 'Exam Management' : 'Settings'}</h2>
          <div className="admin-header-actions">
            <button className="admin-help-btn">Help</button>
            <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        
        <main className="admin-main">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'exams' && renderExams()}
          {activeTab === 'settings' && renderSettings()}
        </main>
      </div>
    </div>
  );
};

export default Admin;