import styled from "styled-components";
import { useState, useEffect, ChangeEvent } from "react";

import BusinessIcon from "@material-ui/icons/Business";

type CompanyIdType = {
  setValue: Function;
  value: number;
};

export const CompanyName = (props: CompanyIdType) => {
  const { setValue, value } = props;

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <CompanyIdBox>
      <div className="basic-label">
        <span className="basic-label-icon">
          <BusinessIcon className="basic-label-icon-item" />
        </span>
        <label className="basic-label-item" htmlFor="">
          企業名
        </label>
      </div>
      <div className="basic-input">
        <input
          className="basic-input-text"
          name="company_id"
          type="text"
          onChange={onChangeEvent}
        />
      </div>
      <div className="basic-alert">
        <div className="basic-alert-item">必須項目です</div>
      </div>
    </CompanyIdBox>
  );
};

const CompanyIdBox = styled.div`
  width: 66%;
  padding: 24px;
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .basic {
    &-label {
      margin-bottom: 25px;
      margin-left: 4px;
      line-height: 0;
      display: inline-block;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      display: flex;
      align-items: center;

      &-item {
        margin: 0px;
        font-size: 1.2rem;
        line-height: 1.25;
        letter-spacing: 0.03333em;
        opacity: 1;
        text-transform: capitalize;
        vertical-align: unset;
        text-decoration: none;
        color: rgb(52, 71, 103);
        font-weight: 700;
      }

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
    }

    &-input {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      letter-spacing: 0.00938em;
      box-sizing: border-box;
      position: relative;
      cursor: text;
      padding: 0.5rem 0.75rem;
      border: 0.0625rem solid rgb(210, 214, 218);
      border-radius: 0.5rem;
      pointer-events: auto;
      background-position: right 0.75rem center;
      background-size: 1rem 1rem;
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
      appearance: auto !important;

      &-alert {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid rgb(253, 92, 112);
        border-radius: 0.5rem;
        pointer-events: auto;
        background-position: right 0.75rem center;
        background-size: 1rem 1rem;
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
        appearance: auto !important;
      }

      &-success {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid rgb(102, 212, 50);
        border-radius: 0.5rem;
        pointer-events: auto;
        background-position: right 0.75rem center;
        background-size: 1rem 1rem;
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
        appearance: auto !important;
      }

      &-entering {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid rgb(53, 209, 245);
        box-shadow: 0rem 0rem 0rem 0.125rem rgb(129 227 249);
        border-radius: 0.5rem;
        pointer-events: auto;
        background-position: right 0.75rem center;
        background-size: 1rem 1rem;
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
        appearance: auto !important;
      }

      &-text {
        outline: none;
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
        height: 2rem;
        width: 100% !important;
        padding: 0px !important;
        font-size: 1.1rem;
      }
    }

    &-alert {
      margin-top: 6px;
      opacity: 0;
      background: transparent;
      color: rgb(52, 71, 103);

      &-item {
        margin: 0px;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: 0.03333em;
        opacity: 1;
        text-transform: none;
        vertical-align: unset;
        text-decoration: none;
        color: rgb(234, 6, 6);
      }
    }
  }
`;
