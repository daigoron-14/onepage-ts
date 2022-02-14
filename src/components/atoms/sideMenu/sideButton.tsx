import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useState } from "react";

type SideButtonProps = {
  icon: JSX.Element;
  title: string;
  iconFlag: boolean;
  setValue: Function;
  value: boolean;
  classname: string;
};

export const SideButton = (props: SideButtonProps) => {
  const { icon, title, iconFlag, setValue, value, classname } = props;

  const pullDown = () => setValue(!value);

  return (
    <SideMenuButton>
      <div className={classname} onClick={pullDown}>
        <div className="list-icon">{icon}</div>
        <div className="list-title">
          <span>{title}</span>
        </div>
        {iconFlag && (
          <span className="list-icon-end">
            <ExpandMoreIcon fontSize="small" />
          </span>
        )}
      </div>
    </SideMenuButton>
  );
};

const SideMenuButton = styled.li`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-top: 0px;
  padding-bottom: 0px;

  .list {
    opacity: 1;
    background: rgb(248, 249, 250);
    color: rgb(52, 71, 103);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0.675rem 0.8rem 0.675rem 1rem;
    margin: 0px 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    &-color {
      opacity: 1;
      background: rgb(255, 255, 255);
      color: rgb(52, 71, 103);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      padding: 0.675rem 0.8rem 0.675rem 1rem;
      margin: 0px 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
      transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      & .list-title {
        color: rgb(52, 71, 103);
        font-size: 15px;
        flex: 1 1 auto;
        min-width: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 18px;
      }

      & .list-icon {
        color: rgb(255, 255, 255);
        flex-shrink: 0;
        background: rgb(23, 193, 232);
        min-width: 2rem;
        min-height: 2rem;
        border-radius: 0.5rem;
        display: grid;
        place-items: center;
        box-shadow: rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem,
          rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
        transition: margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &-end {
          user-select: none;
          overflow: hidden;
          display: inline-block;
          text-align: center;
          flex-shrink: 0;
          margin-bottom: -0.0625rem;
          color: rgba(58, 65, 111, 0.4);
        }
      }
    }

    &-icon {
      &-end {
        user-select: none;
        overflow: hidden;
        display: inline-block;
        text-align: center;
        flex-shrink: 0;
        margin-bottom: -0.0625rem;
        color: rgba(58, 65, 111, 0.4);
      }

      color: rgba(0, 0, 0, 0.54);
      flex-shrink: 0;
      background: rgb(255, 255, 255);
      min-width: 2rem;
      min-height: 2rem;
      border-radius: 0.5rem;
      display: grid;
      place-items: center;
      box-shadow: rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem,
        rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
      transition: margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    &-title {
      color: rgb(103, 116, 142);
      font-size: 15px;
      flex: 1 1 auto;
      min-width: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: 18px;
    }
  }
`;
