import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateInterviewType = {
  setColor: Function;
};

export const CreateInterview = (props: CreateInterviewType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [relationship, setRelationship] = useState("");
  const [text, setText] = useState("");

  const [errVideo, setErrVideo] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errRelationship, setErrRelationship] = useState("");
  const [errText, setErrText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("interview_file", video);
    data.append("interview_title", title);
    data.append("interview_relationship", relationship);
    data.append("interview_text", text);

    axios
      .post("https://onepage-server.com/onepage/interview/", data, {
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
        setErrVideo(err.ressponse.data.interview_file);
        setErrTitle(err.ressponse.data.interview_title);
        setErrRelationship(err.ressponse.data.interview_relationship);
        setErrText(err.ressponse.data.interview_text);
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
                          alert={errVideo}
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="動画タイトル"
                            name="interview_title"
                            placeholder=""
                            setValue={setTitle}
                            alert={errTitle}
                          />
                          <BasicInput
                            title="インタビューした人との間柄"
                            name="interview_relationship"
                            placeholder=""
                            setValue={setRelationship}
                            alert={errRelationship}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="interview_text"
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
