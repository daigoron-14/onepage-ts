import { BasicInput } from "../../atoms/create/basicInput";
import { InputButton } from "../../atoms/create/inputButton";
import { SelectDay } from "../../atoms/create/selectDay";

import { BInfromation } from "../basic/basic";

import { useState, useEffect } from "react";
import axios from "axios";

type CreateQualificationType = {
  setColor: Function;
};

export const CreateQualification = (props: CreateQualificationType) => {
  const { setColor } = props;

  const [skill1, setSkill1] = useState("");
  const [year1, setYear1] = useState("");
  const [month1, setMonth1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [year2, setYear2] = useState("");
  const [month2, setMonth2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [year3, setYear3] = useState("");
  const [month3, setMonth3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [year4, setYear4] = useState("");
  const [month4, setMonth4] = useState("");
  const [skill5, setSkill5] = useState("");
  const [year5, setYear5] = useState("");
  const [month5, setMonth5] = useState("");
  const [update, setUpdate] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("qualiN");

    axios
      .get("http://127.0.0.1:8000/onepage/qualification/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        if (res.data.length === 1) {
          setUpdate(true);
          setSkill1(res.data[0].skill_1);
          setYear1(res.data[0].skill_year1);
          setMonth1(res.data[0].skill_month1);
          setSkill2(res.data[0].skill_2);
          setYear2(res.data[0].skill_year2);
          setMonth2(res.data[0].skill_month2);
          setSkill3(res.data[0].skill_3);
          setYear3(res.data[0].skill_year3);
          setMonth3(res.data[0].skill_month3);
          setSkill4(res.data[0].skill_4);
          setYear4(res.data[0].skill_year4);
          setMonth4(res.data[0].skill_month4);
          setSkill5(res.data[0].skill_5);
          setYear5(res.data[0].skill_year5);
          setMonth5(res.data[0].skill_month5);
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
      skill_1: skill1,
      skill_year_1: year1,
      skill_month_1: month1,
      skill_2: skill2,
      skill_year_2: year2,
      skill_month_2: month2,
      skill_3: skill3,
      skill_year_3: year3,
      skill_month_3: month3,
      skill_4: skill4,
      skill_year_4: year4,
      skill_month_4: month4,
      skill_5: skill5,
      skill_year_5: year5,
      skill_month_5: month5
    };

    if (update === false) {
      axios
        .post("http://127.0.0.1:8000/onepage/qualification/", data, {
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
    } else {
      axios
        .put(`http://127.0.0.1:8000/onepage/qualification/${userid}/`, data, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
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
                      <h5>保有資格・免許</h5>
                      <span>保有資格・免許（最大5個）を入力してください</span>
                    </div>
                    <div className="basicBox-item">
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="資格・免許名"
                          name="skill1"
                          placeholder="〇〇"
                          setValue={setSkill1}
                          value={skill1}
                        />
                        <SelectDay
                          title="取得年月"
                          year="skill_year1"
                          month="skill_month1"
                          day="skill_day1"
                          dayflag={false}
                          setYear={setYear1}
                          setMonth={setMonth1}
                          setDay={setMonth1}
                          valueYear={year1}
                          valueMonth={month1}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="資格・免許名"
                          name="skill2"
                          placeholder="〇〇"
                          setValue={setSkill2}
                          value={skill2}
                        />
                        <SelectDay
                          title="取得年月"
                          year="skill_year2"
                          month="skill_month2"
                          day="skill_day2"
                          dayflag={false}
                          setYear={setYear2}
                          setMonth={setMonth2}
                          setDay={setMonth2}
                          valueYear={year2}
                          valueMonth={month2}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="資格・免許名"
                          name="skill3"
                          placeholder="〇〇"
                          setValue={setSkill3}
                          value={skill3}
                        />
                        <SelectDay
                          title="取得年月"
                          year="skill_year3"
                          month="skill_month3"
                          day="skill_day3"
                          dayflag={false}
                          setYear={setYear3}
                          setMonth={setMonth3}
                          setDay={setMonth3}
                          valueYear={year3}
                          valueMonth={month3}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="資格・免許名"
                          name="skill4"
                          placeholder="〇〇"
                          setValue={setSkill4}
                          value={skill4}
                        />
                        <SelectDay
                          title="取得年月"
                          year="skill_year4"
                          month="skill_month4"
                          day="skill_day4"
                          dayflag={false}
                          setYear={setYear4}
                          setMonth={setMonth4}
                          setDay={setMonth4}
                          valueYear={year4}
                          valueMonth={month4}
                        />
                      </div>
                      <div className="basicBox-item-containt">
                        <BasicInput
                          title="資格・免許名"
                          name="skill5"
                          placeholder="〇〇"
                          setValue={setSkill5}
                          value={skill5}
                        />
                        <SelectDay
                          title="取得年月"
                          year="skill_year5"
                          month="skill_month5"
                          day="skill_day5"
                          dayflag={false}
                          setYear={setYear5}
                          setMonth={setMonth5}
                          setDay={setMonth5}
                          valueYear={year5}
                          valueMonth={month5}
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
