import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";
import { AddFileButton } from "../../../atoms/create/addFileButton";

import { VideoBasic } from "../../video/create/createMotivation";
import { SelectDay } from "../../../atoms/create/selectDay";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateChronologyType = {
  setColor: Function;
};

export const CreateChronology = (props: CreateChronologyType) => {
  const { setColor } = props;

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [containt, setContaint] = useState("");
  const [start, setStart] = useState("");
  const [get, setGet] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    console.log(image);
    const data = new FormData();
    if (userid != null) {
      data.append("user", userid);
    }
    data.append("chrono_image", image);
    data.append("chrono_title", title);
    data.append("chrono_year", year);
    data.append("chrono_month", month);
    data.append("chrono_containt", containt);
    data.append("chrono_start", start);
    data.append("chrono_get", get);

    console.log(data);

    axios
      .post("http://127.0.0.1:8000/onepage/chronology/", data, {
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
    setColor("chronoN");
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
                      <h5>年表</h5>
                      <span>
                        あなたの価値観に影響を与えた経験に関して入力してください
                      </span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-grid">
                        <AddFileButton
                          title="ファイル選択"
                          labels="画像をアップロード"
                          setValue={setImage}
                          accept="image/*"
                        />
                        <div className="basicBox-item-grid-item">
                          <BasicInput
                            title="イベント名"
                            name="chronology_title"
                            placeholder=""
                            setValue={setTitle}
                          />
                          <SelectDay
                            title="いつ経験したか"
                            year="chronology_year"
                            month="chronology_month"
                            day="chronology_day"
                            dayflag={false}
                            setYear={setYear}
                            setMonth={setMonth}
                            setDay={setMonth}
                          />
                        </div>
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="経験した内容"
                          name="chronology_containt"
                          lines="basic-textarea-text"
                          setValue={setContaint}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="経験したきっかけ"
                          name="chronology_start"
                          lines="basic-textarea-text"
                          setValue={setStart}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicTextarea
                          title="経験から得たもの"
                          name="chronology_get"
                          lines="basic-textarea-text"
                          setValue={setGet}
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
