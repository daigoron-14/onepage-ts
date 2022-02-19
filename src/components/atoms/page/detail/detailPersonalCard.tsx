import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import NewReleasesIcon from "@material-ui/icons/NewReleases";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

type PersonalCardType = {
  label: string;
  id: string;
};

export const DetailPersonalCard = (props: PersonalCardType) => {
  const { label, id } = props;

  const [hobbyText, setHobbyText] = useState("");
  const [stressText, setStressText] = useState("");
  const [talentText, setTalentText] = useState("");
  const [hobbyTitle, setHobbyTitle] = useState("");
  const [stressTitle, setStressTitle] = useState("");
  const [talentTitle, setTalentTitle] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id != "") {
      if (label === "趣味") {
        axios
          .get(`https://onepage-server.com/onepage/hobbyd/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setHobbyTitle(res.data.hobby_name);
            setHobbyText(res.data.hobby_good);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      } else if (label === "特技") {
        axios
          .get(`https://onepage-server.com/onepage/talentd/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setTalentTitle(res.data.talent_name);
            setTalentText(res.data.talent_text);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      } else if (label === "ストレス") {
        axios
          .get(`https://onepage-server.com/onepage/stressd/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setStressTitle(res.data.stress_name);
            setStressText(res.data.stress_reason);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      }
    }
  }, [id]);

  return (
    <PersonalCards>
      <div className="personal-label">
        <span className="personal-label-icon">
          {(label === "ストレス" && <NewReleasesIcon />) ||
            (label === "趣味" && <StarIcon />) ||
            (label === "特技" && <ThumbUpAltIcon />)}
        </span>
        <span className="personal-label-item">{label}</span>
      </div>
      <div className="personal-title">
        {(label === "趣味" && (
          <span className="personal-title-item">「{hobbyTitle}」</span>
        )) ||
          (label === "特技" && (
            <span className="personal-title-item">「{talentTitle}」</span>
          )) ||
          (label === "ストレス" && (
            <span className="personal-title-item">「{stressTitle}」</span>
          ))}
      </div>
      <div className="personal-text">
        {(label === "趣味" && (
          <span className="personal-text-item">{hobbyText}</span>
        )) ||
          (label === "特技" && (
            <span className="personal-text-item">{talentText}</span>
          )) ||
          (label === "ストレス" && (
            <span className="personal-text-item">{stressText}</span>
          ))}
      </div>
    </PersonalCards>
  );
};

const PersonalCards = styled.div`
  background-color: #fff;
  width: 31%;
  border-radius: 0.75rem;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  /* flex: 1 0 auto; */

  .personal {
    &-label {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 45px;
        margin-right: 22px;
        background: linear-gradient(
          310deg,
          rgba(33, 82, 255, 0.75),
          rgb(33, 212, 253, 0.75)
        );
        color: #fff;
        border-radius: 0.75rem;
      }

      &-item {
        color: rgb(73, 80, 87);
        font-size: 22px;
        font-weight: 600;
      }
    }

    &-title {
      margin-bottom: 30px;
      margin-left: -9px;
      &-item {
        color: rgb(73, 80, 87);
        font-size: 20px;
        font-weight: 500;
      }
    }

    &-text {
      border-radius: 0.75rem;
      border: 0.0625rem solid rgb(210, 214, 218);
      padding: 20px;
      overflow-wrap: break-word;
      font-size: 15px;
      line-height: 1.8rem;
      min-height: 150px;

      &-item {
        line-height: 1.5rem;
        overflow-wrap: break-word;
        font-size: 17px;
        color: rgba(73, 80, 87, 0.9);
      }
    }
  }
`;
