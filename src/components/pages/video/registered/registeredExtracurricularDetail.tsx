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

export const RegisteredExtracurricularDetail = (
  props: CreateChronologyType
) => {
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
    setColor("extraN");

    if (state == null) {
      navigate("/dashboard/registered/extracurricular");
    } else {
      axios
        .get(`http://127.0.0.1:8000/onepage/extra/${state.extra_id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setVideo(res.data.extra_file);
          setTitle(res.data.extra_title);
          setSub(res.data.extra_get);
          setText(res.data.extra_text);
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
    data.append("extra_file", video);
    data.append("extra_title", title);
    data.append("extra_get", sub);
    data.append("extra_text", text);

    console.log(data);

    axios
      .put(`http://127.0.0.1:8000/onepage/extra/${state.extra_id}/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/extracurricular");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/extracurricular");
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
                      <h5>ガクチカ</h5>
                      <span>
                        あなたが学生時代に力を入れたことに関する情報を入力してください
                      </span>
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
                            title="動画タイトル"
                            name="extracurricular_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <BasicInput
                            title="その経験を通じて得たもの"
                            name="extracurricular_get"
                            placeholder=""
                            setValue={setSub}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="extracurricular_text"
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
