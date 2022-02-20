import { SBox } from "./selectDay";

import { ChangeEvent } from "react";

type SelctLanguageType = {
  title: string;
  name: string;
  setLanguage: Function;
  value: string;
  alert?: string;
};

export const SelectLanguage = (props: SelctLanguageType) => {
  const { title, name, setLanguage, value, alert } = props;

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) =>
    setLanguage(e.target.value);

  return (
    <SBox>
      <div className="select-label">
        <label className="select-label-item" htmlFor="">
          {title}
        </label>
      </div>
      <div className="select-input">
        <div className="select-input-item">
          <select name={name} onChange={onChangeValue}>
            <option value={value}>{value}</option>
            <option value="英語">英語</option>
            <option value="中国語(繁体）">中国語(繁体)</option>
            <option value="中国語（簡体）">中国語(簡体)</option>
            <option value="韓国語">韓国語</option>
            <option value="タイ語">タイ語</option>
            <option value="マレー語">マレー語</option>
            <option value="インドネシア語">インドネシア語</option>
            <option value="スペイン語">スペイン語</option>
            <option value="イタリア語">イタリア語</option>
            <option value="フランス語">フランス語</option>
            <option value="ドイツ語">ドイツ語</option>
            <option value="ロシア語">ロシア語</option>
            <option value="その他">その他</option>
          </select>
        </div>
      </div>
      <div className="select-alert">
        <div className="select-alert-item">{alert}</div>
      </div>
    </SBox>
  );
};
