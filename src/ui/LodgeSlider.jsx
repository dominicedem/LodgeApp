import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";

const images = [
  {
    img: "/lodgeImg2.png",
  },
  {
    img: "/lodgeImg1.png",
  },
  {
    img: "/aboutmusic.jpeg",
  },
  {
    img: "/lodgeImg1.png",
  },
  {
    img: "/lodgeImg1.png",
  },
  {
    img: "/aboutmusic.jpeg",
  },
];
const SliderBox = styled.div`
  width: 100%;
`;
const Img = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 90%;
  box-shadow: 0 1px 1rem 0.5rem #0001;
`;
export default function LodgeSlider({ radius }) {
  return (
    <>
      <SliderBox>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((val, ind) => (
            <SwiperSlide>
              <Link to="/lodgedetails">
                <Img
                  style={radius && { borderRadius: "0" }}
                  key={ind}
                  src={`${val.img}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderBox>
    </>
  );
}
