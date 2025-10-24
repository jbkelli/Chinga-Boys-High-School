# Backend API Documentation - Student Portal

This document outlines the API endpoints and data structures needed for the Student Portal implementation.

## Table of Contents
1. [Authentication](#authentication)
2. [Student Profile](#student-profile)
3. [Financial Information](#financial-information)
4. [Academic Records](#academic-records)
5. [Health Records](#health-records)
6. [Assignments](#assignments)
7. [Data Structures](#data-structures)

---

## Authentication

### Login
**Endpoint:** `POST /api/student/login`

**Request Body:**
```json
{
  "studentId": "string",
  "password": "string"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE",
  "message": "Login successful",
  "student": {
    "id": "string",
    "registrationNo": "string",
    "fullName": "string"
  }
}
```

**Response (Error - 401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Token Validation
**Endpoint:** `GET /api/student/validate-token`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "valid": true,
  "studentId": "string"
}
```

---

## Student Profile

### Get Student Profile
**Endpoint:** `GET /api/student/profile`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "registrationNo": "string",
    "fullName": "string",
    "gender": "Male/Female",
    "phoneNumber": "string",
    "emailAddress": "string",
    "postalAddress": "string",
    "class": "string (e.g., Form 4 West)",
    "profilePicture": "string (URL or base64)",
    "parentGuardian": {
      "name": "string",
      "phoneNumber": "string",
      "emailAddress": "string"
    },
    "financials": {
      "totalBilled": "number",
      "totalPaid": "number",
      "balance": "number"
    }
  }
}
```

### Update Profile Picture
**Endpoint:** `POST /api/student/profile/picture`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
```
FormData with 'profilePicture' file
```

**Response (Success - 200):**
```json
{
  "success": true,
  "profilePictureUrl": "string",
  "message": "Profile picture updated successfully"
}
```

---

## Financial Information

### Get Financial Summary
**Endpoint:** `GET /api/student/financials/summary`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "totalBilled": "number",
    "totalPaid": "number",
    "balance": "number",
    "currency": "KSh"
  }
}
```

### Get Payment History
**Endpoint:** `GET /api/student/financials/payments`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Query Parameters:**
- `page` (optional): number - Page number for pagination
- `limit` (optional): number - Items per page

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "payments": [
      {
        "id": "string",
        "date": "ISO 8601 date string",
        "amount": "number",
        "receiptNumber": "string",
        "paymentMethod": "string",
        "description": "string",
        "status": "completed/pending/failed"
      }
    ],
    "pagination": {
      "currentPage": "number",
      "totalPages": "number",
      "totalRecords": "number"
    }
  }
}
```

### Get Fee Structure
**Endpoint:** `GET /api/student/financials/fee-structure`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "feeBreakdown": [
      {
        "category": "string (e.g., Tuition)",
        "amount": "number",
        "dueDate": "ISO 8601 date string",
        "status": "paid/unpaid/partial"
      }
    ]
  }
}
```

### Download Receipt
**Endpoint:** `GET /api/student/financials/receipt/:receiptId`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response:** PDF file download

---

## Academic Records

### Get Academic Results
**Endpoint:** `GET /api/student/academics/results`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Query Parameters:**
- `term` (optional): string - Filter by term/semester
- `year` (optional): string - Filter by academic year

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "results": [
      {
        "term": "string",
        "year": "string",
        "subjects": [
          {
            "subjectName": "string",
            "grade": "string",
            "marks": "number",
            "outOf": "number",
            "teacher": "string",
            "comments": "string"
          }
        ],
        "overallGrade": "string",
        "position": "number",
        "totalStudents": "number",
        "gpa": "number"
      }
    ]
  }
}
```

### Get Revision Materials
**Endpoint:** `GET /api/student/academics/materials`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Query Parameters:**
- `subject` (optional): string - Filter by subject
- `type` (optional): string - Filter by material type (notes/pastpapers/etc)

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "materials": [
      {
        "id": "string",
        "title": "string",
        "subject": "string",
        "type": "notes/pastpapers/videos",
        "fileUrl": "string",
        "uploadDate": "ISO 8601 date string",
        "description": "string"
      }
    ]
  }
}
```

### Get Timetable
**Endpoint:** `GET /api/student/academics/timetable`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "timetable": [
      {
        "day": "Monday/Tuesday/etc",
        "periods": [
          {
            "periodNumber": "number",
            "startTime": "string",
            "endTime": "string",
            "subject": "string",
            "teacher": "string",
            "room": "string"
          }
        ]
      }
    ]
  }
}
```

### Download Report Card
**Endpoint:** `GET /api/student/academics/report-card/:termId`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response:** PDF file download

---

## Health Records

### Get Health Records
**Endpoint:** `GET /api/student/health/records`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "medicalHistory": [
      {
        "condition": "string",
        "diagnosisDate": "ISO 8601 date string",
        "status": "active/resolved"
      }
    ],
    "vaccinations": [
      {
        "vaccineName": "string",
        "dateAdministered": "ISO 8601 date string",
        "nextDue": "ISO 8601 date string"
      }
    ],
    "allergies": ["string array"],
    "currentMedications": [
      {
        "medicationName": "string",
        "dosage": "string",
        "frequency": "string"
      }
    ],
    "clinicVisits": [
      {
        "date": "ISO 8601 date string",
        "reason": "string",
        "diagnosis": "string",
        "treatment": "string",
        "followUp": "string"
      }
    ],
    "emergencyContacts": [
      {
        "name": "string",
        "relationship": "string",
        "phoneNumber": "string"
      }
    ]
  }
}
```

---

## Assignments

### Get Assignments List
**Endpoint:** `GET /api/student/assignments`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Query Parameters:**
- `status` (optional): string - Filter by status (pending/submitted/graded)
- `subject` (optional): string - Filter by subject

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "assignments": [
      {
        "id": "string",
        "title": "string",
        "subject": "string",
        "description": "string",
        "dueDate": "ISO 8601 date string",
        "status": "pending/submitted/graded",
        "submissionDate": "ISO 8601 date string (if submitted)",
        "grade": "string (if graded)",
        "feedback": "string (if graded)",
        "attachments": [
          {
            "fileName": "string",
            "fileUrl": "string"
          }
        ]
      }
    ]
  }
}
```

### Get Assignment Details
**Endpoint:** `GET /api/student/assignments/:assignmentId`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "subject": "string",
    "teacher": "string",
    "description": "string",
    "instructions": "string",
    "dueDate": "ISO 8601 date string",
    "maxMarks": "number",
    "status": "pending/submitted/graded",
    "submissionDate": "ISO 8601 date string",
    "grade": "string",
    "feedback": "string",
    "attachments": ["array of file objects"]
  }
}
```

### Submit Assignment
**Endpoint:** `POST /api/student/assignments/:assignmentId/submit`

**Headers:**
```
Authorization: Bearer JWT_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
```
FormData with:
- 'files' (optional): array of files
- 'comments' (optional): string
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Assignment submitted successfully",
  "submissionId": "string",
  "submissionDate": "ISO 8601 date string"
}
```

---

## Data Structures

### Student Data Object (Frontend State)
```javascript
{
  registrationNo: 'string',
  fullName: 'string',
  gender: 'string',
  phoneNumber: 'string',
  emailAddress: 'string',
  postalAddress: 'string',
  class: 'string',
  profilePicture: 'string (URL)',
  parentGuardian: {
    name: 'string',
    phoneNumber: 'string',
    emailAddress: 'string'
  },
  financials: {
    totalBilled: number,
    totalPaid: number,
    balance: number
  },
  academics: {
    results: array,
    revisionMaterials: array
  },
  health: {
    records: array
  },
  assignments: array
}
```

---

## Error Handling

All API endpoints should return consistent error responses:

**Format:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

**Common Error Codes:**
- `AUTH_FAILED` - Authentication failure
- `TOKEN_EXPIRED` - JWT token has expired
- `INVALID_TOKEN` - Invalid JWT token
- `NOT_FOUND` - Resource not found
- `VALIDATION_ERROR` - Input validation failed
- `SERVER_ERROR` - Internal server error
- `UNAUTHORIZED` - User not authorized for this action

---

## Authentication & Security

1. **JWT Token**: Use JWT for authentication. Token should be stored in `localStorage` on the client side.

2. **Token Expiry**: Implement token refresh mechanism if needed.

3. **HTTPS**: All API calls should be over HTTPS in production.

4. **CORS**: Configure CORS to allow requests from the frontend domain.

5. **Rate Limiting**: Implement rate limiting to prevent abuse.

6. **Input Validation**: Validate all inputs on the backend.

7. **File Upload Security**: 
   - Validate file types and sizes
   - Scan for malware
   - Store files securely

---

## Testing Recommendations

1. **Unit Tests**: Test all API endpoints
2. **Integration Tests**: Test complete workflows
3. **Load Tests**: Test under high traffic
4. **Security Tests**: Test for common vulnerabilities

---

## Additional Notes

- All dates should be in ISO 8601 format
- Currency is KSh (Kenyan Shillings)
- File uploads should have maximum size limits
- Implement pagination for large datasets
- Add logging for all API requests
- Implement proper error tracking

---

For questions or clarifications, please contact the frontend development team.
