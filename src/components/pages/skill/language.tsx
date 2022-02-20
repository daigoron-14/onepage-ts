import { BasicInput } from "../../atoms/create/basicInput";
import { InputButton } from "../../atoms/create/inputButton";
import { SelectDay } from "../../atoms/create/selectDay";
import { SelectLevel } from "../../atoms/create/selectLevel";
import { SelectLanguage } from "../../atoms/create/selectLanguage";

import { BInfromation } from "../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CreateLanguageType = {
  setColor: Function;
};

export const CreateLanguage = (props: CreateLanguageType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [toeic, setToeic] = useState("");
  const [toeicYear, setToeicYear] = useState("----");
  const [toeicMonth, setToeicMonth] = useState("--");
  const [toefl, setToefl] = useState("");
  const [toeflYear, setToeflYear] = useState("----");
  const [toeflMonth, setToeflMonth] = useState("--");
  const [secondLanguage, setSecondLanguage] = useState("----");
  const [secondLevel, setSecondLevel] = useState("----");
  const [thirdLanguage, setThirdLanguage] = useState("----");
  const [thirdLevel, setThirdLevel] = useState("----");
  const [update, setUpdate] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("languageN");

    axios
      .get("https://onepage-server.com/onepage/language/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        if (res.data.length === 1) {
          setUpdate(true);
          setToeic(res.data[0].toeic);
          setToeicYear(res.data[0].toeic_year);
          setToeicMonth(res.data[0].toeic_month);
          setToefl(res.data[0].toefl);
          setToeflYear(res.data[0].toefl_year);
          setToeflMonth(res.data[0].toefl_month);
          setSecondLanguage(res.data[0].second_language);
          setSecondLevel(res.data[0].second_level);
          setThirdLanguage(res.data[0].third_language);
          setThirdLevel(res.data[0].third_level);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setUpdate(false);
      });
  }, []);

  const createData = () => {
    const data = {
      user: userid,
      toeic: toeic,
      toeic_year: toeicYear,
      toeic_month: toeicMonth,
      toefl: toefl,
      toefl_year: toeflYear,
      toefl_month: toeflMonth,
      second_language: secondLanguage,
      second_level: secondLevel,
      third_language: thirdLanguage,
      third_level: thirdLevel
    };

    if (update === false) {
      axios
        .post("https://onepage-server.com/onepage/language/", data, {
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
        });
    } else {
      axios
        .put(`http://127.0.0.1:8000/onepage/language/${userid}/`, data, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
          navigate("/dashboard/success")
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <BInfromation>
      <div className="basic">
        <div style={{ marginTop: "80px" }}>
          <div className="basic-information">
            <form action="">
              <div className="basicBox">
                <div className="basicBox-root">
                  <div className="basicBox-container">
                    <div className="basicBox-title">
                      <h5>語学スキル</h5>
                      <span>あなたの語学習得レベルを入力してください</span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title=" TOEIC(R)TEST"
                          name="toeic"
                          placeholder=""
                          setValue={setToeic}
                          value={toeic}
                        />
                        <SelectDay
                          title="受験日"
                          year="toeic_year"
                          month="toeic_month"
                          day="toeic_day"
                          dayflag={false}
                          setYear={setToeicYear}
                          setMonth={setToeicMonth}
                          setDay={setToeicMonth}
                          valueYear={toeicYear}
                          valueMonth={toeicMonth}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="TOEFL(R)TEST"
                          name="toefl"
                          placeholder=""
                          setValue={setToefl}
                          value={toefl}
                        />
                        <SelectDay
                          title="受験日"
                          year="toefl_year"
                          month="toefl_month"
                          day="toefl_day"
                          dayflag={false}
                          setYear={setToeflYear}
                          setMonth={setToeflMonth}
                          setDay={setToeflMonth}
                          valueYear={toeflYear}
                          valueMonth={toeflMonth}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <SelectLanguage
                          title="第二言語"
                          name="second_language"
                          setLanguage={setSecondLanguage}
                          value={secondLanguage}
                        />
                        <SelectLevel
                          title="習得レベル"
                          name="second_level"
                          setLevel={setSecondLevel}
                          value={secondLevel}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <SelectLanguage
                          title="第三言語"
                          name="third_language"
                          setLanguage={setThirdLanguage}
                          value={thirdLanguage}
                        />
                        <SelectLevel
                          title="習得レベル"
                          name="third_level"
                          setLevel={setThirdLevel}
                          value={thirdLevel}
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
    </BInfromation>
  );
};
