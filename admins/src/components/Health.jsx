// The school nurse or school health officer will manage all health records through here
import React, { useState } from 'react';

export default function Health() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ loginId: '', password: '' });
  const [activeTab, setActiveTab] = useState('records');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Mock health records data
  const [healthRecords, setHealthRecords] = useState([
    {
      id: 'HR001',
      studentId: 'CHS2025001',
      studentName: 'John Kiprotich',
      grade: 'Form 2',
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
      grade: 'Form 3',
      lastCheckup: '2025-09-20',
      bloodType: 'A+',
      allergies: 'None',
      medications: 'None',
      conditions: 'None',
      emergencyContact: 'Peter Wanjiku - +254 723 456 789',
      vaccinations: 'COVID-19, Tetanus, Hepatitis B, HPV',
      status: 'Healthy'
    }
  ]);

  const [newRecord, setNewRecord] = useState({
    studentId: '',
    studentName: '',
    grade: '',
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

    // Mock validation - in real app, this would be API call
    if (loginData.loginId.startsWith('NURSE') || loginData.loginId === 'admin') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid login credentials. Please check your Login ID.');
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
      lastCheckup: new Date().toISOString().split('T')[0],
      status: 'Healthy'
    };

    setHealthRecords([...healthRecords, newHealthRecord]);
    setNewRecord({
      studentId: '', studentName: '', grade: '', bloodType: '', allergies: '',
      medications: '', conditions: '', emergencyContact: '', vaccinations: '', notes: ''
    });
    setIsSubmitting(false);
    alert('Health record added successfully!');
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

            <div className="mt-6 text-xs text-gray-500">
              <p><strong>Demo Access:</strong> NURSE001 / health123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Health Portal Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
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
              {healthRecords.map((record) => (
                <div key={record.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{record.studentName}</h3>
                      <p className="text-gray-600">Student ID: {record.studentId} | Grade: {record.grade}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Last Checkup:</span>
                      <p className="text-gray-600">{record.lastCheckup}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Blood Type:</span>
                      <p className="text-gray-600">{record.bloodType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Allergies:</span>
                      <p className="text-gray-600">{record.allergies || 'None'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Medications:</span>
                      <p className="text-gray-600">{record.medications || 'None'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Conditions:</span>
                      <p className="text-gray-600">{record.conditions || 'None'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Emergency Contact:</span>
                      <p className="text-gray-600">{record.emergencyContact}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="font-medium text-gray-700">Vaccinations:</span>
                    <p className="text-gray-600">{record.vaccinations}</p>
                  </div>
                </div>
              ))}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade *</label>
                  <select
                    name="grade"
                    value={newRecord.grade}
                    onChange={(e) => handleInputChange(e, setNewRecord)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
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