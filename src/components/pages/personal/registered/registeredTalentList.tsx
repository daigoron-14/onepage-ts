import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type RegisterdTalentType = {
  setColor: Function;
};

export const RegisteredTalentList = (props: RegisterdTalentType) => {
  const { setColor } = props;
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
    setColor("talentR");

    axios
      .get(`http://127.0.0.1:8000/onepage/talent/?page=${page}`, {
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
      .get(`http://127.0.0.1:8000/onepage/talentd/${props}/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/registered/talent/detail", {
          state: { talent_id: props }
        });
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  return (
    <RChronology>
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
                  <h5 className="table-header-header-text">
                    特技を一言で表すと
                  </h5>
                </th>
                <th className="table-header-header">
                  <h5 className="table-header-header-text">ステータス</h5>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {getFirstFlag && (
                <tr
                  className="table-body-row"
                  onClick={() => onClickDetail(first.pk)}
                >
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{first.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-green">選択中</h6>
                  </td>
                </tr>
              )}
              {getSecondFlage && (
                <tr
                  className="table-body-row"
                  onClick={() => onClickDetail(second.pk)}
                >
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{second.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-green">選択中</h6>
                  </td>
                </tr>
              )}
              {getThirdFlage && (
                <tr
                  className="table-body-row"
                  onClick={() => onClickDetail(third.pk)}
                >
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{third.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-green">選択中</h6>
                  </td>
                </tr>
              )}
              {getFourthFlage && (
                <tr
                  className="table-body-row"
                  onClick={() => onClickDetail(fourth.pk)}
                >
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fourth.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-green">選択中</h6>
                  </td>
                </tr>
              )}
              {getFifthFlage && (
                <tr
                  className="table-body-row"
                  onClick={() => onClickDetail(fifth.pk)}
                >
                  <td className="table-body-data-title">
                    <h6 className="table-body-data-basic">{fifth.title}</h6>
                  </td>
                  <td className="table-body-data-item">
                    <h6 className="table-body-data-green">選択中</h6>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="list-paging"></div>
      </div>
    </RChronology>
  );
};

const RChronology = styled.div`
  padding-top: 48px;
  padding-bottom: 24px;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  width: 80%;
  height: 100%;

  .list {
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  }

  .label {
    padding: 24px;
    line-height: 1;
    opacity: 1;
    background: transparent;
    color: rgb(52, 71, 103);

    &-title {
      margin: 0px;
      font-size: 1.25rem;
      line-height: 1.375;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      letter-spacing: 0em;
      opacity: 1;
      text-transform: none;
      vertical-align: unset;
      text-decoration: none;
      color: rgb(52, 71, 103);
      font-weight: 600;
    }

    &-span {
      margin: 0px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 0.875rem;
      line-height: 1.5;
      letter-spacing: 0.02857em;
      opacity: 1;
      text-transform: none;
      vertical-align: unset;
      text-decoration: none;
      color: rgb(103, 116, 142);
      font-weight: 400;
    }
  }

  .containt {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .table {
    display: table;
    width: 90%;
    border-collapse: collapse;
    border-spacing: 0px;

    &-header {
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      display: table-row-group;

      &-row {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0px;
      }

      &-header {
        padding: 12px 18px;
        opacity: 1;
        background: transparent;
        color: rgb(52, 71, 103);

        &-text {
          position: relative;
          text-align: left;
          font-size: 0.8rem;
          font-weight: 500;
          opacity: 0.9;
          background: transparent;
          color: rgb(131, 146, 171);
        }
      }
    }

    &-body {
      display: table-row-group;

      &-row {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0px;
        border-top: 0.0625rem solid rgb(233, 236, 239);
      }

      &-data {
        width: 25%;
        font-weight: 400;
        font-size: 0.94rem;
        line-height: 1.43;
        display: table-cell;
        vertical-align: inherit;
        text-align: left;
        padding: 20px 18px;
        color: rgba(0, 0, 0, 0.87);

        &-title {
          width: 35%;
          font-weight: 400;
          font-size: 0.94rem;
          line-height: 2;
          display: table-cell;
          vertical-align: inherit;
          text-align: left;
          padding: 25px 18px;
          color: rgba(0, 0, 0, 0.87);
        }

        &-item {
          width: 20%;
          font-weight: 400;
          font-size: 0.94rem;
          line-height: 1.43;
          display: table-cell;
          vertical-align: inherit;
          text-align: left;
          padding: 14px 18px;
          color: rgba(0, 0, 0, 0.87);
        }

        &-green {
          background-color: rgb(235, 250, 242);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          padding: 10px;
          border-radius: 15px;
          width: 120px;
          color: rgb(17 163 0);
          font-weight: 500;
        }

        &-basic {
          color: rgb(52, 71, 103);
          font-size: 1.2rem;
        }

        &-year {
          display: flex;
          color: rgb(52, 71, 103);
        }

        &-image {
          flex-shrink: 0;
          width: 150px;
          height: 100px;
          font-family: "DM Sans", sans-serif;
          font-size: 1.25rem;
          line-height: 1;
          overflow: hidden;
          user-select: none;
          border-radius: 1rem;

          img {
            width: 100%;
            height: 100%;
            text-align: center;
            object-fit: cover;
          }
        }

        &-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 24px;

          h6 {
            line-height: 1.5;
            font-size: 0.085rem;
            color: rgb(103, 116, 142);
          }
          h4 {
            line-height: 1.5;
            font-weight: 600;
            letter-spacing: 0.05rem;
            color: rgb(52, 71, 103);
          }
        }
      }
    }
  }
`;
