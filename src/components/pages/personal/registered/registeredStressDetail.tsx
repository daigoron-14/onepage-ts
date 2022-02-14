import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type CreateStressType = {
  setColor: Function;
};

export const RegisteredStressDetail = (props: CreateStressType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [relux, setRelux] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("stressR");

    if (state == null) {
      navigate("/dashboard/registered/stress");
    } else {
      axios
        .get(`http://127.0.0.1:8000/onepage/stressd/${state.stress_id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setName(res.data.stress_name);
          setReason(res.data.stress_reason);
          setRelux(res.data.stress_relux);
        })
        .catch((err) => {
          console.log(err.res.data);
        });
    }
  }, []);

  const createData = () => {
    const data = new FormData();
    data.append("user", userid);
    data.append("stress_name", name);
    data.append("stress_reason", reason);
    data.append("stress_relux", relux);

    console.log(data);

    axios
      .put(`http://127.0.0.1:8000/onepage/stressd/${state.stress_id}/`, data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/stress");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/stress");
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
                        value={name}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="なぜストレスを感じるのか"
                        name="stress_reason"
                        lines="basic-textarea-text"
                        setValue={setReason}
                        value={reason}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="ストレスを解消する方法"
                        name="stress_relux"
                        lines="basic-textarea-text"
                        setValue={setRelux}
                        value={relux}
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
