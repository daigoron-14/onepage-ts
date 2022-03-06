import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

type InterViewCardType = {
  pk: string;
  auth: string;
};

export const InterviewCard = (props: InterViewCardType) => {
  const { pk, auth } = props;
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    image: "",
    first_name: "",
    last_name: ""
  });

  const [school, setSchool] = useState("");

  useEffect(() => {
    axios
      .get("https://onepage-server.com/onepage/basic/", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${auth}`
        }
      })
      .then((res) => {
        console.log(res.data[0]);
        setProfile({
          image: res.data[0]["id_photo"],
          first_name: res.data[0]["first_name_kanji"],
          last_name: res.data[0]["last_name_kanji"]
        });
        axios
          .get("https://onepage-server.com/onepage/education/", {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${auth}`
            }
          })
          .then((res) => {
            setSchool(res.data[0]["school"]);
          });
      })
      .catch((err) => {
        console.log(err.res);
      });
  }, [auth]);

  const onClickNavigate = () => {
    navigate("/corporation/profile", {
      state: { page_id: pk, auth_token: auth }
    });
  };

  return (
    <InterViewCards>
      <img src={profile.image} alt="" className="incard-image" />
      <div className="incard-profile" onClick={onClickNavigate}>
        <h5 className="incard-university">{school}</h5>
        <div className="incard-name">
          <h4 className="incard-name-item">
            {profile.first_name} {profile.last_name}
          </h4>
        </div>
        <div className="incard-nav">
          <ArrowForwardIosIcon className="incard-nav-icon" />
          <span className="incard-nav-item">詳細</span>
        </div>
      </div>
    </InterViewCards>
  );
};

const InterViewCards = styled.div`
  width: 230px;
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  background-color: #fff;
  margin-right: 60px;

  .incard {
    &-image {
      height: 270px;
      width: 230px;
      object-fit: cover;
      border-radius: 0.75rem 0.75rem 0px 0px;
    }

    &-profile {
      padding: 12px;
      cursor: pointer;
    }

    &-university {
      font-size: 17px;
      margin-top: 8px;
      margin-bottom: 28px;
      color: rgb(52, 71, 103);
    }

    &-name {
      display: flex;
      justify-content: center;

      &-item {
        font-size: 25px;
        color: rgb(42, 45, 50);
      }
    }

    &-nav {
      margin-top: 28px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &-icon {
        color: rgb(103, 116, 142);
        font-size: 18px;
      }

      &-item {
        color: rgb(103, 116, 142);
      }
    }
  }
`;
