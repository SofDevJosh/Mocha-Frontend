import React from "react";
import { Container, Form } from "react-bootstrap"; 
import Button from "react-bootstrap/Button";
import LoginForm from "../comps/user-comps/login-comps/login-forms";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function Login() {
    return(
       <Container>
        
        <Row>
        <Col ></Col>
        <Col>
            <LoginForm/>
        </Col>
        <Col ></Col>

        </Row>
        
       </Container>
    )
}