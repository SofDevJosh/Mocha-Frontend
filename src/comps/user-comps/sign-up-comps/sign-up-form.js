import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../../styles/signup-styles/signup-form-styles.css";


export default function SignUpForm() {

  //validation
    const User = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: ''
    }

    const [formValue, setFormValue] = useState(User);
    const [errors, setErrors] = useState({});
    const [cleanSubmit, setCleanSubmit] = useState(false);


    function handleChange(e){
      const {name, value} = e.target
      setFormValue({...formValue, [name]: value})
      
    }
    function createUser(e){
      e.preventDefault();
      setErrors(validate(formValue));
      setCleanSubmit(true);

    }

    useEffect(()=>{
      if (Object.keys(errors).length === 0 && cleanSubmit) {
        console.log(formValue)
        //send to the back end
      }
    },[errors])

    function validate(values){
      const err = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.FirstName) {
        err.FirstName = "First Name is required";
      }

      if(!values.LastName) {
        err.LastName = "Last Name is required";
      }

      if(!values.Email) {
        err.Email = "Email is required";
      } else if(!regex.test(values.Email)){
        err.Email = "Not a valid email";
      }

      if(!values.Password) {
        err.Password = "Password is required";
      } else if(values.Password.length < 8) {
        err.Password = "Must be more than 8 characters"
      } else if(values.Password.length > 20) {
        err.Password = "Must not exceed 20 characters"
      }
      return err;



    }




    return(
        <Form id="signupForm" onSubmit={createUser}>
          <h1 id="signupFormTitle">Sign Up</h1>

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control id="FirstNameInput" type="text" placeholder="First Name" name="FirstName" value={formValue.FirstName} onChange={handleChange}/>
            <p>{errors.FirstName}</p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="LastNameInput" type="email" placeholder="Last Name" name="LastName" value={formValue.LastName} />
            <p>{errors.LastName}</p>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control id="CreateEmailInput" type="email" placeholder="Enter email" name="Email" value={formValue.Email}/>
            <p>{errors.Email}</p>
          </Form.Group>
       
          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control id="CreatePasswordInput" type="password" placeholder="Password" />

          </Form.Group>
       
          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control id="CheckPasswordInput" type="password" placeholder="Confirm Password" name="Password" value={formValue.Password}/>
            <p>{errors.Password}</p>
          </Form.Group>

      

        <Form.Group className="mb-3" id="formGridCheckbox">
          <a href="/login">Already have an account? Sign in</a>
        </Form.Group>

        <Button variant="primary" type="submit" id = "signupFormButton">
         <span id="signupFormButtonTop">Sign Up</span>
        </Button>
    </Form>
  ) 
}