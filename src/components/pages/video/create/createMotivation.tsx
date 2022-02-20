import styled from "styled-components";

import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateMotivationType = {
  setColor: Function;
};

export const CreateMotivation = (props: CreateMotivationType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");

  const [errVideo, setErrVideo] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errCompany, setErrCompany] = useState("");
  const [errText, setErrText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("motivation_file", video);
    data.append("motivation_title", title);
    data.append("motivation_company", company);
    data.append("motivation_text", text);

    axios
      .post("https://onepage-server.com/onepage/motivation/", data, {
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
        setErrVideo(err.ressponse.data.motivation_file);
        setErrTitle(err.ressponse.data.motivation_title);
        setErrCompany(err.ressponse.data.motivation_company);
        setErrText(err.ressponse.data.motivation_text);
      });
  };

  useEffect(() => {
    setColor("motivationN");
  }, []);

  return (
    <VideoBasic>
      <div className="basic">
        <div style={{ marginTop: "80px" }}>
          <div className="basic-information">
            <form action="">
              <div className="basicBox">
                <div className="basicBox-root">
                  <div className="basicBox-container">
                    <div className="basicBox-title">
                      <h5>志望動機</h5>
                      <span>企業ごとの志望動機を入力してください</span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-grid">
                        <AddVideo
                          title="ファイル選択"
                          labels="動画をアップロード"
                          setValue={setVideo}
                          alert={errVideo}
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="動画タイトル"
                            name="motivation_title"
                            placeholder=""
                            setValue={setTitle}
                            alert={errTitle}
                          />
                          <BasicInput
                            title="志望企業"
                            name="motivation_company"
                            placeholder="株式会社〇〇"
                            setValue={setCompany}
                            alert={errCompany}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="motivation_text"
                          lines="basic-textarea-text"
                          setValue={setText}
                          alert={errText}
                        />
                      </div>
                    </div>
                  </div>
                  <InputButton onClickEvent={createData} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </VideoBasic>
  );
};

export const VideoBasic = styled.div`
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

          &-grid {
            display: grid;
            grid-template-columns: 1fr 4fr;
            margin-top: -24px;

            &-item {
              display: flex;
              flex-direction: column;
            }
          }

          &-containt {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            margin-top: -24px;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
