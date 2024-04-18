// import React from "react";
// import 'swiper/css';
// import { Swiper, SwiperSlide } from "swiper/react";
// import './movieSwiper.css';

// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// // import required modules
// import { EffectCoverflow,Autoplay } from 'swiper/modules';



// const MovieSwiper = ({ slides }) => {
//   return (
//     <Swiper
//       effect={'coverflow'}
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={'auto'}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       coverflowEffect={{
//         rotate: 50,
//         stretch:0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       }}
//       loop={true}
//       modules={{ Autoplay, EffectCoverflow }}
//       className="movieSwiper"
//     >
//       {slides.map((slide) => (
//         <SwiperSlide>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`}
//             alt="Preivew"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './movieCarousel.css';
import { useNavigate } from "react-router-dom";

const MovieCarousel = ({ slides,handleSlideChange }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const handleOnClick=(id)=>{
  //   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       navigate(`/movie-description/${data.imdb_id}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }
  return (
    <div className="swiper">
   
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      arrows={true}
      renderButtonGroupOutside={true}
      centerMode={true}
      containerClass="movieSwiper"
    >
      {slides.map((slide) => (
        <div key={slide.id} className="swiper-slide">
          <img
            src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`}
            alt="Preview"
            onClick={()=>handleSlideChange(slide.id)}
          />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default MovieCarousel;
