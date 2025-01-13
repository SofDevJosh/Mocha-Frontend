import React from "react";
import { Carousel } from "react-bootstrap";

const imageOne = "../../media/review-customer-one.jfif"

export default function CustomerReview() {
    return(
        <Carousel fade>
            <Carousel.Item interval={1000}>
              <img src = {imageOne}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img src = {imageOne}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src = {imageOne}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    )
}