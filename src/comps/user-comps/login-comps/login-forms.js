import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../../styles/login-styles/login-form-styles.css";

export default function LoginForm(){
    return(
        <Form id="loginForm">
            <h1 id="loginTitle">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <a href="/sign-up">No Account? Sign Up today!</a>
            </Form.Group>
            <Button variant="primary" type="submit" id="loginButton">
              Submit
            </Button>
        </Form>
    )
}