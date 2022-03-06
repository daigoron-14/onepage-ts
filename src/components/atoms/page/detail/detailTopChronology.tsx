import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import Brightness1Icon from "@material-ui/icons/Brightness1";
import { LabelOff } from "@material-ui/icons";

type TopChronologyType = {
  label: string;
  id: string;
  auth: string;
};

export const DetailTopChronology = (props: TopChronologyType) => {
  const { label, id, auth } = props;

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const [chronoImage1, setChornoImage1] = useState("");
  const [chronoImage2, setChornoImage2] = useState("");
  const [chronoImage3, setChornoImage3] = useState("");
  const [chronoYear1, setChornoYear1] = useState("");
  const [chronoYear2, setChornoYear2] = useState("");
  const [chronoYear3, setChornoYear3] = useState("");
  const [chronoMonth1, setChornoMonth1] = useState("");
  const [chronoMonth2, setChornoMonth2] = useState("");
  const [chronoMonth3, setChornoMonth3] = useState("");
  const [chronoTitle1, setChornoTitle1] = useState("");
  const [chronoTitle2, setChornoTitle2] = useState("");
  const [chronoTitle3, setChornoTitle3] = useState("");
  const [chronoText1, setChornoText1] = useState("");
  const [chronoText2, setChornoText2] = useState("");
  const [chronoText3, setChornoText3] = useState("");

 
  useEffect(() => {
    if (auth !== "") {
      if (id != "") {
        if (label === "1") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage1(res.data.chrono_image);
              setChornoTitle1(res.data.chrono_title);
              setChornoText1(res.data.chrono_containt);
              setChornoYear1(res.data.chrono_year);
              setChornoMonth1(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "2") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage2(res.data.chrono_image);
              setChornoTitle2(res.data.chrono_title);
              setChornoText2(res.data.chrono_containt);
              setChornoYear2(res.data.chrono_year);
              setChornoMonth2(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "3") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage3(res.data.chrono_image);
              setChornoTitle3(res.data.chrono_title);
              setChornoText3(res.data.chrono_containt);
              setChornoYear3(res.data.chrono_year);
              setChornoMonth3(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    } else {
      if (id != "") {
        if (label === "1") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage1(res.data.chrono_image);
              setChornoTitle1(res.data.chrono_title);
              setChornoText1(res.data.chrono_containt);
              setChornoYear1(res.data.chrono_year);
              setChornoMonth1(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "2") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage2(res.data.chrono_image);
              setChornoTitle2(res.data.chrono_title);
              setChornoText2(res.data.chrono_containt);
              setChornoYear2(res.data.chrono_year);
              setChornoMonth2(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "3") {
          axios
            .get(`https://onepage-server.com/onepage/chrono/${id}/`, {
              headers: {
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              console.log(res.data);
              setChornoImage3(res.data.chrono_image);
              setChornoTitle3(res.data.chrono_title);
              setChornoText3(res.data.chrono_containt);
              setChornoYear3(res.data.chrono_year);
              setChornoMonth3(res.data.chrono_month);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    }
  }, []);

  return (
    <TopChronologies>
      <div className="top-side">
        <div className="top-side-line"></div>
        <Brightness1Icon className="top-side-icon" />
      </div>
      <div className="top-containt">
        <div className="top-containt-title">
          {(label === "1" && (
            <div className="top-containt-title-date">
              {chronoYear1}.{chronoMonth1}
            </div>
          )) ||
            (label === "2" && (
              <div className="top-containt-title-date">
                {chronoYear2}.{chronoMonth2}
              </div>
            )) ||
            (label === "3" && (
              <div className="top-containt-title-date">
                {chronoYear3}.{chronoMonth3}
              </div>
            ))}
          {(label === "1" && (
            <div className="top-containt-title-label">{chronoTitle1}</div>
          )) ||
            (label === "2" && (
              <div className="top-containt-title-label">{chronoTitle2}</div>
            )) ||
            (label === "3" && (
              <div className="top-containt-title-label">{chronoTitle3}</div>
            ))}
        </div>
        {(label === "1" && (
          <div className="top-containt-text">{chronoText1}</div>
        )) ||
          (label === "2" && (
            <div className="top-containt-text">{chronoText2}</div>
          )) ||
          (label === "3" && (
            <div className="top-containt-text">{chronoText3}</div>
          ))}
        {(label === "1" && (
          <img src={chronoImage1} alt="" className="top-containt-image" />
        )) ||
          (label === "2" && (
            <img src={chronoImage2} alt="" className="top-containt-image" />
          )) ||
          (label === "3" && (
            <img src={chronoImage3} alt="" className="top-containt-image" />
          ))}
      </div>
    </TopChronologies>
  );
};

const TopChronologies = styled.div`
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
