import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type CreateTalentType = {
  setColor: Function;
};

export const RegisteredTalentDetail = (props: CreateTalentType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [event, setEvent] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("talentR");

    if (state == null) {
      navigate("/dashboard/registered/talent");
    } else {
      axios
        .get(`https://onepage-server.com/onepage/talentd/${state.talent_id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setName(res.data.talent_name);
          setText(res.data.talent_text);
          setEvent(res.data.talent_event);
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
    data.append("talent_name", name);
    data.append("talent_text", text);
    data.append("talent_event", event);

    console.log(data);

    axios
      .put(`https://onepage-server.com/onepage/talentd/${state.talent_id}/`, data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/talent");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/talent");
      });
  };

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
                        title="あなたの特技を一言で表すとなんですか"
                        name="talent_name"
                        placeholder=""
                        setValue={setName}
                        value={name}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技を詳しく説明してください"
                        name="talent_text"
                        lines="basic-textarea-text"
                        setValue={setText}
                        value={text}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="あなたの特技が発揮された場面"
                        name="talent_event"
                        lines="basic-textarea-text"
                        setValue={setEvent}
                        value={event}
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
