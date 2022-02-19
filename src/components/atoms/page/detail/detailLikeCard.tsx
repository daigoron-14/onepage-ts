import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import FavoriteIcon from "@material-ui/icons/Favorite";

type LikeCardType = {
  label: string;
  id: string;
};

export const DetailLikeCard = (props: LikeCardType) => {
  const { label, id } = props;

  const [likeImage1, setLikeImage1] = useState("");
  const [likeImage2, setLikeImage2] = useState("");
  const [likeImage3, setLikeImage3] = useState("");
  const [likeText1, setLikeText1] = useState("");
  const [likeText2, setLikeText2] = useState("");
  const [likeText3, setLikeText3] = useState("");
  const [likeTitle1, setLikeTitle1] = useState("");
  const [likeTitle2, setLikeTitle2] = useState("");
  const [likeTitle3, setLikeTitle3] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id != "") {
      if (label === "1") {
        axios
          .get(`https://onepage-server.com/onepage/liked/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setLikeImage1(res.data.like_image);
            setLikeTitle1(res.data.like_name);
            setLikeText1(res.data.like_text);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      } else if (label === "2") {
        axios
          .get(`https://onepage-server.com/onepage/liked/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setLikeImage2(res.data.like_image);
            setLikeTitle2(res.data.like_name);
            setLikeText2(res.data.like_text);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      } else if (label === "3") {
        axios
          .get(`https://onepage-server.com/onepage/liked/${id}/`, {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            setLikeImage3(res.data.like_image);
            setLikeTitle3(res.data.like_name);
            setLikeText3(res.data.like_text);
          })
          .catch((err) => {
            console.log(err.res.data);
          });
      }
    }
  }, [id]);

  return (
    <LikeCards>
      <div className="like-image">
        {(label === "1" && (
          <img src={likeImage1} alt="" className="like-image-item" />
        )) ||
          (label === "2" && (
            <img src={likeImage2} alt="" className="like-image-item" />
          )) ||
          (label === "3" && (
            <img src={likeImage3} alt="" className="like-image-item" />
          ))}
      </div>
      <div className="like-containt">
        <div className="like-containt-label">
          <span className="like-containt-label-icon">
            <FavoriteIcon />
          </span>
          <span className="like-containt-label-item">好きなもの</span>
        </div>
        <div className="like-containt-title">
          {(label === "1" && (
            <span className="like-containt-title-item">「{likeTitle1}」</span>
          )) ||
            (label === "2" && (
              <span className="like-containt-title-item">「{likeTitle2}」</span>
            )) ||
            (label === "3" && (
              <span className="like-containt-title-item">「{likeTitle3}」</span>
            ))}
        </div>
        <div className="like-containt-text">
          {(label === "1" && (
            <span className="like-containt-text-item">{likeText1}</span>
          )) ||
            (label === "2" && (
              <span className="like-containt-text-item">{likeText2}</span>
            )) ||
            (label === "3" && (
              <span className="like-containt-text-item">{likeText3}</span>
            ))}
        </div>
      </div>
    </LikeCards>
  );
};

const LikeCards = styled.div`
  background-color: #fff;
  width: 31%;
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .like {
    &-image {
      &-item {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 0.75rem 0.75rem 0px 0px;
      }
    }

    &-containt {
      padding: 24px;
      width: 100%;

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
        margin-bottom: 20px;
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
        padding: 15px;
        overflow-wrap: break-word;
        font-size: 15px;
        line-height: 1.8rem;

        &-item {
          line-height: 1.5rem;
          overflow-wrap: break-word;
          font-size: 17px;
          color: rgba(73, 80, 87, 0.9);
        }
      }
    }
  }
`;
