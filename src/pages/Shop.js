import React from "react";
import ItemList from "../comps/shop-comps/item-list";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Shop() {
    return(
        <Container id="parent">
            
            <ItemList/>
            
            
            
        </Container>
    )
}