import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../../styles/login-styles/login-form-styles.css";




export default function LoginForm(){
    //validation
    const User = {
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
        <Form id="loginForm" onSubmit={createUser}>
            <h1 id="loginTitle">Login</h1>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="EmailInput" name="Email" placeholder="your@email.com" value={formValue.Email} onChange={handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <p className="errorMessage">{errors.Email}</p>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control id="PasswordInput" name="Password" placeholder="Password" value={formValue.Password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <a href="/sign-up">No Account? Sign Up today!</a>
            </Form.Group>
            <p className="errorMessage">{errors.Password}</p>
            <Button variant="primary" type="submit" id="loginButton">
             <span id="loginButtonTop">Log In</span> 
            </Button>
        </Form>
    )
}