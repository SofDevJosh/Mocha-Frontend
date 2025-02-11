import React from "react";
import NewItem from "./gen-comps/generate-item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import coffee from "../../media/updated-characters/coffee-cup-character-one.jpg"    
import caramel from '../../media/barista-woman/caramel-macchiato.jfif'
import icedOne from '../../media/barista-woman/iced-coffee.jfif'
import pastry from '../../media/barista-woman/pastry.jfif'
import icedFour from '../../media/barista-woman/iced-coffee-four.jfif'
import brew from '../../media/barista-woman/macciato-two.jfif'

export default function ItemList() {
    return(
        <Container>
            <h1 id="ShopTitle">SHOP</h1>
            <Row>
                <Col>
                    <NewItem
                    image={coffee}
                    name="Expresso"
                    summary="Gives you an extra 10 seconds."
                    price="10pts"
                    
                    />
                </Col>
                <Col>
                    <NewItem
                    image={caramel}
                    name="Caramel Delight"
                    summary="Gain 5 extra points."
                    price="50pts"
                    
                    />
                </Col>
                <Col>
                    <NewItem
                    image={icedOne}
                    name="Tofu Deluxe"
                    summary="Ew, but gives you 10 points."
                    price="100pts"
                    
                    />
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewItem
                    image={pastry}
                    name="Crousant"
                    summary="Multiplier: 2x"
                    price="500pts"
                    
                    />
                </Col>
                <Col>

                <NewItem
                    image={brew}
                    name="Lux De Caru"
                    summary="Multiplier: 4x"
                    price="1500pts"
                    
                    />
                
                </Col>
                <Col>
                <NewItem
                    image={icedFour}
                    name="Choco Latto"
                    summary=" Try it with a cherry on top!"
                    price="50pts"
                    
                    />
                
                </Col>
            </Row>
          
            
        </Container>
    )
}