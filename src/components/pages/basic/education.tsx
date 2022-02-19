import { BasicInput } from "../../atoms/create/basicInput";
import { InputButton } from "../../atoms/create/inputButton";
import { SelectDay } from "../../atoms/create/selectDay";
import { SelectSchool } from "../../atoms/create/selectSchool";

import { BInfromation } from "./basic";
import { useState, useEffect } from "react";
import axios from "axios";

type CreateEducationType = {
  setColor: Function;
};

export const CreateEducation = (props: CreateEducationType) => {
  const { setColor } = props;

  const [entryYear, setEntryYear] = useState("");
  const [entryMonth, setEntryMonth] = useState("");
  const [graduateYear, setGraduateYear] = useState("");
  const [graduateMonth, setGraduateMonth] = useState("");
  const [devision, setDivision] = useState("----");
  const [school, setSchool] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [study, setStudy] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [update, setUpdate] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("educationN");

    axios
      .get("https://onepage-server.com/onepage/education/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        if (res.data.length === 1) {
          setUpdate(true);
          setEntryYear(res.data[0].entry_year);
          setEntryMonth(res.data[0].entry_month);
          setGraduateYear(res.data[0].graduate_year);
          setGraduateMonth(res.data[0].graduate_month);
          setDivision(res.data[0].devision);
          setSchool(res.data[0].school);
          setFaculty(res.data[0].faculty);
          setDepartment(res.data[0].department);
          setStudy(res.data[0].study);
          setStudyTitle(res.data[0].study_title);
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
      entry_year: entryYear,
      entry_month: entryMonth,
      graduate_year: graduateYear,
      graduate_month: graduateMonth,
      devision: devision,
      school: school,
      faculty: faculty,
      department: department,
      study: study,
      study_title: studyTitle
    };

    if (update === false) {
      axios
        .post("https://onepage-server.com/onepage/education/", data, {
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
        .put(`https://onepage-server.com/onepage/education/${userid}/`, data, {
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
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>学歴情報</h5>
                    <span>学歴情報を入力してください</span>
                  </div>
                  <div className="basicBox-item">
                    <div className="basicBox-item-containt">
                      <SelectDay
                        title="入学年月"
                        year="entry_year"
                        month="entry_month"
                        day="entry_day"
                        dayflag={false}
                        setYear={setEntryYear}
                        setMonth={setEntryMonth}
                        setDay={setEntryYear}
                        valueYear={entryYear}
                        valueMonth={entryMonth}
                        valueDay={entryMonth}
                      />
                      <SelectDay
                        title="卒業年月（見込）"
                        year="graduate_year"
                        month="graduate_month"
                        day="graduate_day"
                        dayflag={false}
                        setYear={setGraduateYear}
                        setMonth={setGraduateMonth}
                        setDay={setGraduateYear}
                        valueYear={graduateYear}
                        valueMonth={graduateMonth}
                        valueDay={entryMonth}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <SelectSchool setValue={setDivision} value={devision} />
                      <BasicInput
                        title="学校名"
                        name="school"
                        placeholder="〇〇"
                        setValue={setSchool}
                        value={school}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicInput
                        title="学部名"
                        name="faculty"
                        placeholder="〇〇学部"
                        setValue={setFaculty}
                        value={faculty}
                      />
                      <BasicInput
                        title="学科名"
                        name="department"
                        placeholder="〇〇学科"
                        setValue={setDepartment}
                        value={department}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicInput
                        title="所属ゼミ・研究室"
                        name="study"
                        placeholder="〇〇ゼミ・研究室"
                        setValue={setStudy}
                        value={study}
                      />
                      <BasicInput
                        title="研究タイトル"
                        name="study_title"
                        placeholder="〇〇"
                        setValue={setStudyTitle}
                        value={studyTitle}
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
