import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import Brightness1Icon from "@material-ui/icons/Brightness1";

type BottomChronologyType = {
  label: string;
  id: string;
  auth?: string;
};

export const DetailBottomChronology = (props: BottomChronologyType) => {
  const { label, id, auth } = props;

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const [chronoImage4, setChornoImage4] = useState("");
  const [chronoImage5, setChornoImage5] = useState("");
  const [chronoYear4, setChornoYear4] = useState("");
  const [chronoYear5, setChornoYear5] = useState("");
  const [chronoMonth4, setChornoMonth4] = useState("");
  const [chronoMonth5, setChornoMonth5] = useState("");
  const [chronoTitle4, setChornoTitle4] = useState("");
  const [chronoTitle5, setChornoTitle5] = useState("");
  const [chronoText4, setChornoText4] = useState("");
  const [chronoText5, setChornoText5] = useState("");

  useEffect(() => {
    if (auth !== "") {
      if (id != "") {
        if (label === "4") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage4(res.data.chrono_image);
              setChornoTitle4(res.data.chrono_title);
              setChornoText4(res.data.chrono_containt);
              setChornoYear4(res.data.chrono_year);
              setChornoMonth4(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "5") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage5(res.data.chrono_image);
              setChornoTitle5(res.data.chrono_title);
              setChornoText5(res.data.chrono_containt);
              setChornoYear5(res.data.chrono_year);
              setChornoMonth5(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    } else {
      if (id != "") {
        if (label === "4") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage4(res.data.chrono_image);
              setChornoTitle4(res.data.chrono_title);
              setChornoText4(res.data.chrono_containt);
              setChornoYear4(res.data.chrono_year);
              setChornoMonth4(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "5") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage5(res.data.chrono_image);
              setChornoTitle5(res.data.chrono_title);
              setChornoText5(res.data.chrono_containt);
              setChornoYear5(res.data.chrono_year);
              setChornoMonth5(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    }
  }, [auth]);

  return (
    <BottomChronologies>
      <div className="top-side">
        <div className="top-side-line"></div>
        <Brightness1Icon className="top-side-icon" />
      </div>
      <div className="top-containt">
        <div className="top-containt-title">
          {(label === "4" && (
            <div className="top-containt-title-date">
              {chronoYear4}.{chronoMonth4}
            </div>
          )) ||
            (label === "5" && (
              <div className="top-containt-title-date">
                {chronoYear5}.{chronoMonth5}
              </div>
            ))}
          {(label === "4" && (
            <div className="top-containt-title-label">{chronoTitle4}</div>
          )) ||
            (label === "5" && (
              <div className="top-containt-title-label">{chronoTitle5}</div>
            ))}
        </div>
        {(label === "4" && (
          <div className="top-containt-text">{chronoText4}</div>
        )) ||
          (label === "5" && (
            <div className="top-containt-text">{chronoText5}</div>
          ))}
        {(label === "4" && (
          <img src={chronoImage4} alt="" className="top-containt-image" />
        )) ||
          (label === "5" && (
            <img src={chronoImage5} alt="" className="top-containt-image" />
          ))}
      </div>
    </BottomChronologies>
  );
};

const BottomChronologies = styled.div`
  display: flex;
  width: 28%;

  .top {
    height: 100%;

    &-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: -4px;

      &-line {
        height: 100%;
        border-left: 0.0625rem solid rgb(150, 150, 150);
      }
      &-icon {
        height: 15px;
        width: 15px;
        color: rgb(150, 150, 150);
      }
    }

    &-containt {
      width: 100%;
      padding-left: 10px;

      &-image {
        width: 90%;
        height: 130px;
        object-fit: cover;
      }

      &-title {
        &-date {
          font-size: 23px;
          color: rgb(42, 50, 61);
          padding-bottom: 15px;
          font-weight: 500;
        }

        &-label {
          font-size: 20px;
          color: rgb(31, 122, 213);
          padding-bottom: 10px;
          font-weight: 500;
        }
      }

      &-text {
        color: rgba(73, 80, 87, 0.9);
        line-height: 1.32rem;
        overflow-wrap: break-word;
        padding-bottom: 15px;
      }
    }
  }
`;
