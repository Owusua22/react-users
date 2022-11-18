import React, {useState}from 'react';
import { Card,Col, Button , Modal } from "react-bootstrap";
import EditStudent from './EditStudent';

const Student = (props) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleDelete =(e) => {
    e.preventDefault();
    props.deleteUser(props.userData.id)
}

    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>< EditStudent  userData={props.userData} editStudent ={props.editStudent} closeModal ={handleClose} /> </Modal.Body>
       
      </Modal>
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
       
        <Button variant="success" size="sm" onClick={handleShow}>Edit</Button>
        <Button variant="danger" size="sm" style={{marginLeft: "20px"}} onClick={handleDelete}> Delete </Button>
      </Card.Body>
    </Card>
        </Col>
        </>
    );
}

export default Student;
