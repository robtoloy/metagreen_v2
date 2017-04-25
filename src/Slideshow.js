import React, { Component } from 'react'
import Slider from 'react-slick'

import slideOne from './img/home-3.jpg'
import slideTwo from './img/graph.jpg'
import slideThree from './img/home-1.jpg'

class Slideshow extends Component {
  render(){
    const settings = {
	    autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slideshow">
      	<Slider {...settings}>
        	<div><img className="mySlides" src={slideOne} /></div>
          <div><img className="mySlides" src={slideTwo} /></div>
          <div><img className="mySlides" src={slideThree} /></div>
        </Slider>
      </div>
    );
  }
}
export default Slideshow;
