import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { VideoList } from "./motivationList";

type RegisterdVideoType = {
  setRegFlag: Function;
  setSelfproduceId: Function;
};

export const SelfproduceList = (props: RegisterdVideoType) => {
  const { setRegFlag, setSelfproduceId } = props;
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [first, setFirst] = useState({
    pk: 0,
    video: "",
    title: "",
    sub: ""
  });
  const [getFirstFlag, setGetFirstFlag] = useState(false);
  const [second, setSecond] = useState({
    pk: 0,
    video: "",
    title: "",
    sub: ""
  });
  const [getSecondFlage, setGetSecondFlag] = useState(false);
  const [third, setThird] = useState({
    pk: 0,
    video: "",
    title: "",
    sub: ""
  });
  const [getThirdFlage, setGetThirdFlag] = useState(false);
  const [fourth, setFourth] = useState({
    pk: 0,
    video: "",
    title: "",
    sub: ""
  });
  const [getFourthFlage, setGetFourthFlag] = useState(false);
  const [fifth, setFifth] = useState({
    pk: 0,
    video: "",
    title: "",
    sub: ""
  });
  const [getFifthFlage, setGetFifthFlag] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/onepage/selfproduce/?page=${page}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);

        if (res.data.results.length == 1) {
          setGetFirstFlag(true);
          setFirst({
            pk: res.data.results[0]["selfproduce_id"],
            video: res.data.results[0]["selfproduce_file"],
            title: res.data.results[0]["selfproduce_title"],
            sub: res.data.results[0]["selfproduce_strength"]
          });
        } else if (res.data.results.length == 2) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setFirst({
            pk: res.data.results[0]["selfproduce_id"],
            video: res.data.results[0]["selfproduce_file"],
            title: res.data.results[0]["selfproduce_title"],
            sub: res.data.results[0]["selfproduce_strength"]
          });
          setSecond({
            pk: res.data.results[1]["selfproduce_id"],
            video: res.data.results[1]["selfproduce_file"],
            title: res.data.results[1]["selfproduce_title"],
            sub: res.data.results[1]["selfproduce_strength"]
          });
        } else if (res.data.results.length == 3) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setFirst({
            pk: res.data.results[0]["selfproduce_id"],
            video: res.data.results[0]["selfproduce_file"],
            title: res.data.results[0]["selfproduce_title"],
            sub: res.data.results[0]["selfproduce_strength"]
          });
          setSecond({
            pk: res.data.results[1]["selfproduce_id"],
            video: res.data.results[1]["selfproduce_file"],
            title: res.data.results[1]["selfproduce_title"],
            sub: res.data.results[1]["selfproduce_strength"]
          });
          setThird({
            pk: res.data.results[2]["selfproduce_id"],
            video: res.data.results[2]["selfproduce_file"],
            title: res.data.results[2]["selfproduce_title"],
            sub: res.data.results[2]["selfproduce_strength"]
          });
        } else if (res.data.results.length == 4) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setGetFourthFlag(true);
          setFirst({
            pk: res.data.results[0]["selfproduce_id"],
            video: res.data.results[0]["selfproduce_file"],
            title: res.data.results[0]["selfproduce_title"],
            sub: res.data.results[0]["selfproduce_strength"]
          });
          setSecond({
            pk: res.data.results[1]["selfproduce_id"],
            video: res.data.results[1]["selfproduce_file"],
            title: res.data.results[1]["selfproduce_title"],
            sub: res.data.results[1]["selfproduce_strength"]
          });
          setThird({
            pk: res.data.results[2]["selfproduce_id"],
            video: res.data.results[2]["selfproduce_file"],
            title: res.data.results[2]["selfproduce_title"],
            sub: res.data.results[2]["selfproduce_strength"]
          });
          setFourth({
            pk: res.data.results[3]["selfproduce_id"],
            video: res.data.results[3]["selfproduce_file"],
            title: res.data.results[3]["selfproduce_title"],
            sub: res.data.results[3]["selfproduce_strength"]
          });
        } else if (res.data.results.length == 5) {
          setGetFirstFlag(true);
          setGetSecondFlag(true);
          setGetThirdFlag(true);
          setGetFourthFlag(true);
          setGetFifthFlag(true);
          setFirst({
            pk: res.data.results[0]["selfproduce_id"],
            video: res.data.results[0]["selfproduce_file"],
            title: res.data.results[0]["selfproduce_title"],
            sub: res.data.results[0]["selfproduce_strength"]
          });
          setSecond({
            pk: res.data.results[1]["selfproduce_id"],
            video: res.data.results[1]["selfproduce_file"],
            title: res.data.results[1]["selfproduce_title"],
            sub: res.data.results[1]["selfproduce_strength"]
          });
          setThird({
            pk: res.data.results[2]["selfproduce_id"],
            video: res.data.results[2]["selfproduce_file"],
            title: res.data.results[2]["selfproduce_title"],
            sub: res.data.results[2]["selfproduce_strength"]
          });
          setFourth({
            pk: res.data.results[3]["selfproduce_id"],
            video: res.data.results[3]["selfproduce_file"],
            title: res.data.results[3]["selfproduce_title"],
            sub: res.data.results[3]["selfproduce_strength"]
          });
          setFifth({
            pk: res.data.results[4]["selfproduce_id"],
            video: res.data.results[4]["selfproduce_file"],
            title: res.data.results[4]["selfproduce_title"],
            sub: res.data.results[4]["selfproduce_strength"]
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const onClickDetail = (props: number) => {
    axios
      .get(`http://127.0.0.1:8000/onepage/self/${props}/`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setRegFlag(false);
        setSelfproduceId(props);
        navigate("/dashboard/onepage/create/page");
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  return (
    <VideoList>
      <div className="list">
        <div className="label">
          <h5 className="label-title">自己PR一覧</h5>
          <span className="label-span">あなたの自己PRの一覧です</span>
        </div>
        <div className="containt">
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-row">
                <th className="table-header-header"></th>
                <th className="table-header-header">
                  <h5 className="table-header-header-text">タイトル</h5>
                </th>
                <th className="table-header-header">
                  <h5 className="table-header-header-text">強み</h5>
                </th>
                <th className="table-header-header">
                  <h5 className="table-header-header-text">ステータス</h5>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {getFirstFlag && (
                <tr className="table-body-row">
                  <td className="table-body-data">
                    <div className="table-body-data-video">
                      <video src={first.video} muted={true} controls />
                    </div>
                  </td>
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{first.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-year">{first.sub}</h6>
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
                  <td className="table-body-data">
                    <div className="table-body-data-video">
                      <video src={second.video} muted={true} controls />
                    </div>
                  </td>
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{second.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-year">{second.sub}</h6>
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
                  <td className="table-body-data">
                    <div className="table-body-data-video">
                      <video src={third.video} muted={true} controls />
                    </div>
                  </td>
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{third.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-year">{third.sub}</h6>
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
                  <td className="table-body-data">
                    <div className="table-body-data-video">
                      <video src={fourth.video} muted={true} controls />
                    </div>
                  </td>
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fourth.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-year">{fourth.sub}</h6>
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
                  <td className="table-body-data">
                    <div className="table-body-data-video">
                      <video src={fifth.video} muted={true} controls />
                    </div>
                  </td>
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fifth.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-year">{fifth.sub}</h6>
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
    </VideoList>
  );
};
