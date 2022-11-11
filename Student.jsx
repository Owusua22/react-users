import React from 'react';
import { Card,Col, Button } from "react-bootstrap";

const Student = (props) => {
    return (
        <Col md="4" style={{marginTop: "3rem"}}>
             <Card style={{ width: '14rem' }}>
      <Card.Body>
        <Card.Title>List of Students</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Students Data</Card.Subtitle>
        <Card.Text>
        <p>
                name: {props.userData.name}
            </p>
            <p>
                email: {props.userData.email}
            </p>
            <p>
                Gen: {props.userData.gen}
            </p>
          
        </Card.Text>
       
        <Button variant="success" size="sm">Edit</Button>
        <Button variant="danger" size="sm" style={{marginLeft: "20px"}}> Delete </Button>
      </Card.Body>
    </Card>
        </Col>
    );
}

export default Student;
