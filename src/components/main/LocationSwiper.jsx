import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //basic
import SwiperCore, { Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import LocationCategory from "./LocationCategory";
//redux
import { useDispatch } from "react-redux";
import { __postRooms } from "../../redux/modules/roomsSlice";

SwiperCore.use([Navigation]);

const LocationSwiper = () => {
  //상수함수 -> 컴포넌트(컨트롤에 가까운)를 하나 생성해서 그 안에서 관리를 해주는 것이 좋다!
  const category = LocationCategory();
  const dispatch = useDispatch();

  const onClickLocationNameHandler = (locaionItem) => {
    //console.log("locaionItem 클릭 확인", locaionItem);
    const newLocationCategoty = {
      category: locaionItem,
    };
    dispatch(__postRooms(newLocationCategoty));
  };

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      navigation={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        768: {
          slidesPerView: 10,
        },
      }}
    >
      <div>
        {category.map((itme, index) => (
          <SwiperSlide
            key={index}
            onClick={() => onClickLocationNameHandler(itme)}
          >
            {itme}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default LocationSwiper;
