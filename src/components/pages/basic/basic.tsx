import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import { BasicInput } from "../../atoms/create/basicInput";
import { LadioInput } from "../../atoms/create/ladioInput";
import { InputButton } from "../../atoms/create/inputButton";
import { SelectDay } from "../../atoms/create/selectDay";
import { AddImage } from "../../atoms/create/addImage";
import { AddImageSelected } from "../../atoms/create/addImageSelected";

type CreateBasicType = {
  setColor: Function;
};

export const CreateBasic = (props: CreateBasicType) => {
  const { setColor } = props;

  const [idPhoto, setIdPhoto] = useState("");
  const [idPhotoPre, setIdPhotoPre] = useState("");
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
  const [update, setUpdate] = useState(false);
  const [userId, setUserId] = useState("") 

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("basicN");

    axios
      .get("http://127.0.0.1:8000/onepage/basic/", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        if (res.data.length === 1) {
          setUpdate(true);
          setIdPhotoPre(res.data[0].id_photo);
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
        setUpdate(false);
      });
  }, []);

  useEffect(() => {
    setIdPhoto(idPhotoPre.substr(38));
  }, [idPhotoPre]);

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("id_photo", idPhoto);
    data.append("first_name_kanji", first_kanji);
    data.append("last_name_kanji", last_kanji);
    data.append("first_name_kana", first_kana);
    data.append("last_name_kana", last_kana);
    data.append("gender", gender);
    data.append("birthday_year", birth_y);
    data.append("birthday_month", birth_m);
    data.append("birthday_day", birth_d);
    data.append("mailaddress", mail);
    data.append("phonenumber", phone);

    if (update === false) {
      axios
        .post("http://127.0.0.1:8000/onepage/basic/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      axios
        .put(`http://127.0.0.1:8000/onepage/basic/${userid}/`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <BInfromation>
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>基本情報</h5>
                    <span>基本情報を入力してください</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div>
                      {update ? (
                        <AddImageSelected
                          title="ファイルを選択"
                          labels="証明写真をアップロード"
                          accept="image/*"
                          setValue={setIdPhoto}
                          image={idPhotoPre}
                        />
                      ) : (
                        <AddImage
                          title="ファイルを選択"
                          labels="証明写真をアップロード"
                          accept="image/*"
                          setValue={setIdPhoto}
                        />
                      )}
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="漢字姓"
                          name="firstname_kanji"
                          placeholder=""
                          setValue={setFirst_kanji}
                          value={first_kanji}
                        />
                        <BasicInput
                          title="漢字名"
                          name="lastname_kanji"
                          placeholder=""
                          setValue={setLast_kanji}
                          value={last_kanji}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="カナ姓"
                          name="firstname_kana"
                          placeholder=""
                          setValue={setFirst_kana}
                          value={first_kana}
                        />
                        <BasicInput
                          title="カナ姓"
                          name="lastname_kana"
                          placeholder=""
                          setValue={setLast_kana}
                          value={last_kana}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <LadioInput
                          label="性別"
                          first="男性"
                          second="女性"
                          third="回答なし"
                          setValue={setGender}
                          checked={gender}
                        />
                        <SelectDay
                          title="生年月日"
                          year="birth_year"
                          month="birth_month"
                          day="birth_day"
                          dayflag={true}
                          setYear={setBirth_y}
                          setMonth={setBirth_m}
                          setDay={setBirth_d}
                          valueYear={birth_y}
                          valueMonth={birth_m}
                          valueDay={birth_d}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="携帯電話番号"
                          name="cellphone"
                          placeholder="XXX-XXXX"
                          setValue={setPhone}
                          value={phone}
                        />
                        <BasicInput
                          title="メールアドレス"
                          name="e-mail"
                          placeholder="xxxxxxxx@xxx.xxx"
                          setValue={setMail}
                          value={mail}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <InputButton onClickEvent={createData} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </BInfromation>
  );
};

export const BInfromation = styled.div`
  box-sizing: border-box;
  width: 80%;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;

  .basic {
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
    flex-basis: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 100%;

    &-information {
      .basicBox {
        color: rgba(0, 0, 0, 0.87);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 0px;
        overflow-wrap: break-word;
        background-color: rgb(255, 255, 255);
        background-clip: border-box;
        border: 0px solid rgba(0, 0, 0, 0.125);
        border-radius: 1rem;
        box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
        height: 100%;

        &-root {
          padding: 26px;
          opacity: 1;
          background: transparent;
          color: rgb(52, 71, 103);
          width: 100%;
        }

        &-container {
          opacity: 1;
          background: transparent;
          color: rgb(52, 71, 103);
        }

        &-title {
          line-height: 0;
          opacity: 1;
          background: transparent;
          color: rgb(52, 71, 103);

          h5 {
            margin: 0px;
            font-size: 1.25rem;
            line-height: 1.375;
            font-family: Roboto, Helvetica, Arial, sans-serif;
            letter-spacing: 0em;
            opacity: 1;
            text-transform: none;
            vertical-align: unset;
            text-decoration: none;
            color: rgb(52, 71, 103);
            font-weight: 700;
          }

          span {
            margin: 0px;
            font-family: Roboto, Helvetica, Arial, sans-serif;
            font-size: 0.875rem;
            line-height: 1.5;
            letter-spacing: 0.02857em;
            opacity: 1;
            text-transform: none;
            vertical-align: unset;
            text-decoration: none;
            color: rgb(103, 116, 142);
            font-weight: 400;
          }
        }

        &-item {
          margin-top: 24px;
          opacity: 1;
          background: transparent;
          color: rgb(52, 71, 103);
          display: flex;
          flex-direction: column;
          justify-content: center;

          &-containt {
            box-sizing: border-box;
            display: flex;
            justify-content: start;
            margin-top: -24px;
            width: calc(100% + 24px);
            margin-left: -24px;
          }
        }
      }
    }
  }
`;
