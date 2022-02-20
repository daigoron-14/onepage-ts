import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateStressType = {
  setColor: Function;
};

export const CreateStress = (props: CreateStressType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [relux, setRelux] = useState("");

  const [errName, setErrName] = useState("");
  const [errReason, setErrReason] = useState("");
  const [errRelux, setErrRelux] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const createData = () => {
    const data = {
      user: userid,
      stress_name: name,
      stress_reason: reason,
      stress_relux: relux
    };

    axios
      .post("https://onepage-server.com/onepage/stress/", data, {
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
        setErrName(err.ressponse.data.stress_name);
        setErrReason(err.ressponse.data.stress_reason);
        setErrRelux(err.ressponse.data.stress_relux);
      });
  };

  useEffect(() => {
    setColor("stressN");
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
                    <h5>ストレス</h5>
                    <span>あなたのストレスに関する情報を入力してください</span>
                  </div>
                  <div className="basicBox-item">
                    <div
                      className="basicBox-item-containt"
                      style={{ width: "50%" }}
                    >
                      <BasicInput
                        title="ストレスを感じる場面"
                        name="stress_name"
                        placeholder=""
                        setValue={setName}
                        alert={errName}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="なぜストレスを感じるのか"
                        name="stress_reason"
                        lines="basic-textarea-text"
                        setValue={setReason}
                        alert={errReason}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="ストレスを解消する方法"
                        name="stress_relux"
                        lines="basic-textarea-text"
                        setValue={setRelux}
                        alert={errRelux}
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
