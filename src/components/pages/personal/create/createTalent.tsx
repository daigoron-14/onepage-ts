import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateTalentType = {
  setColor: Function;
};

export const CreateTalent = (props: CreateTalentType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [text, setText] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = {
      user: userid,
      talent_name: name,
      talent_text: text,
      talent_event: event
    };

    axios
      .post("http://127.0.0.1:8000/onepage/talent/", data, {
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
    setColor("talentN");
  }, []);

  return (
    <BInfromation>
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>特技</h5>
                    <span>あなたの特技に関する情報を入力してください</span>
                  </div>
                  <div className="basicBox-item">
                    <div
                      className="basicBox-item-containt"
                      style={{ width: "50%" }}
                    >
                      <BasicInput
                        title="あなたの特技を一言で言うとなんですか"
                        name="talent_name"
                        placeholder=""
                        setValue={setName}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技を詳しく説明してください"
                        name="talent_text"
                        lines="basic-textarea-text"
                        setValue={setText}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技が発揮された場面"
                        name="talent_event"
                        lines="basic-textarea-text"
                        setValue={setEvent}
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
