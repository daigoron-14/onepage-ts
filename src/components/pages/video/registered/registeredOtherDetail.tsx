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

export const RegisteredOtherDetail = (props: CreateChronologyType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("otherN");

    if (state == null) {
      navigate("/dashboard/registered/other");
    } else {
      axios
        .get(`http://127.0.0.1:8000/onepage/otherd/${state.other_id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setVideo(res.data.other_file);
          setTitle(res.data.other_title);
          setLabel(res.data.other_label);
          setText(res.data.other_text);
        })
        .catch((err) => {
          console.log(err.res.data);
        });
    }
  }, []);

  const createData = () => {
    const data = new FormData();
    data.append("user", userid);
    data.append("other_file", video);
    data.append("other_title", title);
    data.append("other_label", label);
    data.append("other_text", text);

    console.log(data);

    axios
      .put(`http://127.0.0.1:8000/onepage/otherd/${state.other_id}/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/other");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/other");
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
                      <h5>フリー動画</h5>
                      <span>好きな動画に関する情報を入力してください</span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-grid">
                        <AddVideoSelected
                          title="ファイル選択"
                          labels="画像をアップロード"
                          setValue={setVideo}
                          video={video}
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="動画区分"
                            name="extracurricular_get"
                            placeholder=""
                            setValue={setLabel}
                            value={label}
                          />
                          <BasicInput
                            title="動画タイトル"
                            name="extracurricular_title"
                            placeholder=""
                            setValue={setTitle}
                            value={title}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="extracurricular_text"
                          lines="basic-textarea-text"
                          setValue={setText}
                          value={text}
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
