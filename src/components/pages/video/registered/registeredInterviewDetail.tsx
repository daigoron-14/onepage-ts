import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideoSelected } from "../../../atoms/create/addVideoSelected";

import { VideoBasic } from "../../video/create/createMotivation";
import { SelectDay } from "../../../atoms/create/selectDay";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type CreateChronologyType = {
  setColor: Function;
};

export const RegisteredInterviewDetail = (props: CreateChronologyType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("interviewN");

    if (state == null) {
      navigate("/dashboard/registered/extracurricular");
    } else {
      axios
        .get(`https://onepage-server.com/onepage/inter/${state.interview_id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setVideo(res.data.interview_file);
          setTitle(res.data.interview_title);
          setSub(res.data.interview_relationship);
          setText(res.data.interview_text);
        })
        .catch((err) => {
          console.log(err.res.data);
        });
    }
  }, []);

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("interview_file", video);
    data.append("interview_title", title);
    data.append("interview_relationship", sub);
    data.append("interview_text", text);

    console.log(data);

    axios
      .put(`https://onepage-server.com/onepage/inter/${state.interview_id}/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/interview");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/interview");
      });
  };

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
                        <AddVideoSelected
                          title="ファイル選択"
                          labels="動画をアップロード"
                          setValue={setVideo}
                          video={video}
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
                            setValue={setSub}
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
