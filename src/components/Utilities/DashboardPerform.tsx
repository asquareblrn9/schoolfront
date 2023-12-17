import React from 'react'
import { Card, CardBody, Container } from 'react-bootstrap';

const DashboardPerform = () => {
    const students = [
        { id: 1, name: 'John Doe', email:'ade@gmail.com', grade: 'A', joinDate: '2023-01-10', phone:'08064289725' },
        { id: 2, name: 'Jane Smith', email:'ade@gmail.com', grade: 'B', joinDate: '2023-02-15', phone:'08122171074' },
        // ... add more students here
      ];
  return (
    <>
      <section >
        <Container>
        
          <Card className="p-3">
            <h3 className="text-danger">Best Performing Students</h3>
            <CardBody>
              <div className="table-responsive">
              <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th> 
            <th>Join Date</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.grade}</td>
              <td>{student.joinDate}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
              </div>
            </CardBody>
          </Card>
        </Container>
      </section>
    </>
  );
}

export default DashboardPerform