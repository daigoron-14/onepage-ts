import { BasicInput } from "../../../atoms/create/basicInput";
import { InputButton } from "../../../atoms/create/inputButton";
import { BasicTextarea } from "../../../atoms/create/basicTextarea";

import { BInfromation } from "../../basic/basic";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type CreateHobbyType = {
  setColor: Function;
};

export const RegisteredHobbyDetail = (props: CreateHobbyType) => {
  const { setColor } = props;

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [good, setGood] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("hobbyR");

    if (state == null) {
      navigate("/dashboard/registered/hobby");
    } else {
      axios
        .get(`http://127.0.0.1:8000/onepage/hobbyd/${state.hobby_id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setName(res.data.hobby_name);
          setStart(res.data.hobby_start);
          setGood(res.data.hobby_good);
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
    data.append("hobby_name", name);
    data.append("hobby_start", start);
    data.append("hobby_good", good);

    console.log(data);

    axios
      .put(`http://127.0.0.1:8000/onepage/hobbyd/${state.hobby_id}/`, data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/registered/hobby");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/dashboard/registered/hobby");
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
                        value={name}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味をし始めたきっかけは何ですか?"
                        name="hobby_start"
                        lines="basic-textarea-text-3"
                        setValue={setStart}
                        value={start}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicTextarea
                        title="その趣味の良いところはどんなところですか?"
                        name="hobby_good"
                        lines="basic-textarea-text-3"
                        setValue={setGood}
                        value={good}
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
