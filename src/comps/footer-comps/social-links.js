import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import facebook from "../../social-icons/facebook-icon.png";
import youtube from "../../social-icons/youtube-icon.png";
import linkedin from "../../social-icons/linkedin-icon.png";
import twitter from "../../social-icons/x-icon.png";
import tiktok from "../../social-icons/tiktik-icon.png";
import instagram from "../../social-icons/instagram-icon.png";

export default function SocialLinks(){
    return(
        <Container>
            <Row>
                <Col>
                    <a href="https://www.facebook.com">
                        <Image

                        src = {facebook}
                        width={30}
                        height={30}                
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://youtube.com/@sofdevjosh">
                        <Image
                        src = {youtube}  
                        width={30}
                        height={30}              
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://linkedin.com/sofdevjosh">
                    
                        <Image
                        src = {linkedin}  
                        width={30}
                        height={30}              
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.x.com">
                        <Image
                        src = {twitter}   
                        width={30}
                        height={30}           
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.tiktok.com">
                        <Image
                        src = {tiktok}      
                        width={30}
                        height={30}          
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.instagram.com">
                        <Image
                        src = {instagram}       
                        width={30}
                        height={30}         
                        />
                    </a>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>

        </Container>
    )
}