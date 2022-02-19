import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddVideo } from "../../../atoms/create/addVideo";

import { VideoBasic } from "./createMotivation";
import { useState, useEffect } from "react";
import axios from "axios";

type CreateOtherType = {
  setColor: Function;
};

export const CreateOther = (props: CreateOtherType) => {
  const { setColor } = props;

  const [video, setVideo] = useState("");
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

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
      })
      .catch((err) => {
        console.log(err.response.data);
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
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="動画区分"
                            name="interview_title"
                            placeholder=""
                            setValue={setLabel}
                          />
                          <BasicInput
                            title="動画タイトル"
                            name="interview_relationship"
                            placeholder=""
                            setValue={setTitle}
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
