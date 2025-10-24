// Teachers will be able to post assignments, results and such through this portal
import React, { useState } from 'react';

export default function Teachers() {
  console.log('Teachers component rendered - TESTING');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ loginId: '', password: '' });
  const [activeTab, setActiveTab] = useState('assignments');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Teacher info from login
  const [teacherInfo, setTeacherInfo] = useState(null);
  
  // Notification state
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  // Filter states
  const [filterSubject, setFilterSubject] = useState('');
  const [filterForm, setFilterForm] = useState('');
  const [filterClass, setFilterClass] = useState('');

  // TODO: Backend - Fetch from Faculty Management System
  const teacherDatabase = {
    'MATH001': { name: 'Mr. Peter Kimani', department: 'Mathematics', subjects: ['Mathematics', 'Statistics'] },
    'ENG001': { name: 'Ms. Jane Muthoni', department: 'Languages', subjects: ['English', 'Literature'] },
    'SCI001': { name: 'Mr. David Kiprotich', department: 'Science', subjects: ['Biology', 'Chemistry', 'Physics'] },
    'HIST001': { name: 'Ms. Grace Njeri', department: 'Humanities', subjects: ['History', 'Geography', 'CRE'] },
    'TEACH001': { name: 'Mr. John Ochieng', department: 'Physical Education', subjects: ['Physical Education', 'Sports'] },
    'admin': { name: 'Administrator', department: 'All', subjects: ['All Subjects'] }
  };

  // Mock data
  const [assignments, setAssignments] = useState([
    {
      id: 'ASS001',
      title: 'Algebra Equations Practice',
      subject: 'Mathematics',
      grade: 'Form 2A',
      dueDate: '2025-10-15',
      description: 'Solve linear and quadratic equations from Chapter 5',
      teacherId: 'MATH001',
      teacherName: 'Mr. Peter Kimani',
      status: 'Active',
      submissions: 23,
      totalStudents: 30
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
      classGrade: 'Form 2A',
      dateGraded: '2025-09-25',
      teacherId: 'MATH001'
    }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    subject: '',
    form: '',
    class: '',
    dueDate: '',
    description: '',
    attachments: null,
    maxScore: 100
  });

  const [newGrade, setNewGrade] = useState({
    studentId: '',
    studentName: '',
    subject: '',
    form: '',
    class: '',
    assignment: '',
    score: '',
    maxScore: 100,
    comments: ''
  });

  // Filter selection for Add Grade tab
  const [gradeFilter, setGradeFilter] = useState({
    subject: '',
    form: '',
    class: '',
    assignment: ''
  });

  // Student grades being edited
  const [studentGrades, setStudentGrades] = useState({});

  // TODO: Backend - Fetch actual students from database based on class and subject
  const mockStudents = [
    { id: 'CHS2025001', name: 'John Kiprotich', form: 'Form 2', class: 'A', subjects: ['Mathematics', 'Physics', 'Chemistry'] },
    { id: 'CHS2025002', name: 'Mary Wanjiru', form: 'Form 2', class: 'A', subjects: ['Mathematics', 'Biology', 'Chemistry'] },
    { id: 'CHS2025003', name: 'David Omondi', form: 'Form 2', class: 'A', subjects: ['Mathematics', 'Physics', 'English'] },
    { id: 'CHS2025004', name: 'Grace Akinyi', form: 'Form 2', class: 'A', subjects: ['Mathematics', 'Biology', 'English'] },
    { id: 'CHS2025005', name: 'Peter Kamau', form: 'Form 2', class: 'A', subjects: ['Mathematics', 'Physics', 'Chemistry'] },
    { id: 'CHS2025011', name: 'James Mutua', form: 'Form 1', class: 'B', subjects: ['English', 'Literature', 'History'] },
    { id: 'CHS2025012', name: 'Sarah Njoki', form: 'Form 1', class: 'B', subjects: ['English', 'Literature', 'Geography'] },
    { id: 'CHS2025013', name: 'Michael Otieno', form: 'Form 1', class: 'B', subjects: ['English', 'Literature', 'CRE'] },
  ];

  // Get filtered students based on selected class and subject
  const getFilteredStudents = () => {
    if (!gradeFilter.subject || !gradeFilter.form || !gradeFilter.class) {
      return [];
    }
    
    return mockStudents.filter(student => 
      student.form === gradeFilter.form && 
      student.class === gradeFilter.class &&
      student.subjects.includes(gradeFilter.subject)
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    // TODO: Backend - Replace with actual API authentication
    const teacher = teacherDatabase[loginData.loginId];
    
    if (teacher && loginData.password) {
      setIsLoggedIn(true);
      setTeacherInfo(teacher);
      showNotification(`Welcome back, ${teacher.name}!`, 'success');
    } else {
      showNotification('Invalid login credentials. Please check your Login ID and password.', 'error');
    }
    setIsSubmitting(false);
  };

  // Show notification function
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleInputChange = (e, setState) => {
    const { name, value, type, checked, files } = e.target;
    setState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const addAssignment = async (e) => {
    e.preventDefault();
    if (!teacherInfo) return; // Safety check
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const assignmentId = `ASS${(assignments.length + 1).toString().padStart(3, '0')}`;
    const assignment = {
      id: assignmentId,
      ...newAssignment,
      grade: `${newAssignment.form}${newAssignment.class}`, // e.g., "Form 2A"
      teacherId: loginData.loginId,
      teacherName: teacherInfo.name,
      department: teacherInfo.department,
      status: 'Active',
      submissions: 0,
      totalStudents: 30 // TODO: Backend - Fetch actual student count for the class
    };

    setAssignments([...assignments, assignment]);
    setNewAssignment({
      title: '', subject: '', form: '', class: '', dueDate: '', description: '', attachments: null, maxScore: 100
    });
    setIsSubmitting(false);
    showNotification('Assignment created successfully!', 'success');
  };

  const addGrade = async (e) => {
    e.preventDefault();
    if (!teacherInfo) return; // Safety check
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const gradeMapping = {
      90: 'A', 85: 'B+', 80: 'B', 75: 'B-', 70: 'C+', 65: 'C', 60: 'C-', 55: 'D+', 50: 'D', 45: 'D-'
    };

    // Process all student grades that have been entered
    const newGrades = [];
    Object.entries(studentGrades).forEach(([studentId, gradeData]) => {
      if (gradeData.score !== '' && gradeData.score !== undefined) {
        const percentage = (gradeData.score / gradeData.maxScore) * 100;
        const letterGrade = Object.entries(gradeMapping).find(([min]) => percentage >= min)?.[1] || 'F';
        
        const student = mockStudents.find(s => s.id === studentId);
        
        const gradeId = `GRD${(grades.length + newGrades.length + 1).toString().padStart(3, '0')}`;
        newGrades.push({
          id: gradeId,
          studentId: studentId,
          studentName: student?.name || '',
          subject: gradeFilter.subject,
          form: gradeFilter.form,
          class: gradeFilter.class,
          assignment: gradeFilter.assignment,
          score: gradeData.score,
          maxScore: gradeData.maxScore,
          grade: letterGrade,
          classGrade: `${gradeFilter.form}${gradeFilter.class}`,
          dateGraded: new Date().toISOString().split('T')[0],
          teacherId: loginData.loginId,
          teacherName: teacherInfo.name,
          comments: gradeData.comments || ''
        });
      }
    });

    if (newGrades.length > 0) {
      setGrades([...grades, ...newGrades]);
      showNotification(`${newGrades.length} grade(s) added successfully!`, 'success');
      // Reset
      setStudentGrades({});
      setGradeFilter({ subject: '', form: '', class: '', assignment: '' });
    } else {
      showNotification('Please enter at least one grade.', 'error');
    }
    
    setIsSubmitting(false);
  };

  // Handle individual student grade input
  const handleStudentGradeChange = (studentId, field, value) => {
    setStudentGrades(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value,
        maxScore: prev[studentId]?.maxScore || 100
      }
    }));
  };

  // Filter assignments and grades based on selected filters
  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSubject = filterSubject === '' || assignment.subject === filterSubject;
    const matchesForm = filterForm === '' || assignment.grade?.includes(filterForm);
    const matchesClass = filterClass === '' || assignment.grade?.includes(filterClass);
    return matchesSubject && matchesForm && matchesClass;
  });

  const filteredGrades = grades.filter((grade) => {
    const matchesSubject = filterSubject === '' || grade.subject === filterSubject;
    const matchesForm = filterForm === '' || grade.classGrade?.includes(filterForm);
    const matchesClass = filterClass === '' || grade.classGrade?.includes(filterClass);
    return matchesSubject && matchesForm && matchesClass;
  });

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
              {isSubmitting ? 'Logging in...' : 'Login to Teachers Portal'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Demo Access:</strong> MATH001, SCI001, or admin / any password
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main Teachers Portal Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`rounded-lg shadow-lg p-4 flex items-center space-x-3 ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {notification.type === 'success' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Teachers Portal</h1>
              <p className="text-gray-600">Welcome, {teacherInfo?.name} • {teacherInfo?.department} Department</p>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setTeacherInfo(null);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Filter Section - Show on Assignments and Grades tabs */}
          {(activeTab === 'assignments' || activeTab === 'grades') && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter {activeTab === 'assignments' ? 'Assignments' : 'Grades'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Subject Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    value={filterSubject}
                    onChange={(e) => setFilterSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Subjects</option>
                    {teacherInfo?.subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                {/* Form Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form</label>
                  <select
                    value={filterForm}
                    onChange={(e) => setFilterForm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Forms</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
                  </select>
                </div>

                {/* Class Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Classes</option>
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                    <option value="D">Class D</option>
                    <option value="E">Class E</option>
                    <option value="W">Class W</option>
                    <option value="X">Class X</option>
                    <option value="Y">Class Y</option>
                    <option value="Z">Class Z</option>
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {(filterSubject || filterForm || filterClass) && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setFilterSubject('');
                      setFilterForm('');
                      setFilterClass('');
                    }}
                    className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Results Count */}
              {activeTab === 'assignments' && (
                <div className="mt-4 text-sm text-gray-600">
                  Showing {filteredAssignments.length} of {assignments.length} assignments
                </div>
              )}
              {activeTab === 'grades' && (
                <div className="mt-4 text-sm text-gray-600">
                  Showing {filteredGrades.length} of {grades.length} grades
                </div>
              )}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex flex-wrap gap-1">
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
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment) => (
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
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No assignments match your current filters.</p>
                </div>
              )}
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
                    {teacherInfo?.subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form *</label>
                  <select
                    name="form"
                    value={newAssignment.form}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Form</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class *</label>
                  <select
                    name="class"
                    value={newAssignment.class}
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Class</option>
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                    <option value="D">Class D</option>
                    <option value="E">Class E</option>
                    <option value="W">Class W</option>
                    <option value="X">Class X</option>
                    <option value="Y">Class Y</option>
                    <option value="Z">Class Z</option>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments/Files</label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="attachments"
                    onChange={(e) => handleInputChange(e, setNewAssignment)}
                    multiple
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                  <p className="mt-2 text-xs text-gray-500">Upload assignment files, PDFs, images, or documents</p>
                  {newAssignment.attachments && (
                    <p className="mt-2 text-sm text-green-600">
                      ✓ File selected: {newAssignment.attachments.name}
                    </p>
                  )}
                </div>
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
              {filteredGrades.length > 0 ? (
                filteredGrades.map((grade) => (
                  <div key={grade.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{grade.studentName}</h3>
                        <p className="text-gray-600">Student ID: {grade.studentId} • {grade.classGrade}</p>
                        
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
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No grades match your current filters.</p>
                </div>
              )}
            </div>
          )}

          {/* Add Grade Tab */}
          {activeTab === 'add-grade' && (
            <div className="space-y-6">
              {/* Filter Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Class and Subject</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      value={gradeFilter.subject}
                      onChange={(e) => setGradeFilter({ ...gradeFilter, subject: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Subject</option>
                      {teacherInfo?.subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Form *</label>
                    <select
                      value={gradeFilter.form}
                      onChange={(e) => setGradeFilter({ ...gradeFilter, form: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Form</option>
                      <option value="Form 1">Form 1</option>
                      <option value="Form 2">Form 2</option>
                      <option value="Form 3">Form 3</option>
                      <option value="Form 4">Form 4</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class *</label>
                    <select
                      value={gradeFilter.class}
                      onChange={(e) => setGradeFilter({ ...gradeFilter, class: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Class</option>
                      <option value="A">Class A</option>
                      <option value="B">Class B</option>
                      <option value="C">Class C</option>
                      <option value="D">Class D</option>
                      <option value="E">Class E</option>
                      <option value="W">Class W</option>
                      <option value="X">Class X</option>
                      <option value="Y">Class Y</option>
                      <option value="Z">Class Z</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assignment/Exam *</label>
                    <input
                      type="text"
                      value={gradeFilter.assignment}
                      onChange={(e) => setGradeFilter({ ...gradeFilter, assignment: e.target.value })}
                      placeholder="e.g., Midterm Exam"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {gradeFilter.subject && gradeFilter.form && gradeFilter.class && (
                  <div className="mt-4 text-sm text-gray-600">
                    Found {getFilteredStudents().length} student(s) in {gradeFilter.form}{gradeFilter.class} taking {gradeFilter.subject}
                  </div>
                )}
              </div>

              {/* Student List */}
              {gradeFilter.subject && gradeFilter.form && gradeFilter.class && gradeFilter.assignment ? (
                getFilteredStudents().length > 0 ? (
                  <form onSubmit={addGrade}>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Grade Students - {gradeFilter.subject} ({gradeFilter.form}{gradeFilter.class})
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">Assignment: {gradeFilter.assignment}</p>
                      </div>

                      <div className="divide-y divide-gray-200">
                        {getFilteredStudents().map((student, index) => (
                          <div key={student.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0 w-8 text-gray-500 font-medium">
                                {index + 1}.
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-800">{student.name}</h4>
                                <p className="text-xs text-gray-500">ID: {student.id}</p>
                              </div>

                              <div className="flex items-center gap-3">
                                <div>
                                  <label className="block text-xs text-gray-600 mb-1">Score *</label>
                                  <input
                                    type="number"
                                    value={studentGrades[student.id]?.score || ''}
                                    onChange={(e) => handleStudentGradeChange(student.id, 'score', e.target.value)}
                                    placeholder="0"
                                    min="0"
                                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>

                                <div className="pt-6 text-gray-500">/</div>

                                <div>
                                  <label className="block text-xs text-gray-600 mb-1">Max</label>
                                  <input
                                    type="number"
                                    value={studentGrades[student.id]?.maxScore || 100}
                                    onChange={(e) => handleStudentGradeChange(student.id, 'maxScore', e.target.value)}
                                    min="1"
                                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>

                                <div className="flex-1 min-w-[200px]">
                                  <label className="block text-xs text-gray-600 mb-1">Comments (Optional)</label>
                                  <input
                                    type="text"
                                    value={studentGrades[student.id]?.comments || ''}
                                    onChange={(e) => handleStudentGradeChange(student.id, 'comments', e.target.value)}
                                    placeholder="Add feedback..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>

                                {studentGrades[student.id]?.score && studentGrades[student.id]?.maxScore && (
                                  <div className="text-right min-w-[60px]">
                                    <div className="text-xs text-gray-500">Grade</div>
                                    <div className={`text-lg font-bold ${
                                      getGradeColor(
                                        Object.entries({
                                          90: 'A', 85: 'B+', 80: 'B', 75: 'B-', 70: 'C+', 65: 'C', 60: 'C-', 55: 'D+', 50: 'D', 45: 'D-'
                                        }).find(([min]) => 
                                          ((studentGrades[student.id].score / studentGrades[student.id].maxScore) * 100) >= min
                                        )?.[1] || 'F'
                                      )
                                    }`}>
                                      {Object.entries({
                                        90: 'A', 85: 'B+', 80: 'B', 75: 'B-', 70: 'C+', 65: 'C', 60: 'C-', 55: 'D+', 50: 'D', 45: 'D-'
                                      }).find(([min]) => 
                                        ((studentGrades[student.id].score / studentGrades[student.id].maxScore) * 100) >= min
                                      )?.[1] || 'F'}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting || Object.keys(studentGrades).length === 0}
                        className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                          isSubmitting || Object.keys(studentGrades).length === 0
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {isSubmitting ? 'Saving Grades...' : `Save Grades (${Object.keys(studentGrades).filter(id => studentGrades[id]?.score).length})`}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No students found in {gradeFilter.form}{gradeFilter.class} taking {gradeFilter.subject}</p>
                    <p className="text-sm text-gray-500 mt-2">Please verify the class and subject combination.</p>
                  </div>
                )
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-gray-600 font-medium">Select subject, form, class, and assignment to begin</p>
                  <p className="text-sm text-gray-500 mt-2">The student list will appear once all fields are selected.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
