import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";

export const BasicInfromation = () => {
  const [first_kanji, setFirst_kanji] = useState("");
  const [last_kanji, setLast_kanji] = useState("");
  const [first_kana, setFirst_kana] = useState("");
  const [last_kana, setLast_kana] = useState("");
  const [gender, setGender] = useState("");
  const [birth_y, setBirth_y] = useState("----");
  const [birth_m, setBirth_m] = useState("--");
  const [birth_d, setBirth_d] = useState("--");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);

  const [postcard, setPostcard] = useState("");
  const [address, setAddress] = useState("");
  const [houce, setHouce] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");

  const [school, setSchool] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/onepage/basic/", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        if (res.data.length === 1) {
          setFirst_kanji(res.data[0].first_name_kanji);
          setLast_kanji(res.data[0].last_name_kanji);
          setFirst_kana(res.data[0].first_name_kana);
          setLast_kana(res.data[0].last_name_kana);
          setGender(res.data[0].gender);
          setBirth_y(res.data[0].birthday_year);
          setBirth_m(res.data[0].birthday_month);
          setBirth_d(res.data[0].birthday_day);
          setMail(res.data[0].mailaddress);
          setPhone(res.data[0].phonenumber);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get("http://127.0.0.1:8000/onepage/education/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        if (res.data.length === 1) {
          setSchool(res.data[0].school);
          setFaculty(res.data[0].faculty);
          setDepartment(res.data[0].department);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get("http://127.0.0.1:8000/onepage/address/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        if (res.data.length === 1) {
          setPostcard(res.data[0].postcard);
          setAddress(res.data[0].address);
          setHouce(res.data[0].houce);
          setBuilding(res.data[0].building);
          setRoom(res.data[0].room);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    const birthdayY = Number(birth_y);
    const birthdayM = Number(birth_m) - 1;
    const birthdayD = Number(birth_d);
    const birthday = new Date(birthdayY, birthdayM, birthdayD);
    const now = new Date();
    const nowY = now.getFullYear();
    const nowM = now.getMonth();
    const nowD = now.getDate();
    const today = new Date(nowY, nowM, nowD);
    // setAge(Math.floor((today - birthday) / 31536000000));
  }, [phone]);

  return (
    <BasicInfromationBox>
      <div className="basicInformation">
        <div className="header">
          {(gender === "男性" && (
            <div className="header-age">
              <span className="header-age-num">{age}</span>
            </div>
          )) ||
            (gender === "女性" && (
              <div className="header-age-woman">
                <span className="header-age-woman-num">{age}</span>
              </div>
            )) ||
            (gender === "その他" && (
              <div className="header-age-other">
                <span className="header-age-woman-num">{age}</span>
              </div>
            ))}
          <div className="header-name">
            <div className="header-name-containt">
              <span className="header-name-containt-kana">{first_kana}</span>
              <h4 className="header-name-containt-kanji">{first_kanji}</h4>
            </div>
            <div className="header-name-containt">
              <span className="header-name-containt-kana">{last_kana}</span>
              <h4 className="header-name-containt-kanji">{last_kanji}</h4>
            </div>
          </div>
        </div>
        <div className="containt">
          <div className="containt-name">
            <div className="containt-icon">
              <SchoolIcon />
            </div>
            <span className="containt-text">
              {school} {faculty} {department}
            </span>
          </div>
          <div className="containt-name">
            <div className="containt-icon">
              <PhoneIphoneIcon />
            </div>
            <span className="containt-text">{phone}</span>
          </div>
          <div className="containt-name">
            <div className="containt-icon">
              <EmailIcon />
            </div>
            <span className="containt-text">{mail}</span>
          </div>
          <div className="containt-name">
            <div className="containt-icon">
              <HomeIcon />
            </div>
            <div className="containt-address">
              <span className="containt-address-post">〒{postcard}</span>
              <span className="containt-address-name">
                {address}
                {houce}
                {building}
                {room}
              </span>
            </div>
          </div>
        </div>
      </div>
    </BasicInfromationBox>
  );
};

const BasicInfromationBox = styled.div`
  height: 360px;
  width: 100%;
  border-radius: 1rem;
  background-color: #fff;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .header {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    &-age {
      margin-right: 30px;
      height: 70px;
      width: 70px;
      border-radius: 0.75rem;
      background: linear-gradient(
        310deg,
        rgba(33, 82, 255, 0.75),
        rgba(33, 212, 253, 0.75)
      );
      box-shadow: rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem,
        rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &-num {
        color: #fff;
        font-size: 38px;
      }

      &-woman {
        margin-right: 30px;
        height: 70px;
        width: 70px;
        border-radius: 0.75rem;
        background: linear-gradient(
          310deg,
          rgba(255, 33, 33, 0.75),
          rgba(253, 33, 206, 0.75)
        );
        box-shadow: rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem,
          rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &-num {
          color: #fff;
          font-size: 38px;
        }
      }

      &-other {
        margin-right: 30px;
        height: 70px;
        width: 70px;
        border-radius: 0.75rem;
        background: linear-gradient(
          310deg,
          rgba(33, 255, 132, 0.75),
          rgba(253, 246, 33, 0.75)
        );
        box-shadow: rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem,
          rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &-num {
          color: #fff;
          font-size: 38px;
        }
      }
    }

    &-name {
      display: flex;

      &-containt {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 20px;

        &-kana {
          color: rgba(52, 71, 103, 0.5);
        }

        &-kanji {
          padding-top: 3px;
          color: rgb(73, 80, 87);
          font-size: 40px;
          letter-spacing: 0.4rem;
        }
      }
    }
  }

  .containt {
    margin-top: 30px;

    &-name {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      padding-left: 12px;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 45px;
      margin-right: 42px;
      background-color: rgb(73, 80, 87, 0.2);
      color: rgb(97, 105, 114);
      border-radius: 0.75rem;
    }

    &-text {
      color: rgb(73, 80, 87);
      font-size: 18px;
    }

    &-address {
      display: flex;
      flex-direction: column;
      align-content: center;
      color: rgb(73, 80, 87);

      &-post {
        font-size: 14px;
      }

      &-name {
        padding-top: 4px;
      }
    }
  }
`;
