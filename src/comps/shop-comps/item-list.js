import React from "react";
import NewItem from "./gen-comps/generate-item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import coffee from "../../media/updated-characters/coffee-cup-character-one.jpg"    

export default function ItemList() {
    return(
        <Container>
            <h1>SHOP</h1>
            <Row>
                <Col>
                    <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                </Col>
                <Col>
                    <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                </Col>
                <Col>
                    <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                </Col>
                <Col>

                <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                
                </Col>
                <Col>
                <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                
                </Col>
            </Row>
            <Row>
                <Col>
                
                <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                
                </Col>
                <Col>
                
                <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                </Col>
                <Col>
                
                <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="100pts"
                    
                    />
                </Col>
            </Row>
            
        </Container>
    )
}