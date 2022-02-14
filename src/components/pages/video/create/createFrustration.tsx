import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateFrustrationType = {
  setColor: Function;
};

export const CreateFrustration = (props: CreateFrustrationType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState("");
  const [text, setText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    data.append("user", userid);
    data.append("frustration_file", video);
    data.append("frustration_title", title);
    data.append("frustration_event", event);
    data.append("frustration_text", text);

    axios
      .post("http://127.0.0.1:8000/onepage/frustration/", data, {
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
    setColor("frustN");
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
                      <h5>挫折経験</h5>
                      <span>
                        あなたが今までに経験した挫折に関する情報を入力してください
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
                            name="frustration_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <BasicInput
                            title="挫折したイベント"
                            name="frustration_event"
                            placeholder=""
                            setValue={setEvent}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="frustration_text"
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
