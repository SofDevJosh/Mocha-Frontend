import React from "react";
import "../styles/footer.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialLinks from "./footer-comps/social-links";


export default function Footer () {
    return(
        <Container id="footer" fluid>
            <Row>
                <Col>
                    <img
                    src="../media/coffee-logo/coffee-logo.jpg"
                    alt="logo"
                    width = {150}
                    height = {150}
                    className="logoImage text-center"
                    />
                </Col>
                <Col>
                    <ul className="listStyling">
                        <li>list item with info column one</li>
                        <li>list item with info column one</li>
                       
                    </ul>
                </Col>
                <Col>
                    <ul className="listStyling">
                        <li>list item with info column two</li>
                        
                    </ul>


                </Col>
                <Col>
                    <ul className="listStyling">
                        <li>final one maybe</li>
                      
                    </ul>
                </Col>
            </Row>
            <Row>
                <Row >
                    <Col md={5}></Col>
                    <Col md={6}>
                        <SocialLinks/>
                    </Col>
                    <Col></Col>
                    
                       
                </Row>
                <Row>

                    
                        <Col>Copy rights</Col>
                   
                </Row>

            </Row>




        </Container>
    )
}