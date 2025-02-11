import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../styles/obrien-styles/obrienchat.css"

export default function ObrienChat() {

    const [vis, setVis] = useState();
    const handleChange = ()=>{
      setVis('none')
    }

    return (
      <Container id="card" style={{display:vis}}>
      <Row id="chat-header">
        <Col> <p id="obrien-title">OBrien.Ai</p></Col>
        <Col></Col>
        <Col>
          <Button id="exit-btn" onClick={handleChange}><span id="exit-btn-top">x</span></Button>
        </Col>
       
      </Row>
        <Container id="chat-window">
          <ul id="message-list">
            <li className="message">Coming soon..</li>
          </ul>
        </Container>
        <div class="chat-input">
            <input type="text" class="message-input" placeholder="Type your message here"/>
            <button class="send-button" >Send</button>
        </div>
      </Container>
    
    )
}