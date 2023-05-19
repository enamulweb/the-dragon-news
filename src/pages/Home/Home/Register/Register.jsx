import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Register = () => {
const [accept,setAccept] = useState(false)

const {AuthCon} = useContext(AuthContext);

const handleCheck = (e) => {
  setAccept(e.target.checked);
}

const handleClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const email= form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const photo = form.photo.value;
  //console.log(name, password,email,photo);
  AuthCon(email, password)
  .then(res=>{
    const registred = res.user;
    //console.log(registred);

  })
  .catch(error=>{
    const errorMessage = error.message;
   // console.log(errorMessage);
  })
}


    return (
        <Container className='mx-auto w-25'>
            <h2>Register here</h2>
            <Form onSubmit={handleClick}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" required placeholder="your photo url" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleCheck} 
        type="checkbox" label= {<>Accept <Link to='/terms'>terms and condition</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}> 
        Register
      </Button>
      <br />
      <Form.Text className="text-danger">
          Already have an Account? <Link to='/login'> Login here</Link>
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Register;
