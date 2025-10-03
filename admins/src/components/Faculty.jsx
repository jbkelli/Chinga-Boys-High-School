// Faculty Management - All school personnel with login credentials
import React, { useState } from 'react';

export default function Faculty() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    specialCode: ''
  });
  const [loginError, setLoginError] = useState('');

  // Authorized admin personnel only
  const authorizedAdmins = [
    { email: 'principal@chingaboys.edu', code: 'PRIN2025', name: 'School Principal', role: 'Principal' },
    { email: 'deputy1@chingaboys.edu', code: 'DEP2025A', name: 'Deputy Principal - Academics', role: 'Deputy Principal' },
    { email: 'deputy2@chingaboys.edu', code: 'DEP2025D', name: 'Deputy Principal - Discipline', role: 'Deputy Principal' },
    { email: 'dean@chingaboys.edu', code: 'DEAN2025', name: 'Dean of Studies', role: 'Dean of Studies' },
    // Temporary general access for development
    { email: 'admin@chingaboys.edu', code: 'ADMIN123', name: 'General Admin', role: 'Administrator' }
  ];

  const [activeTab, setActiveTab] = useState('view');
  const [personnel, setPersonnel] = useState([
    {
      id: 'CHS001',
      name: 'Dr. Sarah Johnson',
      role: 'Principal',
      department: 'Administration',
      email: 'sarah.johnson@chingaboys.edu',
      phone: '+254 712 345 678',
      loginId: 'PRIN001',
      dateJoined: '2020-01-15',
      status: 'Active'
    },
    {
      id: 'CHS002',
      name: 'Nurse Mary Wanjiku',
      role: 'School Nurse',
      department: 'Health Services',
      email: 'mary.wanjiku@chingaboys.edu',
      phone: '+254 723 456 789',
      loginId: 'NURSE001',
      dateJoined: '2021-03-10',
      status: 'Active'
    },
    {
      id: 'CHS003',
      name: 'Mr. Peter Kimani',
      role: 'Mathematics Teacher',
      department: 'Mathematics',
      email: 'peter.kimani@chingaboys.edu',
      phone: '+254 734 567 890',
      loginId: 'MATH001',
      dateJoined: '2019-08-20',
      status: 'Active'
    }
  ]);

  const [newPersonnel, setNewPersonnel] = useState({
    name: '',
    role: '',
    department: '',
    email: '',
    phone: '',
    specializations: '',
    qualifications: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const admin = authorizedAdmins.find(a => 
      a.email.toLowerCase() === loginData.email.toLowerCase() && 
      a.code === loginData.specialCode
    );
    
    if (admin) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid email or special code. Access restricted to authorized administrators only.');
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateLoginId = (role, department) => {
    const roleCode = role.toLowerCase().includes('nurse') ? 'NURSE' :
                     role.toLowerCase().includes('teacher') ? 'TEACH' :
                     role.toLowerCase().includes('principal') ? 'PRIN' :
                     role.toLowerCase().includes('admin') ? 'ADMIN' : 'STAFF';
    
    const count = personnel.filter(p => p.loginId.startsWith(roleCode)).length + 1;
    return `${roleCode}${count.toString().padStart(3, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPersonnel(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const loginId = generateLoginId(newPersonnel.role, newPersonnel.department);
      const personnelId = `CHS${(personnel.length + 1).toString().padStart(3, '0')}`;

      const newStaff = {
        id: personnelId,
        ...newPersonnel,
        loginId: loginId,
        dateJoined: new Date().toISOString().split('T')[0],
        status: 'Active'
      };

      setPersonnel([...personnel, newStaff]);
      setSubmitStatus({
        type: 'success',
        message: `Personnel added successfully! Login ID: ${loginId}`,
        loginId: loginId
      });

      // Reset form
      setNewPersonnel({
        name: '', role: '', department: '', email: '', phone: '', 
        specializations: '', qualifications: ''
      });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error adding personnel. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRoleBadgeColor = (role) => {
    if (role.toLowerCase().includes('nurse')) return 'bg-green-100 text-green-800';
    if (role.toLowerCase().includes('teacher')) return 'bg-blue-100 text-blue-800';
    if (role.toLowerCase().includes('principal')) return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  };

  // Admin login form 
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center py-8">
        <div className="max-w-md w-full mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">CHS</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access</h1>
              <p className="text-gray-600">Faculty Management Portal</p>
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Administrator Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="admin@chingaboys.edu"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Access Code
                </label>
                <input
                  type="password"
                  name="specialCode"
                  value={loginData.specialCode}
                  onChange={handleLoginChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter special code"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium"
              >
                Access Faculty Portal
              </button>
            </form>

            <div className="mt-6 text-xs text-gray-500">
              <p className="mb-2">Authorized Administrators:</p>
              <div className="space-y-1">
                <p>• Principal, Deputy Principals, Dean of Studies</p>
                <p>• For demo: admin@chingaboys.edu / ADMIN123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Faculty Management</h1>
            <p className="text-gray-600">Manage all school personnel and their login credentials</p>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Logout
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('view')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'view'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                View Personnel
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'add'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Add Personnel
              </button>
            </div>
          </div>

          {/* View Personnel Tab */}
          {activeTab === 'view' && (
            <div>
              <div className="grid gap-6">
                {personnel.map((person) => (
                  <div key={person.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(person.role)}`}>
                              {person.role}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Department:</span> {person.department}
                          </div>
                          <div>
                            <span className="font-medium">Email:</span> {person.email}
                          </div>
                          <div>
                            <span className="font-medium">Phone:</span> {person.phone}
                          </div>
                          <div>
                            <span className="font-medium">Personnel ID:</span> {person.id}
                          </div>
                          <div>
                            <span className="font-medium">Date Joined:</span> {person.dateJoined}
                          </div>
                          <div>
                            <span className="font-medium">Status:</span> 
                            <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              {person.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                          <h4 className="font-semibold text-gray-800 mb-2">Login Credentials</h4>
                          <div className="text-sm text-gray-600">
                            <div><span className="font-medium">Login ID:</span> <code className="bg-gray-100 px-2 py-1 rounded">{person.loginId}</code></div>
                            <div className="mt-1"><span className="font-medium">Portal Access:</span> 
                              {person.role.toLowerCase().includes('nurse') && <span className="text-green-600"> Health Portal</span>}
                              {person.role.toLowerCase().includes('teacher') && <span className="text-blue-600"> Teachers Portal</span>}
                              {person.role.toLowerCase().includes('principal') && <span className="text-purple-600"> Admin Portal</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Personnel Tab */}
          {activeTab === 'add' && (
            <div>
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <p className="font-medium">{submitStatus.message}</p>
                  {submitStatus.loginId && (
                    <p className="text-sm mt-2">The login credentials have been generated. Please share this with the new personnel.</p>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={newPersonnel.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                    <select
                      name="role"
                      value={newPersonnel.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Role</option>
                      <option value="Mathematics Teacher">Mathematics Teacher</option>
                      <option value="English Teacher">English Teacher</option>
                      <option value="Science Teacher">Science Teacher</option>
                      <option value="History Teacher">History Teacher</option>
                      <option value="Physical Education Teacher">Physical Education Teacher</option>
                      <option value="School Nurse">School Nurse</option>
                      <option value="Principal">Principal</option>
                      <option value="Vice Principal">Vice Principal</option>
                      <option value="Administrator">Administrator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                    <select
                      name="department"
                      value={newPersonnel.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="English">English</option>
                      <option value="Sciences">Sciences</option>
                      <option value="Social Studies">Social Studies</option>
                      <option value="Physical Education">Physical Education</option>
                      <option value="Health Services">Health Services</option>
                      <option value="Administration">Administration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={newPersonnel.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={newPersonnel.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specializations</label>
                    <input
                      type="text"
                      name="specializations"
                      value={newPersonnel.specializations}
                      onChange={handleInputChange}
                      placeholder="e.g., Algebra, Pediatric Care, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                  <textarea
                    name="qualifications"
                    value={newPersonnel.qualifications}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Educational background, certifications, etc."
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
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding Personnel...
                      </span>
                    ) : (
                      'Add Personnel'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}