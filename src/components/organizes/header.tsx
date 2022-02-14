import styled from "styled-components";
import { useContext } from "react";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

type HeaderType = {
  setValue: Function;
  value: boolean;
};

export const Header = (props: HeaderType) => {
  const { setValue, value } = props;

  const onClickToggle = () => {
    setValue(!value);
  };

  return (
    <HeaderBox>
      <div className="header-content">
        <div className="header-block">
          <div className="header-block-content">
            <nav className="header-nav">
              <ol className="header-list">
                <li className="header-list-home">
                  <a href="#">
                    <span>
                      <HomeIcon fontSize="small" />
                    </span>
                  </a>
                </li>
                <li className="header-list-slash">/</li>
                <li className="header-list-item">
                  <a href="#">
                    <span>Pages</span>
                  </a>
                </li>
                <li className="header-list-slash">/</li>
                <li className="header-list-item">
                  <a href="#">
                    <span>Widgets</span>
                  </a>
                </li>
              </ol>
            </nav>
            <h6 className="header-title">Widgets</h6>
          </div>
          <span className="header-menu" onClick={onClickToggle}>
            <MenuIcon fontSize="small" />
          </span>
        </div>
        <div className="header-block-second">
          <div className="header-search">
            <div className="header-search-content">
              <div className="header-search-icon">
                <span>
                  <SearchIcon fontSize="small" />
                </span>
              </div>
              <div className="header-search-text">
                <input placeholder="Search" type="text" />
              </div>
            </div>
          </div>
          <div className="header-icons">
            <a href="/signin">
              <button className="header-icons-button">
                <span className="header-icons-button-icon">
                  <AccountCircleIcon fontSize="small" />
                </span>
                <span className="header-icons-button-text">Sign in</span>
              </button>
            </a>
            <button className="header-icons-button">
              <span>
                <SettingsIcon fontSize="small" />
              </span>
            </button>
            <button className="header-icons-button">
              <span>
                <NotificationsNoneIcon fontSize="small" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  display: grid;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  z-index: 1100;
  box-shadow: rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset,
    rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  backdrop-filter: saturate(200%) blur(1.875rem);
  background-color: rgba(255, 255, 255, 0.8);
  color: rgb(52, 71, 103);
  top: 0.75rem;
  min-height: 4.6875rem;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem 20px;

  .header {
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-block {
      opacity: 1;
      background: transparent;
      color: inherit;
      display: flex;
      align-items: center;
      width: 100%;

      &-content {
        opacity: 1;
        background: transparent;
        color: rgb(52, 71, 103);
      }

      &-second {
        opacity: 1;
        background: transparent;
        color: rgb(52, 71, 103);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: flex-end;
        width: 100%;
      }
    }

    &-nav {
      margin: 0px;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.625;
      letter-spacing: 0.00938em;
      color: rgba(0, 0, 0, 0.6);
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px;
      margin: 0px;
      list-style: none;

      a {
        text-decoration: none !important;
      }

      &-home {
        line-height: 0;

        span {
          margin: 0px;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: 0.01071em;
          opacity: 0.5;
          text-transform: none;
          vertical-align: unset;
          text-decoration: none;
          color: rgb(52, 71, 103);
          line-height: 0;
        }
      }

      &-item {
        line-height: 0;

        span {
          margin: 0px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          letter-spacing: 0.02857em;
          opacity: 0.5;
          text-transform: capitalize;
          vertical-align: unset;
          text-decoration: none;
          color: rgb(52, 71, 103);
          font-weight: 400;
          line-height: 0;
        }
      }

      &-slash {
        display: flex;
        user-select: none;
        margin-left: 8px;
        margin-right: 8px;
        font-size: 0.875rem;
        color: rgb(108, 117, 125);
      }
    }

    &-title {
      margin: 0px;
      font-size: 1rem;
      line-height: 1.625;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      letter-spacing: 0.0075em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 1;
      text-transform: capitalize;
      vertical-align: unset;
      text-decoration: none;
      color: rgb(52, 71, 103);
      font-weight: 700;
    }

    &-menu {
      user-select: none;
      width: 1em;
      height: 1em;
      overflow: hidden;
      text-align: center;
      flex-shrink: 0;
      font-size: 1.5rem;
      cursor: pointer;
      margin-left: 40px;
    }

    &-search {
      padding-right: 8px;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);

      &-content {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        border: 0.0625rem solid rgb(210, 214, 218);
        border-radius: 0.5rem;
      }

      &-icon {
        line-height: 0;
        padding: 0.5rem 0.625rem;
        width: 2.4375rem;
        height: 100%;
        color: rgb(52, 71, 103);

        span {
          user-select: none;
          width: 1em;
          height: 1em;
          overflow: hidden;
          display: inline-block;
          text-align: center;
          flex-shrink: 0;
          font-weight: 700;
          font-size: 1.25rem !important;
        }
      }

      &-text {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        -webkit-box-align: center;
        padding: 0.5rem 0.75rem 0.5rem 0px;
        border: 0.0625rem solid transparent;
        pointer-events: auto;
        border-radius: 0px 0.5rem 0.5rem 0px;
        display: grid !important;
        place-items: center !important;
        width: 100% !important;
        height: auto !important;
        font-size: 0.875rem !important;
        font-weight: 400 !important;
        line-height: 1.4 !important;
        color: rgb(73, 80, 87) !important;
        background-color: rgb(255, 255, 255) !important;
        background-clip: padding-box !important;
        appearance: none !important;

        input {
          font: inherit;
          letter-spacing: inherit;
          color: currentcolor;
          border: 0px;
          box-sizing: content-box;
          background: none;
          margin: 0px;
          -webkit-tap-highlight-color: transparent;
          display: block;
          min-width: 0px;
          animation-name: mui-auto-fill-cancel;
          animation-duration: 10ms;
          height: 1.375rem;
          width: 100% !important;
          padding: 0px !important;
        }
      }
    }

    &-icons {
      opacity: 1;
      background: transparent;
      color: inherit;
      display: flex;
      align-items: center;
      width: 200px;

      a {
        text-decoration: none !important;
      }

      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background-color: transparent;
        outline: 0px;
        border: 0px;
        margin: 0px;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        appearance: none;
        text-decoration: none;
        overflow: visible;
        color: inherit;
        padding: 5px;
        margin-right: 5px;

        &-icon {
          margin-right: 8px;
          user-select: none;
          overflow: hidden;
          display: inline-block;
          text-align: center;
          flex-shrink: 0;
          color: rgb(52, 71, 103);
        }

        &-text {
          font-size: 0.875rem;
          line-height: 1.5;
          letter-spacing: 0.02857em;
          opacity: 1;
          text-transform: none;
          vertical-align: unset;
          text-decoration: none;
          color: rgb(52, 71, 103);
          font-weight: 500;
          display: inline-block;
        }
      }
    }
  }
`;
