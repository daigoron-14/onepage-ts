import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateStressType = {
  setColor: Function;
};

export const CreateStress = (props: CreateStressType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [relux, setRelux] = useState("");

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
      .post("http://127.0.0.1:8000/onepage/stress/", data, {
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
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="なぜストレスを感じるのか"
                        name="stress_reason"
                        lines="basic-textarea-text"
                        setValue={setReason}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="ストレスを解消する方法"
                        name="stress_relux"
                        lines="basic-textarea-text"
                        setValue={setRelux}
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
