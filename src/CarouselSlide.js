import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselSlide() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/460/files/2023/02/banner-thewhale.jpg"
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH"
            alt="Second slide"
          />
  
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thathashtagshow.com/wp-content/uploads/2023/02/Creed3.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ntvb.tmsimg.com/assets/p21252841_v_h8_aa.jpg?w=960&h=540"
            alt="Forth slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/gallery/posterimage1.jpg"
            alt="Fifth slide"
          />

        </Carousel.Item>
      </Carousel>
    );
  }

  export default CarouselSlide;