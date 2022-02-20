import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type CreateHobbyType = {
  setColor: Function;
};

export const CreateHobby = (props: CreateHobbyType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [good, setGood] = useState("");

  const [errName, setErrName] = useState("");
  const [errStart, setErrStart] = useState("");
  const [errGood, setErrGood] = useState("");

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
      .post("https://onepage-server.com/onepage/hobby/", data, {
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
        setErrName(err.ressponse.data.hobby_name);
        setErrStart(err.ressponse.data.hobby_start);
        setErrGood(err.ressponse.data.hobby_good);
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
                        alert={errName}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味をし始めたきっかけは何ですか?"
                        name="hobby_start"
                        lines="basic-textarea-text-3"
                        setValue={setStart}
                        alert={errStart}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味の良いところはどんなところですか?"
                        name="hobby_good"
                        lines="basic-textarea-text-3"
                        setValue={setGood}
                        alert={errGood}
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
