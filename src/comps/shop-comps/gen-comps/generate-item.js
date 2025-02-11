import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../../../styles/shop-styles/buttons.css";


export default function NewItem({image, name, summary, price}){
    return(
        <Card style={{ width: '18rem' }} className="testing" id="ShopCardContainer">
          <Card.Img variant="top" src={image} width="100%" height="275" />
          <Card.Body>
            <Card.Title id="ItemName">{name}</Card.Title>
            <Card.Text id="ItemDes">
             {summary}
            </Card.Text>
            <Row>
                <Card.Text id="price">{price}</Card.Text>
                <Button id="BuyButton">
                 <span id="BuyButtonTop">BUY</span>
                </Button>
                
            </Row>
           
          </Card.Body>
        </Card>
    )
}