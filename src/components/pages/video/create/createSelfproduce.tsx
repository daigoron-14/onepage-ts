import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateSelfproduceType = {
  setColor: Function;
};

export const CreateSelfproduce = (props: CreateSelfproduceType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [strength, setStrength] = useState("");
  const [text, setText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("selfproduce_file", video);
    data.append("selfproduce_title", title);
    data.append("selfproduce_strength", strength);
    data.append("selfproduce_text", text);

    axios
      .post("http://127.0.0.1:8000/onepage/selfproduce/", data, {
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
    setColor("selfproduceN");
  });

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
                      <h5>自己PR</h5>
                      <span>自己PRに関する情報を入力してください</span>
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
                            name="selfproduce_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <BasicInput
                            title="あなたの強み"
                            name="selfproduce_strength"
                            placeholder=""
                            setValue={setStrength}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="動画内容"
                          name="selfproduce_text"
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
