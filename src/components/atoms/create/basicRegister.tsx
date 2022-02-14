import styled from "styled-components";
import { ChangeEvent, useState, createContext } from "react";

type BasicInputType = {
  title: string;
  name: string;
  placeholder: string;
  setValue: Function;
};

export const firstNameKanjiContext = createContext("");
export const lastNameKanjiContext = createContext("");

export const BasicRegister = (props: BasicInputType) => {
  const { title, name, placeholder, setValue } = props;

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <BInput>
      <div className="basic-label">
        <label className="basic-label-item" htmlFor="">
          {title}
        </label>
      </div>
      <div className="basic-input">
        <input
          className="basic-input-text"
          name={name}
          placeholder={placeholder}
          type="text"
          onChange={onChangeEvent}
        />
      </div>
      <div className="basic-alert">
        <div className="basic-alert-item">必須項目です</div>
      </div>
    </BInput>
  );
};

const BInput = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  flex-basis: 100%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 100%;

  .basic {
    &-label {
      margin-bottom: 8px;
      margin-left: 4px;
      line-height: 0;
      display: inline-block;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);

      &-item {
        margin: 0px;
        font-size: 0.75rem;
        line-height: 1.25;
        letter-spacing: 0.03333em;
        opacity: 1;
        text-transform: capitalize;
        vertical-align: unset;
        text-decoration: none;
        color: rgb(52, 71, 103);
        font-weight: 700;
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
        height: 1.375rem;
        width: 100% !important;
        padding: 0px !important;
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
