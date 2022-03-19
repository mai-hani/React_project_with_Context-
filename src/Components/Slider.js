import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import '../style.css'
import { Carousel } from 'react-bootstrap'
import img1 from '../photos/alejandro-escamilla-BbQLHCpVUqA-unsplash.jpg'
import img2 from '../photos/christin-hume-hBuwVLcYTnA-unsplash.jpg'
import img3 from '../photos/jonathan-farber-TwQ0z1BgjCE-unsplash.jpg'
const Slider = () => {
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SouQ store has Iphones</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>SouQ store has Laptops</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>SouQ store has Tablets</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Slider
