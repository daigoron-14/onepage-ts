import styled from "styled-components";
import { ChangeEvent } from "react";

type SelectDayType = {
  title: string;
  year: string;
  month: string;
  day: string;
  dayflag: boolean;
  setYear: Function;
  setMonth: Function;
  setDay: Function;
  valueYear?: string;
  valueMonth?: string;
  valueDay?: string;
  alert?: string;
};

export const SelectDay = (props: SelectDayType) => {
  const {
    title,
    year,
    month,
    day,
    dayflag,
    setYear,
    setMonth,
    setDay,
    valueYear,
    valueMonth,
    valueDay,
    alert
  } = props;

  const onChangeYear = (e: ChangeEvent<HTMLSelectElement>) =>
    setYear(e.target.value);

  const onChangeMonth = (e: ChangeEvent<HTMLSelectElement>) =>
    setMonth(e.target.value);

  const onChangeDay = (e: ChangeEvent<HTMLSelectElement>) =>
    setDay(e.target.value);

  return (
    <SBox>
      <div className="select-label">
        <label className="select-label-item" htmlFor="">
          {title}
        </label>
      </div>
      <div className="select-input">
        <div className="select-input-item">
          <form action="">
            <select name={year} onChange={onChangeYear}>
              <option value={valueYear}>{valueYear}</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </form>
          　<span>年</span>
        </div>
        <div className="select-input-item">
          <form action="">
            <select name={month} onChange={onChangeMonth}>
              <option value={valueMonth}>{valueMonth}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </form>
          　<span>月</span>
        </div>
        {dayflag && (
          <div className="select-input-item">
            <form action="">
              <select name={day} onChange={onChangeDay}>
                <option value={valueDay}>{valueDay}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </form>
            　<span>日</span>
          </div>
        )}
      </div>
      <div className="select-alert">
        <div className="select-alert-item">{alert}</div>
      </div>
    </SBox>
  );
};

export const SBox = styled.div`
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

  .select {
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
      box-sizing: border-box;
      position: relative;
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

      &-alert {
        box-sizing: border-box;
        position: relative;
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
        box-sizing: border-box;
        position: relative;
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
        box-sizing: border-box;
        position: relative;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid rgb(53, 209, 245);
        box-shadow: 0rem 0rem 0rem 0.125rem rgb(129 227 249);
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

      &-item {
        display: flex;
        align-items: center;
        margin-right: 12px;

        select {
          outline: none;
          border: solid 1px rgb(73, 80, 87, 0.5) !important;
          border-radius: 4px;
          color: rgb(73, 80, 87, 0.8);
          background-color: -internal-light-dark(
            rgb(255, 255, 255),
            rgb(59, 59, 59)
          );
        }

        span {
          color: rgb(73, 80, 87, 0.8);
          margin: -5px;
        }
      }
    }
    &-alert {
      margin-top: 6px;
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
