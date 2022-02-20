import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateExtracurricularType = {
  setColor: Function;
};

export const CreateExtracurricular = (props: CreateExtracurricularType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [get, setGet] = useState("");
  const [text, setText] = useState("");

  const [errVideo, setErrVideo] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errGet, setErrGet] = useState("");
  const [errText, setErrText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("extra_file", video);
    data.append("extra_title", title);
    data.append("extra_get", get);
    data.append("extra_text", text);

    axios
      .post("https://onepage-server.com/onepage/extracurricular/", data, {
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
        setErrVideo(err.ressponse.data.extra_file);
        setErrTitle(err.ressponse.data.extra_title);
        setErrGet(err.ressponse.data.extra_get);
        setErrText(err.ressponse.data.extra_text);
      });
  };

  useEffect(() => {
    setColor("extraN");
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
                      <h5>ガクチカ</h5>
                      <span>
                        あなたが学生時代に力を入れたことに関する情報を入力してください
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
                            name="extracurricular_title"
                            placeholder=""
                            setValue={setTitle}
                            alert={errTitle}
                          />
                          <BasicInput
                            title="その経験を通じて得たもの"
                            name="extracurricular_get"
                            placeholder=""
                            setValue={setGet}
                            alert={errGet}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="extracurricular_text"
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
