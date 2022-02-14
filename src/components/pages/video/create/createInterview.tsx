import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";
import { useState, useEffect } from "react";
import axios from "axios";

type CreateInterviewType = {
  setColor: Function;
};

export const CreateInterview = (props: CreateInterviewType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [relationship, setRelationship] = useState("");
  const [text, setText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    data.append("user", userid);
    data.append("interview_file", video);
    data.append("interview_title", title);
    data.append("interview_relationship", relationship);
    data.append("interview_text", text);

    axios
      .post("http://127.0.0.1:8000/onepage/interview/", data, {
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
  };

  useEffect(() => {
    setColor("interviewN");
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
                      <h5>インタビュー</h5>
                      <span>
                        あなたに関するインタビュー情報を入力してください
                      </span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-grid">
                        <AddVideo
                          title="ファイル選択"
                          labels="動画をアップロード"
                          setValue={setVideo}
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="動画タイトル"
                            name="interview_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <BasicInput
                            title="インタビューした人との間柄"
                            name="interview_relationship"
                            placeholder=""
                            setValue={setRelationship}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="interview_text"
                          lines="basic-textarea-text"
                          setValue={setText}
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
