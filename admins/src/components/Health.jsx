// The school nurse or school health officer will manage all health records through here
import React, { useState } from 'react';

export default function Health() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ loginId: '', password: '' });
  const [activeTab, setActiveTab] = useState('records');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterForm, setFilterForm] = useState('');
  const [filterClass, setFilterClass] = useState('');
  
  // Expanded record state for accordion
  const [expandedRecordId, setExpandedRecordId] = useState(null);
  
  // Edit mode state
  const [editingRecordId, setEditingRecordId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  
  // Notification state
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Mock health records data
  const [healthRecords, setHealthRecords] = useState([
    {
      id: 'HR001',
      studentId: 'CHS2025001',
      studentName: 'John Kiprotich',
      form: 'Form 2',
      class: 'A',
      grade: 'Form 2A',
      lastCheckup: '2025-09-15',
      bloodType: 'O+',
      allergies: 'Peanuts, Dust',
      medications: 'Inhaler for Asthma',
      conditions: 'Mild Asthma',
      emergencyContact: 'Mary Kiprotich - +254 712 345 678',
      vaccinations: 'COVID-19, Tetanus, Hepatitis B',
      status: 'Healthy'
    },
    {
      id: 'HR002',
      studentId: 'CHS2025002',
      studentName: 'Grace Wanjiku',
      form: 'Form 3',
      class: 'B',
      grade: 'Form 3B',
      lastCheckup: '2025-09-20',
      bloodType: 'A+',
      allergies: 'None',
      medications: 'None',
      conditions: 'None',
      emergencyContact: 'Peter Wanjiku - +254 723 456 789',
      vaccinations: 'COVID-19, Tetanus, Hepatitis B, HPV',
      status: 'Healthy'
    },
    {
      id: 'HR003',
      studentId: 'CHS2025003',
      studentName: 'David Omondi',
      form: 'Form 4',
      class: 'W',
      grade: 'Form 4W',
      lastCheckup: '2025-09-22',
      bloodType: 'B+',
      allergies: 'Penicillin',
      medications: 'None',
      conditions: 'None',
      emergencyContact: 'Jane Omondi - +254 734 567 890',
      vaccinations: 'COVID-19, Tetanus, Hepatitis B',
      status: 'Healthy'
    },
    {
      id: 'HR004',
      studentId: 'CHS2025004',
      studentName: 'Sarah Njeri',
      form: 'Form 1',
      class: 'C',
      grade: 'Form 1C',
      lastCheckup: '2025-09-10',
      bloodType: 'A-',
      allergies: 'None',
      medications: 'None',
      conditions: 'None',
      emergencyContact: 'Paul Njeri - +254 745 678 901',
      vaccinations: 'COVID-19, Tetanus, Hepatitis B, HPV',
      status: 'Healthy'
    }
  ]);

  const [newRecord, setNewRecord] = useState({
    studentId: '',
    studentName: '',
    form: '',
    class: '',
    bloodType: '',
    allergies: '',
    medications: '',
    conditions: '',
    emergencyContact: '',
    vaccinations: '',
    notes: ''
  });

  const [newIncident, setNewIncident] = useState({
    studentId: '',
    studentName: '',
    incidentType: '',
    description: '',
    treatment: '',
    severity: '',
    parentNotified: false,
    followUpRequired: false
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError('');

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));

    // TODO: Backend - Replace with actual API call
    // Mock validation for demo purposes
    const validCredentials = [
      { loginId: 'NURSE001', password: 'nurse123' },
      { loginId: 'NURSE002', password: 'nurse123' },
      { loginId: 'admin', password: 'admin123' }
    ];

    const isValid = validCredentials.some(
      cred => cred.loginId === loginData.loginId && cred.password === loginData.password
    );

    if (isValid) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid login credentials. Please check your Login ID and password.');
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

  const addHealthRecord = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const recordId = `HR${(healthRecords.length + 1).toString().padStart(3, '0')}`;
    const newHealthRecord = {
      id: recordId,
      ...newRecord,
      grade: `${newRecord.form}${newRecord.class}`, // Combine form and class (e.g., "Form 4B")
      lastCheckup: new Date().toISOString().split('T')[0],
      status: 'Healthy'
    };

    setHealthRecords([...healthRecords, newHealthRecord]);
    setNewRecord({
      studentId: '', studentName: '', form: '', class: '', bloodType: '', allergies: '',
      medications: '', conditions: '', emergencyContact: '', vaccinations: '', notes: ''
    });
    setIsSubmitting(false);
    showNotification('Health record added successfully!', 'success');
  };

  // Filter health records based on search query, form, and class
  const filteredHealthRecords = healthRecords.filter((record) => {
    const matchesSearch = searchQuery === '' || 
      record.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesForm = filterForm === '' || record.form === filterForm;
    const matchesClass = filterClass === '' || record.class === filterClass;

    return matchesSearch && matchesForm && matchesClass;
  });

  // Toggle record expansion
  const toggleRecord = (recordId) => {
    if (expandedRecordId === recordId) {
      setExpandedRecordId(null);
      setEditingRecordId(null);
    } else {
      setExpandedRecordId(recordId);
      setEditingRecordId(null);
    }
  };

  // Start editing a record
  const startEditing = (record) => {
    setEditingRecordId(record.id);
    setEditFormData({ ...record });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingRecordId(null);
    setEditFormData({});
  };

  // Save edited record
  const saveEditedRecord = () => {
    setHealthRecords(healthRecords.map(record => 
      record.id === editingRecordId ? editFormData : record
    ));
    setEditingRecordId(null);
    setEditFormData({});
    showNotification('Health record updated successfully!', 'success');
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Show notification function
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Healthy': return 'bg-green-100 text-green-800';
      case 'Needs Attention': return 'bg-yellow-100 text-yellow-800';
      case 'Under Care': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center py-8">
        <div className="max-w-md w-full mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Health Portal</h1>
              <p className="text-gray-600">Nurse Access - Student Health Records</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Login ID</label>
                <input
                  type="text"
                  name="loginId"
                  value={loginData.loginId}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  placeholder="NURSE001"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  placeholder="Enter password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium"
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
                'Access Health Portal'
              )}
              </button>
            </form>

            {loginError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800 font-semibold mb-2">Demo Access Credentials:</p>
              <p className="text-xs text-blue-700"><strong>Login ID:</strong> NURSE001</p>
              <p className="text-xs text-blue-700"><strong>Password:</strong> nurse123</p>
              <p className="text-xs text-blue-600 mt-2">Or use: admin / admin123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Health Portal Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
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
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Health Records Management</h1>
              <p className="text-gray-600">Manage student health records and medical information</p>
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
                onClick={() => setActiveTab('records')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'records'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Health Records
              </button>
              <button
                onClick={() => setActiveTab('add-record')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'add-record'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Add Record
              </button>
              <button
                onClick={() => setActiveTab('incidents')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'incidents'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Incidents
              </button>
            </div>
          </div>

          {/* Health Records Tab */}
          {activeTab === 'records' && (
            <div className="space-y-6">
              {/* Filter Section */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Records</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search Bar */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Student
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or ID..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Form Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Filter by Form
                    </label>
                    <select
                      value={filterForm}
                      onChange={(e) => setFilterForm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Filter by Class
                    </label>
                    <select
                      value={filterClass}
                      onChange={(e) => setFilterClass(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

                {/* Clear Filters Button */}
                {(searchQuery || filterForm || filterClass) && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setFilterForm('');
                        setFilterClass('');
                      }}
                      className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

                {/* Results Count */}
                <div className="mt-4 text-sm text-gray-600">
                  Showing {filteredHealthRecords.length} of {healthRecords.length} records
                </div>
              </div>

              {/* Health Records List */}
              {filteredHealthRecords.length > 0 ? (
                <div className="space-y-3">
                  {filteredHealthRecords.map((record) => (
                    <div key={record.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      {/* Collapsed View - Always Visible */}
                      <div 
                        onClick={() => toggleRecord(record.id)}
                        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-700 font-semibold text-sm">
                                  {record.studentName.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{record.studentName}</h3>
                              <p className="text-sm text-gray-600">
                                ID: {record.studentId} • Grade: {record.grade}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                            {record.status}
                          </span>
                          <svg 
                            className={`w-5 h-5 text-gray-500 transition-transform ${expandedRecordId === record.id ? 'transform rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Expanded View - Details */}
                      {expandedRecordId === record.id && (
                        <div className="border-t border-gray-200 bg-gray-50 p-6">
                          {editingRecordId === record.id ? (
                            /* Edit Mode */
                            <div className="space-y-4">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-gray-800">Edit Health Record</h4>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={saveEditedRecord}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                                  >
                                    Save Changes
                                  </button>
                                  <button
                                    onClick={cancelEditing}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                                  <select
                                    name="bloodType"
                                    value={editFormData.bloodType}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  >
                                    <option value="">Select Blood Type</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                  <select
                                    name="status"
                                    value={editFormData.status}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  >
                                    <option value="Healthy">Healthy</option>
                                    <option value="Needs Attention">Needs Attention</option>
                                    <option value="Under Care">Under Care</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                                  <input
                                    type="text"
                                    name="allergies"
                                    value={editFormData.allergies}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Medications</label>
                                  <input
                                    type="text"
                                    name="medications"
                                    value={editFormData.medications}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  />
                                </div>
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
                                  <textarea
                                    name="conditions"
                                    value={editFormData.conditions}
                                    onChange={handleEditInputChange}
                                    rows="2"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  />
                                </div>
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                                  <input
                                    type="text"
                                    name="emergencyContact"
                                    value={editFormData.emergencyContact}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  />
                                </div>
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Vaccinations</label>
                                  <input
                                    type="text"
                                    name="vaccinations"
                                    value={editFormData.vaccinations}
                                    onChange={handleEditInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* View Mode */
                            <div>
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-gray-800">Health Record Details</h4>
                                <button
                                  onClick={() => startEditing(record)}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center space-x-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                  <span>Edit Record</span>
                                </button>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Last Checkup:</span>
                                  <p className="text-gray-900">{record.lastCheckup}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Blood Type:</span>
                                  <p className="text-gray-900">{record.bloodType}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Allergies:</span>
                                  <p className="text-gray-900">{record.allergies || 'None'}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Medications:</span>
                                  <p className="text-gray-900">{record.medications || 'None'}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Conditions:</span>
                                  <p className="text-gray-900">{record.conditions || 'None'}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <span className="font-medium text-gray-700 block mb-1">Emergency Contact:</span>
                                  <p className="text-gray-900">{record.emergencyContact}</p>
                                </div>
                              </div>

                              <div className="mt-4 bg-white p-3 rounded-lg border border-gray-200">
                                <span className="font-medium text-gray-700 block mb-1">Vaccinations:</span>
                                <p className="text-gray-900">{record.vaccinations}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Records Found</h3>
                  <p className="text-gray-600">No health records match your current filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFilterForm('');
                      setFilterClass('');
                    }}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Add Record Tab */}
          {activeTab === 'add-record' && (
            <form onSubmit={addHealthRecord} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student ID *</label>
                  <input
                    type="text"
                    name="studentId"
                    value={newRecord.studentId}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={newRecord.studentName}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form *</label>
                  <select
                    name="form"
                    value={newRecord.form}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    value={newRecord.class}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                  <select
                    name="bloodType"
                    value={newRecord.bloodType}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                  <input
                    type="text"
                    name="allergies"
                    value={newRecord.allergies}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    placeholder="List any known allergies"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                  <input
                    type="text"
                    name="medications"
                    value={newRecord.medications}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    placeholder="List current medications"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                  <textarea
                    name="conditions"
                    value={newRecord.conditions}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    rows="3"
                    placeholder="List any medical conditions"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact *</label>
                  <textarea
                    name="emergencyContact"
                    value={newRecord.emergencyContact}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    rows="3"
                    placeholder="Name and phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vaccinations</label>
                <input
                  type="text"
                  name="vaccinations"
                  value={newRecord.vaccinations}
                  onChange={(e) => handleInputChange(e, setNewRecord)}
                  placeholder="List completed vaccinations"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Adding Record...' : 'Add Health Record'}
                </button>
              </div>
            </form>
          )}

          {/* Incidents Tab */}
          {activeTab === 'incidents' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Incident Reporting</h3>
              <p className="text-gray-600 mb-4">Feature coming soon - Report and track health incidents</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-yellow-800 text-sm">This section will allow nurses to report and track health incidents, injuries, and emergency situations.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}