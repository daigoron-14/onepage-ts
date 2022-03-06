import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

type VideoCardType = {
  title?: string;
  id: string;
  setValue: Function;
  value: boolean;
  label: string;
  auth?: string;
};

export const DetailVideoCard = (props: VideoCardType) => {
  const { title, setValue, value, id, label, auth } = props;

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const [motivationVideo, setMotivationVideo] = useState("");
  const [frustrationVideo, setFrustrationVideo] = useState("");
  const [extracurricularVideo, setExtracurricularVideo] = useState("");
  const [interviewVideo, setInterviewVideo] = useState("");
  const [selfproduceVideo, setSelfproduceVideo] = useState("");
  const [motivationText, setMotivationText] = useState("");
  const [frustrationText, setFrustrationText] = useState("");
  const [extracurricularText, setExtracurricularText] = useState("");
  const [interviewText, setInterviewText] = useState("");
  const [selfproduceText, setSelfproduceText] = useState("");
  const [otherVideo1, setOtherVideo1] = useState("");
  const [otherVideo2, setOtherVideo2] = useState("");
  const [otherVideo3, setOtherVideo3] = useState("");
  const [otherLabel1, setOtherLabel1] = useState("");
  const [otherLabel2, setOtherLabel2] = useState("");
  const [otherLabel3, setOtherLabel3] = useState("");
  const [otherText1, setOtherText1] = useState("");
  const [otherText2, setOtherText2] = useState("");
  const [otherText3, setOtherText3] = useState("");

  const OnClickToggle = () => setValue(!value);

  useEffect(() => {
    if (auth !== "") {
      if (id != "") {
        if (label === "motiv") {
          axios
            .get(`https://onepage-server.com/onepage/motiv/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setMotivationVideo(res.data.motivation_file);
              setMotivationText(res.data.motivation_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "self") {
          axios
            .get(`https://onepage-server.com/onepage/self/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setSelfproduceVideo(res.data.selfproduce_file);
              setSelfproduceText(res.data.selfproduce_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "extra") {
          axios
            .get(`https://onepage-server.com/onepage/extra/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setExtracurricularVideo(res.data.extra_file);
              setExtracurricularText(res.data.extra_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "inter") {
          axios
            .get(`https://onepage-server.com/onepage/inter/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setInterviewVideo(res.data.interview_file);
              setInterviewText(res.data.interview_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "frust") {
          axios
            .get(`https://onepage-server.com/onepage/frust/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setFrustrationVideo(res.data.frustration_file);
              setFrustrationText(res.data.frustration_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other1") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setOtherVideo1(res.data.other_file);
              setOtherLabel1(res.data.other_label);
              setOtherText1(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other2") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setOtherVideo2(res.data.other_file);
              setOtherLabel2(res.data.other_label);
              setOtherText2(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other3") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${auth}`
              }
            })
            .then((res) => {
              setOtherVideo3(res.data.other_file);
              setOtherLabel3(res.data.other_label);
              setOtherText3(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    } else {
      console.log("not authentication");
      if (id != "") {
        if (label === "motiv") {
          axios
            .get(`https://onepage-server.com/onepage/motiv/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setMotivationVideo(res.data.motivation_file);
              setMotivationText(res.data.motivation_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "self") {
          axios
            .get(`https://onepage-server.com/onepage/self/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setSelfproduceVideo(res.data.selfproduce_file);
              setSelfproduceText(res.data.selfproduce_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "extra") {
          axios
            .get(`https://onepage-server.com/onepage/extra/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setExtracurricularVideo(res.data.extra_file);
              setExtracurricularText(res.data.extra_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "inter") {
          axios
            .get(`https://onepage-server.com/onepage/inter/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setInterviewVideo(res.data.interview_file);
              setInterviewText(res.data.interview_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "frust") {
          axios
            .get(`https://onepage-server.com/onepage/frust/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setFrustrationVideo(res.data.frustration_file);
              setFrustrationText(res.data.frustration_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other1") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setOtherVideo1(res.data.other_file);
              setOtherLabel1(res.data.other_label);
              setOtherText1(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other2") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setOtherVideo2(res.data.other_file);
              setOtherLabel2(res.data.other_label);
              setOtherText2(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        } else if (label === "other3") {
          axios
            .get(`https://onepage-server.com/onepage/otherd/${id}/`, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
              }
            })
            .then((res) => {
              setOtherVideo3(res.data.other_file);
              setOtherLabel3(res.data.other_label);
              setOtherText3(res.data.other_text);
            })
            .catch((err) => {
              console.log(err.res.data);
            });
        }
      }
    }
  }, [id]);

  return (
    <VideoCards>
      <div className="header">
        <div className="header-title">
          {(label === "other1" && (
            <h6 className="header-title-text">{otherLabel1}</h6>
          )) ||
            (label === "other2" && (
              <h6 className="header-title-text">{otherLabel2}</h6>
            )) ||
            (label === "other3" && (
              <h6 className="header-title-text">{otherLabel3}</h6>
            )) ||
            ((title === "other3" || "other2" || "other1") && (
              <h6 className="header-title-text">{title}</h6>
            ))}
        </div>
        <div className="header-change" onClick={OnClickToggle}>
          <button type="button" className="header-change-button">
            video
          </button>
          <button type="button" className="header-change-button">
            text
          </button>
          <span
            className="header-change-cover"
            style={
              value
                ? { left: "5px", width: "70px" }
                : { left: "75px", width: "70px" }
            }
          ></span>
        </div>
      </div>
      <div className="body">
        {label === "motiv" &&
          (value ? (
            <video
              src={motivationVideo}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{motivationText}</div>
          ))}
        {label === "self" &&
          (value ? (
            <video
              src={selfproduceVideo}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{selfproduceText}</div>
          ))}
        {label === "extra" &&
          (value ? (
            <video
              src={extracurricularVideo}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{extracurricularText}</div>
          ))}
        {label === "frust" &&
          (value ? (
            <video
              src={frustrationVideo}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{frustrationText}</div>
          ))}
        {label === "inter" &&
          (value ? (
            <video
              src={interviewVideo}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{interviewText}</div>
          ))}
        {label === "other1" &&
          (value ? (
            <video
              src={otherVideo1}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{otherText1}</div>
          ))}
        {label === "other2" &&
          (value ? (
            <video
              src={otherVideo2}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{otherText2}</div>
          ))}
        {label === "other3" &&
          (value ? (
            <video
              src={otherVideo3}
              className="body-video"
              controls
              muted
            ></video>
          ) : (
            <div className="body-text">{otherText3}</div>
          ))}
      </div>
    </VideoCards>
  );
};

const VideoCards = styled.div`
  width: 48%;
  height: 415px;
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      &-text {
        font-weight: 500;
        font-size: 22px;
        color: rgb(52, 71, 103);
      }
    }

    &-change {
      position: relative;
      padding: 5px 5px;
      border-radius: 0.75rem;
      background-color: rgb(238, 239, 238);
      cursor: pointer;
      z-index: 1;

      &-button {
        padding: 5px 10px;
        width: 70px;
        font-size: 16px;
        font-weight: 400;
        color: rgb(52, 71, 103);
        border: none;
        background-color: rgba(255, 255, 255, 0);
        cursor: pointer;
      }

      &-cover {
        position: absolute;
        width: 100%;
        height: 28px;
        border-radius: 0.75rem;
        background-color: #fff;
        box-shadow: rgb(221 221 221) 0rem 0.0625rem 0.3125rem 0.0625rem;
        transition: all 500ms ease 0s;
        z-index: -1;
        cursor: pointer;
      }
    }
  }

  .body {
    padding-top: 30px;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;

    &-video {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 0.75rem;
    }

    &-text {
      height: 300px;
      width: 100%;
      border-radius: 0.75rem;
      border: 0.0625rem solid rgb(210, 214, 218);
      padding: 20px;
      overflow-wrap: break-word;
      font-size: 18px;
      line-height: 1.8rem;
    }
  }
`;
