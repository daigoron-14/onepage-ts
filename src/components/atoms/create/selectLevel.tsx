import { SBox } from "./selectDay";

import { ChangeEvent } from "react";

type SelctLanguageType = {
  title: string;
  name: string;
  setLevel: Function;
  value: string;
};

export const SelectLevel = (props: SelctLanguageType) => {
  const { title, name, setLevel, value } = props;

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) =>
    setLevel(e.target.value);

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
            <option value="日常会話レベル">日常会話レベル</option>
            <option value="ビジネスレベル">ビジネスレベル</option>
            <option value="ネイティブレベル">ネイティブレベル</option>
          </select>
        </div>
      </div>
      <div className="select-alert">
        <div className="select-alert-item">必須項目です</div>
      </div>
    </SBox>
  );
};
