import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideoSelected } from "../../../atoms/create/addVideoSelected";

import { VideoBasic } from "../create/createMotivation";
import { SelectDay } from "../../../atoms/create/selectDay";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type CreateChronologyType = {
  setColor: Function;
};

export const RegisteredMotivationDetail = (props: CreateChronologyType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("motivationN");

    if (state == null) {
      navigate("/dashboard/registered/motivation");
    } else {
      axios
        .get(`http://127.0.0.1:8000/onepage/motiv/${state.motivation_id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setVideo(res.data.motivation_file);
          setTitle(res.data.motivation_title);
          setSub(res.data.motivation_company);
          setText(res.data.motivation_text);
        })
        .catch((err) => {
          console.log(err.res.data);
        });
    }
  }, []);

  const createData = () => {
    const data = new FormData();
    data.append("user", userid);
    data.append("motivation_file", video);
    data.append("motivation_title", title);
    data.append("motivation_company", sub);
    data.append("motivation_text", text);

    console.log(data);

    axios
      .put(
        `http://127.0.0.1:8000/onepage/motiv/${state.motivation_id}/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        }
      )
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/motivation");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/motivation");
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
                      <h5>志望動機</h5>
                      <span>企業ごとの志望動機を入力してください</span>
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
                            name="motivation_title"
                            placeholder=""
                            setValue={setTitle}
                            value={title}
                          />
                          <BasicInput
                            title="志望企業"
                            name="motivation_company"
                            placeholder="株式会社〇〇"
                            setValue={setSub}
                            value={sub}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="motivation_text"
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
