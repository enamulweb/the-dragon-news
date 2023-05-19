import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Login = () => {
const { SignIn} = useContext(AuthContext)
const navigate = useNavigate()
const location =useLocation();
const from = location.state?.from?.pathname || '/category/0'

const handleSign = (e) => {
  e.preventDefault();
  const form = event.target;
  const email= form.email.value;
  const password = form.password.value;
  SignIn(email, password)
  .then(result => {
    const value = result.user;
    console.log(value);
    navigate(from,{replace: true})
  })
  .catch(err =>{
    const errorMessage = err.message;
    console.log(errorMessage);
  })
}

    return (
        <>
    
<Container className='mx-auto w-25'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSign}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Accept terms and condition" /> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-danger">
          Don't have an Account? <Link to='/register'> Register here</Link>
        </Form.Text>
    </Form>
        </Container>
        </>
        
    );
};

export default Login;