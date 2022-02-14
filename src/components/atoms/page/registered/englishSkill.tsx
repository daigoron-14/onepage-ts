import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

type EnglishSkillType = {
  title: string;
};

export const EnglishSkill = (props: EnglishSkillType) => {
  const { title } = props;

  const [score, setScore] = useState("---");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (title === "TOEIC") {
      axios
        .get("http://127.0.0.1:8000/onepage/language/", {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          if (res.data.length === 1) {
            setScore(res.data[0].toeic);
            setYear(res.data[0].toeic_year);
            setMonth(res.data[0].toeic_month);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else if (title === "TOEFL") {
      axios
        .get("http://127.0.0.1:8000/onepage/language/", {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          if (res.data.length === 1) {
            setScore(res.data[0].toefl);
            setYear(res.data[0].toefl_year);
            setMonth(res.data[0].toefl_month);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  });

  return (
    <EnglishSkills>
      <div
        className={`english-${title}`}>
        <div className="english">
          <h4 className="english-title">{title}</h4>
          {score === "" ? (
            <h4 className="english-score">---</h4>
          ) : (
            <h4 className="english-score">{score}</h4>
          )}
          {year === "" ? (
            <h5 className="english-date">not taken</h5>
          ) : (
            <h5 className="english-date">
              {year}-{month}
            </h5>
          )}
        </div>
      </div>
    </EnglishSkills>
  );
};

const EnglishSkills = styled.div`
  background-color: #fff;
  width: 21%;
  height: 190px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  border-radius: 0.75rem;

  .english {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-TOEIC {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      background: linear-gradient(
        310deg,
        rgba(33, 82, 255, 0.75),
        rgb(33, 212, 253, 0.75)
      );
    }

    &-TOEFL {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      background: linear-gradient(
        310deg,
        rgba(33, 255, 132, 0.9),
        rgb(253, 226, 33, 0.9)
      );
    }

    &-title {
      color: #fff;
      font-size: 45px;
      padding-bottom: 5px;
      letter-spacing: 0.2rem;
    }

    &-score {
      color: #fff;
      font-size: 60px;
      padding-bottom: 10px;
    }

    &-date {
      color: #fff;
    }

    &-text {
    }
  }
`;
