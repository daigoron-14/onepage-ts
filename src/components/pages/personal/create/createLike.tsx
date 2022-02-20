import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddLikeImage } from "../../../atoms/create/addLikeImage";

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateLikeType = {
  setColor: Function;
};

export const CreateLike = (props: CreateLikeType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [like, setLike] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("like_image", image);
    data.append("like_name", like);
    data.append("like_text", text);

    axios
      .post("https://onepage-server.com/onepage/like/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/success")
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    setColor("likeN");
  }, []);

  return (
    <BInfromation>
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>好きなもの</h5>
                    <span>
                      あなたの好きなものに関する情報を入力してください
                    </span>
                  </div>
                  <div className="basicBox-item">
                    <div className="basicBox-item-container">
                      <AddLikeImage
                        title="画像"
                        labels="画像をアップロード"
                        setValue={setImage}
                        accept="image/*"
                      />
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="あなたは何が好きですか?"
                          name="like_name_1"
                          placeholder=""
                          setValue={setLike}
                        />
                        <BasicTextarea
                          title="どうしてそれが好きですか?"
                          name="like_text_1"
                          lines="basic-textarea-text-3"
                          setValue={setText}
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
          padding-left: 24px;

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

          &-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 18px;
          }

          &-containt {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            margin-top: -24px;
            width: 55%;
            flex-shrink: 0;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
