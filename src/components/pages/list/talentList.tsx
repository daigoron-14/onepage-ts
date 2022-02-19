import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { PersonalList } from "./hobbyList";

type RegisterdTalentType = {
  setRegFlag: Function;
  setTalentId: Function;
};

export const TalentList = (props: RegisterdTalentType) => {
  const { setRegFlag, setTalentId } = props;
  const navigate = useNavigate();

  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState({
    pk: 0,
    title: ""
  });
  const [getFirstFlag, setGetFirstFlag] = useState(false);
  const [second, setSecond] = useState({
    pk: 0,
    title: ""
  });
  const [getSecondFlage, setGetSecondFlag] = useState(false);
  const [third, setThird] = useState({
    pk: 0,
    title: ""
  });
  const [getThirdFlage, setGetThirdFlag] = useState(false);
  const [fourth, setFourth] = useState({
    pk: 0,
    title: ""
  });
  const [getFourthFlage, setGetFourthFlag] = useState(false);
  const [fifth, setFifth] = useState({
    pk: 0,
    title: ""
  });
  const [getFifthFlage, setGetFifthFlag] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://onepage-server.com/onepage/talent/?page=${page}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);

        if (res.data.results.length == 1) {
          setGetFirstFlag(true);
          setFirst({
            pk: res.data.results[0]["talent_id"],
            title: res.data.results[0]["talent_name"]
          });
        } else if (res.data.results.length == 2) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setFirst({
            pk: res.data.results[0]["talent_id"],
            title: res.data.results[0]["talent_name"]
          });
          setSecond({
            pk: res.data.results[1]["talent_id"],
            title: res.data.results[1]["talent_name"]
          });
        } else if (res.data.results.length == 3) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setFirst({
            pk: res.data.results[0]["talent_id"],
            title: res.data.results[0]["talent_name"]
          });
          setSecond({
            pk: res.data.results[1]["talent_id"],
            title: res.data.results[1]["talent_name"]
          });
          setThird({
            pk: res.data.results[2]["talent_id"],
            title: res.data.results[2]["talent_name"]
          });
        } else if (res.data.results.length == 4) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setGetFourthFlag(true);
          setFirst({
            pk: res.data.results[0]["talent_id"],
            title: res.data.results[0]["talent_name"]
          });
          setSecond({
            pk: res.data.results[1]["talent_id"],
            title: res.data.results[1]["talent_name"]
          });
          setThird({
            pk: res.data.results[2]["talent_id"],
            title: res.data.results[2]["talent_name"]
          });
          setFourth({
            pk: res.data.results[3]["talent_id"],
            title: res.data.results[3]["talent_name"]
          });
        } else if (res.data.results.length == 5) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setGetFourthFlag(true);
          setGetFifthFlag(true);
          setFirst({
            pk: res.data.results[0]["talent_id"],
            title: res.data.results[0]["talent_name"]
          });
          setSecond({
            pk: res.data.results[1]["talent_id"],
            title: res.data.results[1]["talent_name"]
          });
          setThird({
            pk: res.data.results[2]["talent_id"],
            title: res.data.results[2]["talent_name"]
          });
          setFourth({
            pk: res.data.results[3]["talent_id"],
            title: res.data.results[3]["talent_name"]
          });
          setFifth({
            pk: res.data.results[4]["talent_id"],
            title: res.data.results[4]["talent_name"]
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const onClickDetail = (props: number) => {
    axios
      .get(`https://onepage-server.com/onepage/talentd/${props}/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setRegFlag(false);
        setTalentId(props);
        navigate("/dashboard/onepage/create/page");
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  return (
    <PersonalList>
      <div className="list">
        <div className="label">
          <h5 className="label-title">特技一覧</h5>
          <span className="label-span">あなたの特技の一覧です。</span>
        </div>
        <div className="containt">
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-row">
                <th className="table-header-header">
                  <h5 className="table-header-header-text">特技</h5>
                </th>
                <th className="table-header-header">
                  <h5 className="table-header-header-text">ステータス</h5>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {getFirstFlag && (
                <tr className="table-body-row">
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{first.title}</h6>
                  </td>
                  <td
                    className="table-body-data-item"
                    onClick={() => onClickDetail(first.pk)}
                  >
                    <h6 className="table-body-data-button">選択する</h6>
                  </td>
                </tr>
              )}
              {getSecondFlage && (
                <tr className="table-body-row">
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{second.title}</h6>
                  </td>
                  <td
                    className="table-body-data-item"
                    onClick={() => onClickDetail(second.pk)}
                  >
                    <h6 className="table-body-data-button">選択する</h6>
                  </td>
                </tr>
              )}
              {getThirdFlage && (
                <tr className="table-body-row">
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{third.title}</h6>
                  </td>
                  <td
                    className="table-body-data-item"
                    onClick={() => onClickDetail(third.pk)}
                  >
                    <h6 className="table-body-data-button">選択する</h6>
                  </td>
                </tr>
              )}
              {getFourthFlage && (
                <tr className="table-body-row">
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fourth.title}</h6>
                  </td>
                  <td
                    className="table-body-data-item"
                    onClick={() => onClickDetail(fourth.pk)}
                  >
                    <h6 className="table-body-data-button">選択する</h6>
                  </td>
                </tr>
              )}
              {getFifthFlage && (
                <tr className="table-body-row">
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fifth.title}</h6>
                  </td>
                  <td
                    className="table-body-data-item"
                    onClick={() => onClickDetail(fifth.pk)}
                  >
                    <h6 className="table-body-data-button">選択する</h6>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="list-paging"></div>
      </div>
    </PersonalList>
  );
};
