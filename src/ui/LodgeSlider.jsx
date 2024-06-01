import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const images = [
  {
    img: "/aboutmusic.jpeg",
  },
  {
    img: "/aboutmusic.jpeg",
  },
  {
    img: "/aboutmusic.jpeg",
  },
  {
    img: "/aboutmusic.jpeg",
  },
  {
    img: "/aboutmusic.jpeg",
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
  box-shadow: 0 0.5rem 1rem 0.5rem #0001;
`;
export default function LodgeSlider() {
  return (
    <>
      <SliderBox>
        <Swiper
          spaceBetween={30}
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
              <Img key={ind} src={`${val.img}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderBox>
    </>
  );
}
