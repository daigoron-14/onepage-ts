import styled from "styled-components";
import { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

type CreateLikeCardType = {
  image: string;
  title: string;
  text: string;
};

export const CreateLikeCard = (props: CreateLikeCardType) => {
  const { image, title, text } = props;

  return (
    <CreateLikeCards>
      <div className="like-image">
        <div className="like-image-item"></div>
      </div>
      <div className="like-containt">
        <div className="like-containt-label">
          <span className="like-containt-label-icon">
            <FavoriteIcon />
          </span>
          <span className="like-containt-label-item">好きなもの</span>
        </div>
        <div className="like-containt-title">
          <span className="like-containt-title-item">{title}</span>
        </div>
        <div className="like-containt-text">
          <span className="like-containt-text-item">{text}</span>
        </div>
      </div>
    </CreateLikeCards>
  );
};

const CreateLikeCards = styled.div`
  background-color: #fff;
  width: 31%;
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .like {
    &-image {
      &-item {
        width: 100%;
        height: 200px;
        background-color: rgb(33, 33, 33);
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
        }
      }

      &-text {
        &-item {
          line-height: 1.5rem;
          overflow-wrap: break-word;
        }
      }
    }
  }
`;
