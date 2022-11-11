import React from 'react';
import { Container ,Row } from 'react-bootstrap';
import Student from './Student';

const Students = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersInfo.map((user,index) =>{
                        return <Student userData={user} key={index} /> 
                    })
                }
            
            </Row>
        </Container>
    );
}

export default Students;
