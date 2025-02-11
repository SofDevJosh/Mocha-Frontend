import React from "react";
import SignUpForm from "../comps/user-comps/sign-up-comps/sign-up-form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function SignUp (){
    return(
    <Container>
        
        <Row>
            <Col></Col>
            <Col>
                <SignUpForm/>
            </Col>
            <Col></Col>

            
        </Row>
       
        <Row></Row>
    </Container>
    )
}