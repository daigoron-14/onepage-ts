import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateTalentType = {
  setColor: Function;
};

export const CreateTalent = (props: CreateTalentType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [text, setText] = useState("");

  const [errName, setErrName] = useState("");
  const [errEvent, setErrEvent] = useState("");
  const [errText, setErrText] = useState("");

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
      .post("https://onepage-server.com/onepage/talent/", data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/success")
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrName(err.ressponse.data.talent_name);
        setErrEvent(err.ressponse.data.talent_event);
        setErrText(err.ressponse.data.talent_text);
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
                        alert={errName}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技を詳しく説明してください"
                        name="talent_text"
                        lines="basic-textarea-text"
                        setValue={setText}
                        alert={errText}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技が発揮された場面"
                        name="talent_event"
                        lines="basic-textarea-text"
                        setValue={setEvent}
                        alert={errEvent}
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
