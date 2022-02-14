import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";

type RadioInputType = {
  label: string;
  first: string;
  second: string;
  third: string;
  setValue: Function;
  checked: string;
};

export const LadioInput = (props: RadioInputType) => {
  const { label, first, second, third, setValue, checked } = props;
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    if (checked === "男性") {
      setA(true);
    } else if (checked === "女性") {
      setB(true);
    } else if (checked === "その他") {
      setC(true);
    }
  });

  return (
    <Ladio>
      <div className="radio-label">
        <label className="radio-label-item" htmlFor="">
          {label}
        </label>
      </div>
      <div className="radio-input">
        <div className="radio-input-item">
          <input
            type="radio"
            name="gender"
            value="男性"
            onChange={onChangeEvent}
            checked={a}
          />
          <span>{first}</span>
        </div>
        <div className="radio-input-item">
          <input
            type="radio"
            name="gender"
            value="女性"
            onChange={onChangeEvent}
            checked={b}
          />
          <span>{second}</span>
        </div>
        <div className="radio-input-item">
          <input
            type="radio"
            name="gender"
            value="その他"
            onChange={onChangeEvent}
            checked={c}
          />
          <span>{third}</span>
        </div>
      </div>
      <div className="radio-alert">
        <div className="radio-alert-item">必須項目です</div>
      </div>
    </Ladio>
  );
};

const Ladio = styled.div`
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

  .radio {
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
      display: flex !important;
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
      min-width: 235px;

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
        display: flex !important;
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
        display: flex !important;
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
      }

      &-entering {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        padding: 0.5rem 0.75rem;
        border-color: rgb(53, 209, 245);
        box-shadow: 0rem 0rem 0rem 0.125rem rgb(129, 227, 249);
        border-radius: 0.5rem;
        pointer-events: auto;
        background-position: right 0.75rem center;
        background-size: 1rem 1rem;
        display: flex !important;
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
      }

      &-text {
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
