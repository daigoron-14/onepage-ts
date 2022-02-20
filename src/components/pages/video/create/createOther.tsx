import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateOtherType = {
  setColor: Function;
};

export const CreateOther = (props: CreateOtherType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [video, setVideo] = useState("");
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [errVideo, setErrVideo] = useState("");
  const [errLabel, setErrLabel] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errText, setErrText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("other_file", video);
    data.append("other_title", title);
    data.append("other_label", label);
    data.append("other_text", text);

    axios
      .post("https://onepage-server.com/onepage/other/", data, {
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
        setErrVideo(err.ressponse.data.other_file);
        setErrTitle(err.ressponse.data.other_title);
        setErrLabel(err.ressponse.data.other_label);
        setErrText(err.ressponse.data.other_text);
      });
  };

  useEffect(() => {
    setColor("otherN");
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
                      <h5>フリー動画</h5>
                      <span>お好きな動画情報を入力してください</span>
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
                            title="動画区分"
                            name="other_label"
                            placeholder=""
                            setValue={setLabel}
                            alert={errLabel}
                          />
                          <BasicInput
                            title="動画タイトル"
                            name="other_title"
                            placeholder=""
                            setValue={setTitle}
                            alert={errTitle}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="other_text"
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
