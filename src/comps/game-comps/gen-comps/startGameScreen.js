import React from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";


export default function StartGameScreen({gameName, v1, v2, v3, v4, rules}) {
    return(
        <Container>
           <Row>
            <h1>{gameName}</h1>
           </Row>
           <Row>
            <Form.Select>
                <option>Select a Game mode</option>
                <option>{v1}</option>
                <option>{v2}</option>
                <option>{v3}</option>
                <option>{v4}</option>
            </Form.Select>
           </Row>
           <Row>
            {rules}
           </Row>
           <Row>
            <Button>Play!</Button>
           </Row>


        </Container>
    )
    
}