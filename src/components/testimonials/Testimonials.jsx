import React from "react";
import "./testimonials.css";
import AV1 from "../../assets/tehpucuk.jpg";

// import Swiper core and required modules
import { Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AV1,
    name: "Ernest Achivier",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus,numquam non tempore ut beatae enim nesciunt illo deleniti rerumrepudiandae, est debitis quibusdam harum dignissimos modi veniam.Rem, laboriosam.",
  },
  {
    avatar: AV1,
    name: "Ernest Achivier",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus,numquam non tempore ut beatae enim nesciunt illo deleniti rerumrepudiandae, est debitis quibusdam harum dignissimos modi veniam.Rem, laboriosam.",
  },
  {
    avatar: AV1,
    name: "Ernest Achivier",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus,numquam non tempore ut beatae enim nesciunt illo deleniti rerumrepudiandae, est debitis quibusdam harum dignissimos modi veniam.Rem, laboriosam.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
