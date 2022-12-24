import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //basic
import SwiperCore, { Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const SwiperLodation = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      navigation={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        768: {
          slidesPerView: 7,
        },
      }}
    >
      <div>
        <SwiperSlide>전체</SwiperSlide>
        <SwiperSlide>서울</SwiperSlide>
        <SwiperSlide>경기</SwiperSlide>
        <SwiperSlide>인천</SwiperSlide>
        <SwiperSlide>강원</SwiperSlide>
        <SwiperSlide>충북</SwiperSlide>
        <SwiperSlide>충남</SwiperSlide>
        <SwiperSlide>세종</SwiperSlide>
        <SwiperSlide>대전</SwiperSlide>
        <SwiperSlide>전북</SwiperSlide>
        <SwiperSlide>경북</SwiperSlide>
        <SwiperSlide>대구</SwiperSlide>
        <SwiperSlide>울산</SwiperSlide>
        <SwiperSlide>경남</SwiperSlide>
        <SwiperSlide>부산</SwiperSlide>
        <SwiperSlide>광주</SwiperSlide>
        <SwiperSlide>전남</SwiperSlide>
        <SwiperSlide>제주</SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SwiperLodation;
