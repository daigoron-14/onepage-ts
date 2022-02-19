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

export const RegisteredSelfproduceDetail = (props: CreateChronologyType) => {
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
      navigate("/dashboard/registered/selfproduce");
    } else {
      axios
        .get(`https://onepage-server.com/onepage/self/${state.selfproduce_id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setVideo(res.data.selfproduce_file);
          setTitle(res.data.selfproduce_title);
          setSub(res.data.selfproduce_strength);
          setText(res.data.selfproduce_text);
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
    data.append("selfproduce_file", video);
    data.append("selfproduce_title", title);
    data.append("selfproduce_strength", sub);
    data.append("selfproduce_text", text);

    console.log(data);

    axios
      .put(
        `https://onepage-server.com/onepage/self/${state.selfproduce_id}/`,
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
        navigate("/dashboard/registered/selfproduce");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/selfproduce");
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
                      <h5>自己PR</h5>
                      <span>自己PRに関する情報を入力してください</span>
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
                            name="selfproduce_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <BasicInput
                            title="あなたの強み"
                            name="selfproduce_strength"
                            placeholder=""
                            setValue={setSub}
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
