import React, { useState, useRef } from "react";
import classes from "./PostRoom.module.css";
import Card from "../elements/Card";
import Button from "../elements/Button";
import LocationOption from "./LocationOption";
import { useNavigate } from "react-router-dom";
//axios
import { post_room } from "../../core/AxiosAPI";

const PostRoom = () => {
  const navigate = useNavigate();
  const fileInput = useRef();
  const location = LocationOption();

  //상태값 관리
  //업로드 했을 때 post가 아닌, 등록 버튼을 눌렀을 때 다른 데이터와 함꼐 post되는 방식
  //따라서 업로드 시에 상태값을 따로 관리해서 변경 된 상태 값을 post 함
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
    console.log("formData 초기 값", formData); //FormData {}
    console.log("imgFile 상태 값:", imgFiles); //FileList에 객체 형식으로 들어감

    //파일 append
    for (const key in imgFiles) {
      formData.append("MultipartFile", imgFiles[key]);
    }
    //데이터 append
    formData.append("location", roomsInfoData.location);
    formData.append("title", roomsInfoData.title);
    formData.append("contents", roomsInfoData.contents);
    formData.append("headDefault", roomsInfoData.headDefault);
    formData.append("headMax", roomsInfoData.headMax);
    formData.append("price", roomsInfoData.price);
    formData.append("extraPrice", roomsInfoData.extraPrice);
    formData.append("tags", tagList);

    //form_data 통신
    post_room(formData).then((res) => {
      alert(res.data.msg);
      navigate("/");
    });

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
  };

  const onChangeImgHandler = async (event) => {
    setImgFiles(event.target.files);
  };

  const onChangeInputValueHandler = (event) => {
    const { name, value } = event.target;
    setRoomsInfoData({
      ...roomsInfoData,
      [name]: value,
    });
  };

  const onKeyPressTag = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      event.preventDefault();
      onSubmitTagItemHandler();
    }
  };

  const onSubmitTagItemHandler = () => {
    let newTagList = [...tagList];
    newTagList.push(tagItem);
    setTagList(newTagList);
    setTagItem("");
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
              min="1"
              className={classes.head}
              value={roomsInfoData.headDefault}
              onChange={onChangeInputValueHandler}
            />
            <label>최대인원</label>
            <input
              name="headMax"
              type="number"
              min="1"
              className={classes.head}
              value={roomsInfoData.headMax}
              onChange={onChangeInputValueHandler}
            />
            <label>가격</label>
            <input
              name="price"
              type="number"
              min="1"
              className={classes.price}
              value={roomsInfoData.price}
              onChange={onChangeInputValueHandler}
            />
            <label>인원 추가금액</label>
            <input
              name="extraPrice"
              type="number"
              min="1"
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
              onKeyUp={onKeyPressTag}
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
