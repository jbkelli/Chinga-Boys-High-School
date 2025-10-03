// Teachers will be able to post assignments, results and such through this portal
import React, { useState } from 'react';

export default function Teachers() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ loginId: '', password: '' });
  const [activeTab, setActiveTab] = useState('assignments');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data
  const [assignments, setAssignments] = useState([
    {
      id: 'ASS001',
      title: 'Algebra Equations Practice',
      subject: 'Mathematics',
      grade: 'Form 2',
      dueDate: '2025-10-15',
      description: 'Solve linear and quadratic equations from Chapter 5',
      teacherId: 'MATH001',
      teacherName: 'Mr. Peter Kimani',
      status: 'Active',
      submissions: 23,
      totalStudents: 30
    },
    {
      id: 'ASS002',
      title: 'Essay on Climate Change',
      subject: 'English',
      grade: 'Form 3',
      dueDate: '2025-10-20',
      description: 'Write a 500-word essay on the effects of climate change',
      teacherId: 'ENG001',
      teacherName: 'Ms. Sarah Njeri',
      status: 'Active',
      submissions: 18,
      totalStudents: 25
    }
  ]);

  const [grades, setGrades] = useState([
    {
      id: 'GRD001',
      studentId: 'CHS2025001',
      studentName: 'John Kiprotich',
      subject: 'Mathematics',
      assignment: 'Midterm Exam',
      score: 85,
      maxScore: 100,
      grade: 'B+',
      dateGraded: '2025-09-25',
      teacherId: 'MATH001'
    },
    {
      id: 'GRD002',
      studentId: 'CHS2025002',
      studentName: 'Grace Wanjiku',
      subject: 'English',
      assignment: 'Literature Analysis',
      score: 92,
      maxScore: 100,
      grade: 'A-',
      dateGraded: '2025-09-28',
      teacherId: 'ENG001'
    }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    subject: '',
    grade: '',
    dueDate: '',
    description: '',
    attachments: '',
    maxScore: 100
  });

  const [newGrade, setNewGrade] = useState({
    studentId: '',
    studentName: '',
    subject: '',
    assignment: '',
    score: '',
    maxScore: 100,
    comments: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock validation - check if login ID starts with TEACH or MATH, ENG, etc.
    if (loginData.loginId.startsWith('TEACH') || 
        loginData.loginId.startsWith('MATH') || 
        loginData.loginId.startsWith('ENG') ||
        loginData.loginId === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid login credentials. Please check your Login ID.');
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (e, setState) => {
    const { name, value, type, checked } = e.target;
    setState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addAssignment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const assignmentId = `ASS${(assignments.length + 1).toString().padStart(3, '0')}`;
    const assignment = {
      id: assignmentId,
      ...newAssignment,
      teacherId: loginData.loginId,
      teacherName: 'Current Teacher', // Would be fetched from login
      status: 'Active',
      submissions: 0,
      totalStudents: 30 // Would be fetched based on grade/subject
    };

    setAssignments([...assignments, assignment]);
    setNewAssignment({
      title: '', subject: '', grade: '', dueDate: '', description: '', attachments: '', maxScore: 100
    });
    setIsSubmitting(false);
    alert('Assignment created successfully!');
  };

  const addGrade = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const gradeId = `GRD${(grades.length + 1).toString().padStart(3, '0')}`;
    const gradeMapping = {
      90: 'A', 85: 'B+', 80: 'B', 75: 'B-', 70: 'C+', 65: 'C', 60: 'C-', 55: 'D+', 50: 'D', 45: 'D-'
    };
    
    const percentage = (newGrade.score / newGrade.maxScore) * 100;
    const letterGrade = Object.entries(gradeMapping).find(([min]) => percentage >= min)?.[1] || 'F';

    const grade = {
      id: gradeId,
      ...newGrade,
      grade: letterGrade,
      dateGraded: new Date().toISOString().split('T')[0],
      teacherId: loginData.loginId
    };

    setGrades([...grades, grade]);
    setNewGrade({
      studentId: '', studentName: '', subject: '', assignment: '', score: '', maxScore: 100, comments: ''
    });
    setIsSubmitting(false);
    alert('Grade added successfully!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGradeColor = (grade) => {
    if (['A', 'A-'].includes(grade)) return 'text-green-600';
    if (['B+', 'B', 'B-'].includes(grade)) return 'text-blue-600';
    if (['C+', 'C', 'C-'].includes(grade)) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Teachers Portal</h1>
            <p className="text-gray-600">Access your teaching tools and student management</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Login ID</label>
                <input
                  type="text"
                  name="loginId"
                  value={loginData.loginId}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  placeholder="Enter your Login ID (e.g., MATH001)"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 py-2 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login to Teachers Portal'
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This portal is for teaching staff only. 
              Use your assigned Login ID from the Faculty Management system.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main Teachers Portal Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Teachers Portal</h1>
              <p className="text-gray-600">Manage assignments, grades, and student progress</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('assignments')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'assignments'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Assignments
              </button>
              <button
                onClick={() => setActiveTab('add-assignment')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'add-assignment'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Create Assignment
              </button>
              <button
                onClick={() => setActiveTab('grades')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'grades'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Grades
              </button>
              <button
                onClick={() => setActiveTab('add-grade')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'add-grade'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Add Grade
              </button>
            </div>
          </div>

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <div className="space-y-6">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{assignment.title}</h3>
                      <p className="text-gray-600">{assignment.subject} - {assignment.grade}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                      {assignment.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{assignment.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Due Date:</span>
                      <p className="text-gray-600">{assignment.dueDate}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Submissions:</span>
                      <p className="text-gray-600">{assignment.submissions}/{assignment.totalStudents}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Teacher:</span>
                      <p className="text-gray-600">{assignment.teacherName}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      View Submissions
                    </button>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                      Edit Assignment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Assignment Tab */}
          {activeTab === 'add-assignment' && (
            <form onSubmit={addAssignment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newAssignment.title}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={newAssignment.subject}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Physical Education">Physical Education</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade *</label>
                  <select
                    name="grade"
                    value={newAssignment.grade}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date *</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={newAssignment.dueDate}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Score</label>
                  <input
                    type="number"
                    name="maxScore"
                    value={newAssignment.maxScore}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={newAssignment.description}
                  onChange={(e) => handleInputChange(e, setNewAssignment)}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments/Resources</label>
                <input
                  type="text"
                  name="attachments"
                  value={newAssignment.attachments}
                  onChange={(e) => handleInputChange(e, setNewAssignment)}
                  placeholder="Links to resources or materials"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Creating Assignment...' : 'Create Assignment'}
                </button>
              </div>
            </form>
          )}

          {/* Grades Tab */}
          {activeTab === 'grades' && (
            <div className="space-y-4">
              {grades.map((grade) => (
                <div key={grade.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{grade.studentName}</h3>
                      <p className="text-gray-600">Student ID: {grade.studentId}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Subject:</span>
                          <p className="text-gray-600">{grade.subject}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Assignment:</span>
                          <p className="text-gray-600">{grade.assignment}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Score:</span>
                          <p className="text-gray-600">{grade.score}/{grade.maxScore}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Date:</span>
                          <p className="text-gray-600">{grade.dateGraded}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getGradeColor(grade.grade)}`}>
                        {grade.grade}
                      </div>
                      <div className="text-sm text-gray-600">
                        {Math.round((grade.score / grade.maxScore) * 100)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Grade Tab */}
          {activeTab === 'add-grade' && (
            <form onSubmit={addGrade} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student ID *</label>
                  <input
                    type="text"
                    name="studentId"
                    value={newGrade.studentId}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={newGrade.studentName}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={newGrade.subject}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assignment/Exam *</label>
                  <input
                    type="text"
                    name="assignment"
                    value={newGrade.assignment}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Score *</label>
                  <input
                    type="number"
                    name="score"
                    value={newGrade.score}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Score</label>
                  <input
                    type="number"
                    name="maxScore"
                    value={newGrade.maxScore}
                    onChange={(e) => handleInputChange(e, setNewGrade)}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                <textarea
                  name="comments"
                  value={newGrade.comments}
                  onChange={(e) => handleInputChange(e, setNewGrade)}
                  rows="3"
                  placeholder="Additional feedback for the student"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Adding Grade...' : 'Add Grade'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}