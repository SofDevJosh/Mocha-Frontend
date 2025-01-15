import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../../../styles/buttons.css";


export default function NewItem({image, name, summary, price}){
    return(
        <Card style={{ width: '18rem' }} className="testing">
          <Card.Img variant="top" src={image} width="100%" height="275" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {summary}
            </Card.Text>
            <Row>
                <Card.Text>{price}</Card.Text>
                <Button >BUY</Button>
                
            </Row>
           
          </Card.Body>
        </Card>
    )
}