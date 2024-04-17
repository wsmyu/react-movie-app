import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselSlide() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div style={{ margin:'auto'}}>
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "100%", maxWidth: "100%" }}>
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
              src="https://storage.googleapis.com/rodeofx-webpage-videos/project/images/000-John-Wick-4/banner-john-wick-chapter-four.webp"
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
    </div>
    );
  }

  export default CarouselSlide;