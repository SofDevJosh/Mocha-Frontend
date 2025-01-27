import React from "react";
import { Carousel } from "react-bootstrap";
import '../../styles/home-styles/comp-styles/customers.css'
import customer from "../../media/updated-characters/review-customer-one.jpg";
import customerOne from "../../media/updated-characters/satisfied-customer.jpg";
import customerTwo from "../../media/updated-characters/satisfied-customer-two.jpg";
import Image from "react-bootstrap/Image";
export default function CustomerReview() {
    return(
        <Carousel fade id="reviewsContainer" noControls >
            <Carousel.Item interval={3000} className="items">
              <Image src={customer} className="images"/>
              <Carousel.Caption>
                <h3 className="CustomerNames">Kyle, the Coffee Man</h3>
                <p className="CustomerComments">"I love getting points for playing unrelated coffee games" </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="items">
            <Image src = {customerOne} className="images"/>
              <Carousel.Caption>
                <h3 className="CustomerNames">Abby Tabby</h3>
                <p className ="CustomerComments">"Turns out anagram isn't a pastry item!"</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="items">
            <Image src = {customerTwo} className="images"/>
              <Carousel.Caption>
                <h3 className="CustomerNames">Karen</h3>
                <p className="CustomerComments">
                  "hm"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    )
}