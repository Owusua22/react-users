import React from 'react';
import { Container ,Row } from 'react-bootstrap';
import Student from './Student';

const Students = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersInfo.map((user) =>{
                        return <Student userData={user} key={user.id} deleteUser={props.deleteUser} editStudent = {props.editStudent}/> 
                    })
                }
            
            </Row>
        </Container>
    );
}

export default Students;
