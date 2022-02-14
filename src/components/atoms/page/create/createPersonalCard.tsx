import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NewReleasesIcon from "@material-ui/icons/NewReleases";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FavoriteIcon from "@material-ui/icons/Favorite";

type CreatePersonalCardType = {
  label: string;
  path: string;
};

export const CreatePersonalCard = (props: CreatePersonalCardType) => {
  const { label, path } = props;
  const navigate = useNavigate();

  const OnClickLink = () => {
    navigate(path);
  };

  return (
    <CreatePersonalCards>
      <div className="personal-label">
        <span className="personal-label-icon">
          {(label === "ストレス" && <NewReleasesIcon />) ||
            (label === "趣味" && <StarIcon />) ||
            (label === "特技" && <ThumbUpAltIcon />) ||
            (label === "好きなもの" && <FavoriteIcon />)}
        </span>
        <span className="personal-label-item">{label}</span>
      </div>
      <div className="body" onClick={OnClickLink}>
        <div className="body-add">
          <label className="body-add-label">文章を選択する</label>
          <div className="body-add-button">
            <span className="body-add-button-icon">
              <LibraryBooksIcon className="body-add-button-icon-item" />
            </span>
          </div>
        </div>
      </div>
    </CreatePersonalCards>
  );
};

const CreatePersonalCards = styled.div`
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
  .body {
    padding-top: 30px;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;

    &-add {
      height: 200px;
      width: 100%;
      border-radius: 0.75rem;
      border: 0.0625rem solid rgb(210, 214, 218);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(52, 71, 103);

      &:hover {
        background-color: rgb(237, 237, 237);
      }

      &-label {
        font-size: 22px;
        color: inherit;
        margin-bottom: 20px;
      }

      &-button {
        height: 80px;
        width: 80px;
        border: 0.0625rem solid rgba(52, 71, 103, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
          &-item {
            font-size: 38px;
            color: inherit;
          }
        }
      }
    }
  }
`;
