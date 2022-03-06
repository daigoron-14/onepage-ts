import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { InterviewCard } from "../../atoms/corporate/interviewCard";

type FirstInterviewType = {
  setColor: Function;
};

export const FirstInterview = (props: FirstInterviewType) => {
  const { setColor } = props;
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const [page, setPage] = useState(1);

  const [first, setFirst] = useState({
    pk: "",
    auth: ""
  });
  const [getFirstFlag, setGetFirstFlag] = useState(false);
  const [second, setSecond] = useState({
    pk: "",
    auth: ""
  });
  const [getSecondFlag, setGetSecondFlag] = useState(false);
  const [third, setThird] = useState({
    pk: "",
    auth: ""
  });
  const [getThirdFlag, setGetThirdFlag] = useState(false);
  const [fourth, setFourth] = useState({
    pk: "",
    auth: ""
  });
  const [getFourthFlag, setGetFourthFlag] = useState(false);
  const [fifth, setFifth] = useState({
    pk: "",
    auth: ""
  });

  useEffect(() => {
    axios
      .get(`https://onepage-server.com/onepage/pagec/?page=${page}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);

        if (res.data.results.length == 1) {
          setFirst({
            pk: res.data.results[0]["page_id"],
            auth: res.data.results[0]["auth"]
          });
          setGetFirstFlag(true);
        } else if (res.data.results.length == 2) {
          setGetSecondFlag(true);
          setFirst({
            pk: res.data.results[0]["page_id"],
            auth: res.data.results[0]["auth"]
          });
          setSecond({
            pk: res.data.results[1]["page_id"],
            auth: res.data.results[1]["auth"]
          });
        } else if (res.data.results.length == 3) {
          setGetThirdFlag(true);
          setFirst({
            pk: res.data.results[0]["page_id"],
            auth: res.data.results[0]["auth"]
          });
          setSecond({
            pk: res.data.results[1]["page_id"],
            auth: res.data.results[1]["auth"]
          });
          setThird({
            pk: res.data.results[2]["page_id"],
            auth: res.data.results[2]["auth"]
          });
        } else if (res.data.results.length == 4) {
          setGetFourthFlag(true);
          setFirst({
            pk: res.data.results[0]["page_id"],
            auth: res.data.results[0]["auth"]
          });
          setSecond({
            pk: res.data.results[1]["page_id"],
            auth: res.data.results[1]["auth"]
          });
          setThird({
            pk: res.data.results[2]["page_id"],
            auth: res.data.results[2]["auth"]
          });
          setFourth({
            pk: res.data.results[3]["page_id"],
            auth: res.data.results[3]["auth"]
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <InterviewBox>
      <div className="interview-box">
        {getFirstFlag && (
          <div className="interview-box-first">
            <InterviewCard pk={first.pk} auth={first.auth} />
          </div>
        )}
        {getSecondFlag && (
          <div className="interview-box-second">
            <InterviewCard pk={first.pk} auth={first.auth} />
            <InterviewCard pk={second.pk} auth={second.auth} />
          </div>
        )}
        {getThirdFlag && (
          <div className="interview-box-second">
            <InterviewCard pk={first.pk} auth={first.auth} />
            <InterviewCard pk={second.pk} auth={second.auth} />
            <InterviewCard pk={third.pk} auth={third.auth} />
          </div>
        )}
        {getFourthFlag && (
          <div className="interview-box-fourth">
            <InterviewCard pk={first.pk} auth={first.auth} />
            <InterviewCard pk={second.pk} auth={second.auth} />
            <InterviewCard pk={third.pk} auth={third.auth} />
            <InterviewCard pk={fourth.pk} auth={fourth.auth} />
          </div>
        )}
      </div>
    </InterviewBox>
  );
};

export const InterviewBox = styled.div`
  width: 100%;
  margin-top: 80px;

  .interview-box {
    width: 100%;

    &-second {
      display: flex;
    }

    &-fourth {
      display: flex;
      justify-content: space-around;
    }
  }
`;
