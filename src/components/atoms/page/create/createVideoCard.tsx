import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CollectionsIcon from "@material-ui/icons/Collections";
import { useNavigate } from "react-router-dom";

type CreateVideoCardType = {
  title: string;
  setValue: Function;
  value: boolean;
  path: string;
};

export const CreateVideoCard = (props: CreateVideoCardType) => {
  const { title, setValue, value, path } = props;

  const navigate = useNavigate();

  const OnClickToggle = () => setValue(!value);

  const OnClickLink = () => {
    navigate(path);
  };

  return (
    <CreateVideoCards>
      <div className="header">
        <div className="header-title">
          <h6 className="header-title-text">{title}</h6>
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
        <div className="body-add" onClick={OnClickLink}>
          <label className="body-add-label">動画を選択する</label>
          <div className="body-add-button">
            <span className="body-add-button-icon">
              <CollectionsIcon className="body-add-button-icon-item" />
            </span>
          </div>
        </div>
      </div>
    </CreateVideoCards>
  );
};

const CreateVideoCards = styled.div`
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
        font-size: 20px;
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

    &-add {
      height: 300px;
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
        font-size: 28px;
        color: inherit;
        margin-bottom: 20px;
      }

      &-button {
        height: 100px;
        width: 100px;
        border: 0.0625rem solid rgba(52, 71, 103, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
          &-item {
            font-size: 50px;
            color: inherit;
          }
        }
      }
    }

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
