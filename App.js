import React, { Component } from 'react';
import { Container,Row,Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
constructor(props){
super(props)
this.state ={
  users:[
    {
      name: "Yaa Yeboah",
      email: "yaa@gmail.com",
      gen: 23,
      id: uuidv4(),
    },
  
    {
      name: "Abimael Kofi",
      email: "kofi@gmail.com",
      gen: 20,
      id: uuidv4(),
    },
    {
      name: "Uriel Opata",
      email: "opa@gmail.com",
      gen: 21,
      id: uuidv4(),
      
    }
]

}
  }
  addNewStudent = (user) => {
    user.id= uuidv4()
    this.setState({
      users:[...this.state.users, user ]
    })
  }
  deleteUser =(id) =>{
    let availableUser = this.state.users.filter(user => user.id !== id)
    this.setState({
      users: availableUser,
    })

  } 
  editStudent = (id, updatedUser)=> {
this.setState({
users: this.state.users.map(user => user.id === id ? updatedUser : user)
})
  }

  render(){
  return (
    <div>
      <Container fluid style={{marginTop:"3rem"}}>
        <Row>
          <Col md ="4">
            <AddStudents addStudent={this.addNewStudent} />
          </Col>
          <Col>
          <Students usersInfo={this.state.users} deleteUser ={this.deleteUser} editStudent ={this.editStudent} />
          </Col>
        </Row>
      </Container>
    </div>
  );}
}

export default App;
