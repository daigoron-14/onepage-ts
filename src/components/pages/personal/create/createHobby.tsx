import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateHobbyType = {
  setColor: Function;
};

export const CreateHobby = (props: CreateHobbyType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [good, setGood] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = {
      user: userid,
      hobby_name: name,
      hobby_start: start,
      hobby_good: good
    };

    axios
      .post("http://127.0.0.1:8000/onepage/hobby/", data, {
        headers: {
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
    setColor("hobbyN");
  });

  return (
    <BInfromation>
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>趣味</h5>
                    <span>あなたの趣味に関する情報を入力してください</span>
                  </div>
                  <div className="basicBox-item">
                    <div
                      className="basicBox-item-containt"
                      style={{ width: "50%" }}
                    >
                      <BasicInput
                        title="あなたの趣味は何ですか？"
                        name="hobby_name"
                        placeholder=""
                        setValue={setName}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味をし始めたきっかけは何ですか?"
                        name="hobby_start"
                        lines="basic-textarea-text-3"
                        setValue={setStart}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味の良いところはどんなところですか?"
                        name="hobby_good"
                        lines="basic-textarea-text-3"
                        setValue={setGood}
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
    </BInfromation>
  );
};
