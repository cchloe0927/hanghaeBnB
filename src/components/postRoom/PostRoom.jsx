import React, { useState, useRef } from "react";
import Card from "../elements/Card";
import Button from "../elements/Button";
import classes from "./PostRoom.module.css";
//redux
import { useDispatch } from "react-redux";
import { __postRoom } from "../../redux/modules/roomsSlice";
//axios
import axios from "axios";
export const BACK_API = process.env.REACT_APP_BACKAPI;

const PostRoom = () => {
  const dispatch = useDispatch();
  const fileInput = useRef();
  let location = [
    "",
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "세종",
    "대전",
    "전북",
    "경북",
    "대구",
    "울산",
    "경남",
    "부산",
    "광주",
    "전남",
    "제주",
  ];

  //상태값 관리
  const [imgFiles, setImgFiles] = useState([]);
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [roomsInfoData, setRoomsInfoData] = useState({
    location: "",
    title: "",
    contents: "",
    headDefault: "",
    headMax: "",
    price: "",
    extraPrice: "",
  });

  //함수 핸들러
  const onClickDataHandler = async () => {
    let formData = new FormData();
    console.log("imgFile 상태값:", imgFiles);

    //formData append
    formData.append("MultipartFile", imgFiles);

    const newPostData = {
      location: roomsInfoData.location,
      title: roomsInfoData.title,
      contents: roomsInfoData.contents,
      headDefault: parseInt(roomsInfoData.headDefault),
      headMax: parseInt(roomsInfoData.headMax),
      price: parseInt(roomsInfoData.price),
      extraPrice: parseInt(roomsInfoData.price),
      tags: tagList, //배열 형식
    };

    formData.append(
      "room",
      new Blob([JSON.stringify(newPostData)], { type: "application/json" })
    );

    await axios({
      url: `${BACK_API}/room`,
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    //리덕스 미들웨어 사용방법 TEST
    //dispatch(__postRoom(formData));

    //빈값 처리
    setRoomsInfoData({
      location: "",
      title: "",
      contents: "",
      headDefault: "",
      headMax: "",
      price: "",
      extraPrice: "",
    });
    setTagList([]);
    fileInput.current.value = "";
    console.log("newPostData 확인 :", newPostData);
  };

  const onChangeInputValueHandler = (event) => {
    const { name, value } = event.target;
    setRoomsInfoData({
      ...roomsInfoData,
      [name]: value,
    });
  };

  const onKeyPress = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      event.preventDefault();
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    let newTagList = [...tagList];
    newTagList.push(tagItem);
    setTagList(newTagList);
    setTagItem("");
  };

  const onChangeImgHandler = async (event) => {
    setImgFiles(event.target.files);
  };

  return (
    <div className={classes.wrap}>
      <Card className={classes.box}>
        <header className={classes.header}>
          <h3>숙소 등록</h3>
        </header>

        <div className={classes.input_box}>
          <div className={classes.box_area}>
            <label>지역</label>
            <select
              name="location"
              className={classes.location}
              value={roomsInfoData.location}
              onChange={onChangeInputValueHandler}
            >
              {location.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="title">숙소 이름</label>
            <input
              id="title"
              name="title"
              type="text"
              className={classes.title}
              value={roomsInfoData.title}
              onChange={onChangeInputValueHandler}
            />
          </div>

          <label htmlFor="contents">숙소 소개</label>
          <textarea
            id="contents"
            name="contents"
            type="text"
            className={classes.info}
            value={roomsInfoData.contents}
            onChange={onChangeInputValueHandler}
          />

          <div className={classes.headCounter}>
            <label>최소인원</label>
            <input
              name="headDefault"
              type="number"
              className={classes.head}
              value={roomsInfoData.headDefault}
              onChange={onChangeInputValueHandler}
            />
            <label>최대인원</label>
            <input
              name="headMax"
              type="number"
              className={classes.head}
              value={roomsInfoData.headMax}
              onChange={onChangeInputValueHandler}
            />
            <label>가격</label>
            <input
              name="price"
              type="number"
              className={classes.price}
              value={roomsInfoData.price}
              onChange={onChangeInputValueHandler}
            />
            <label>인원 추가금액</label>
            <input
              name="extraPrice"
              type="number"
              className={classes.price}
              value={roomsInfoData.extraPrice}
              onChange={onChangeInputValueHandler}
            />
          </div>

          <label>이미지 업로드</label>
          <input
            ref={fileInput}
            type="file"
            name="file"
            multiple
            className={classes.img_upload}
            onChange={onChangeImgHandler}
          ></input>

          <label>태그</label>
          <div className={classes.tag_box}>
            {tagList.map((tagItem, index) => {
              return (
                <div key={index} className={classes.tag}>
                  <span>{tagItem}</span>
                </div>
              );
            })}
            <input
              multiple
              className={classes.tag_input}
              type="text"
              placeholder="Press enter to add tags"
              tabIndex={2}
              onChange={(e) => setTagItem(e.target.value)}
              value={tagItem}
              onKeyUp={onKeyPress}
            />
          </div>

          <Button type="button" onClick={onClickDataHandler}>
            등록
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostRoom;
