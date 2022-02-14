import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Link } from "react-router-dom";

type SideButtonHideType = {
  title: string;
  listStyle: string;
  iconFlag: boolean;
  link?: string;
  classnamePull?: string;
  classnameTitle?: string;
  setValue?: Function;
  value?: boolean;
  flag?: boolean;
};

export const SideButtonHide = (props: SideButtonHideType) => {
  const {
    title,
    listStyle,
    iconFlag,
    link,
    classnamePull,
    classnameTitle,
    setValue,
    value,
    flag
  } = props;

  const pullDown = () => {
    if (flag) {
      setValue(!value);
    }
  };

  return (
    <SideHide className="sideHide-visible" onClick={pullDown}>
      <div className={classnamePull}>
        <div className="sideHide-container">
          <ul className="sideHide-containt">
            <li className={classnameTitle}>
              <div className={listStyle}>
                <Link to={link} className="link">
                  <div className="sideHide-title">
                    <span className="sideHide-title-text">{title}</span>
                  </div>
                </Link>
                {iconFlag && (
                  <span className="sideHide-icon">
                    <ExpandMoreIcon fontSize="small" />
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SideHide>
  );
};

const SideHide = styled.div`
  .link {
    text-decoration: none;
  }

  .sideHide {
    &-visible {
      opacity: 1 !important;
      height: auto !important;
      overflow: visible;
      transition: height 2s ease;
    }

    &-root {
      min-height: 0px;
      height: 0;
      transition-duration: 300ms;
      overflow: hidden;
      opacity: 0;
      display: flex;
      width: 100%;
    }

    &-container {
      width: 100%;
    }

    &-containt {
      list-style: none;
      margin: 0px 0px 0px 24px;
      padding: 0px 0px 0px 18px;
      position: relative;
      width: 186px;
      height: 100%;
      cursor: pointer;
    }

    &-list {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      text-decoration: none;
      box-sizing: border-box;
      text-align: left;
      width: 100%;
      padding: 0px;
      cursor: pointer;

      &-color {
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        text-decoration: none;
        box-sizing: border-box;
        text-align: left;
        width: 100%;
        padding: 0px;
        cursor: pointer;

        & .sideHide-item {
          opacity: 1;
          background: transparent;
          color: rgb(52, 71, 103);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          width: 100%;
          padding: 0.45rem 11px 0.45rem 19px;
          margin: 0px 0px 0px 1.35rem;
          user-select: none;
          position: relative;

          &:before {
            content: "";
            width: 0.5rem;
            height: 0.5rem;
            background-color: rgb(52, 71, 103);
            color: rgb(52, 71, 103);
            font-weight: 500;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -1.125rem;
            opacity: 1;
            border-radius: 50%;
            font-size: 0.875rem;
          }
        }

        & .sideHide-title-text {
          color: rgb(52, 71, 103);
          font-weight: 500;
          font-size: 0.875rem;
          opacity: 1;
          transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }
      }
    }

    &-none {
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding: 0.45rem 11px 0.45rem 19px;
      margin: 0px 1rem 0px 1.35rem;
      user-select: none;
      position: relative;
    }

    &-item {
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding: 0.45rem 11px 0.45rem 19px;
      margin: 0px 0px 0px 1.35rem;
      user-select: none;
      position: relative;

      &:before {
        content: "";
        width: 0.3125rem;
        height: 0.3125rem;
        background-color: rgba(58, 65, 111, 0.5);
        color: rgba(58, 65, 111, 0.5);
        font-weight: 400;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -1.125rem;
        opacity: 1;
        border-radius: 50%;
        font-size: 0.875rem;
      }
    }

    &-title {
      flex: 1 1 auto;
      min-width: 0px;
      margin-top: 0px;
      margin-bottom: 0px;

      &-text {
        color: rgba(58, 65, 111, 0.7);
        font-weight: 400;
        font-size: 0.875rem;
        opacity: 1;
        transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin: 0px;
        line-height: 1.625;
        letter-spacing: 0.00938em;
        display: block;
      }
    }

    &-icon {
      user-select: none;
      width: 1em;
      height: 1em;
      overflow: hidden;
      display: inline-block;
      text-align: center;
      flex-shrink: 0;
      font-weight: 700;
      margin-right: -0.15625rem;
      color: rgba(58, 65, 111, 0.4);
      transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-size: 1rem !important;
    }
  }
`;
