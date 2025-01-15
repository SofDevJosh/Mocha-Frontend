import React from "react";
import { Carousel } from "react-bootstrap";

import customer from "../../media/updated-characters/review-customer-one.jpg";
import customerOne from "../../media/updated-characters/satisfied-customer.jpg";
import customerTwo from "../../media/updated-characters/satisfied-customer-two.jpg";
export default function CustomerReview() {
    return(
        <Carousel fade>
            <Carousel.Item interval={1000}>
              <img src = {customer}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img src = {customerOne}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src = {customerTwo}/>
              <Carousel.Caption>
                <h3>Third slide labl</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    )
}