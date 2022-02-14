import { SBox } from "./selectDay";

import { ChangeEvent } from "react";

type SelectSchoolType = {
  setValue: Function;
  value: string;
};

export const SelectSchool = (props: SelectSchoolType) => {
  const { setValue, value } = props;

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) =>
    setValue(e.target.value);

  return (
    <SBox>
      <div className="select-label">
        <label className="select-label-item" htmlFor="">
          学校区分
        </label>
      </div>
      <div className="select-input">
        <div className="select-input-item">
          <select name="university" onChange={onChangeValue}>
            <option value={value}>{value}</option>
            <option value="大学">大学</option>
            <option value="短期大学">短期大学</option>
            <option value="大学院">大学院</option>
            <option value="専門学校">専門学校</option>
            <option value="高専">高専</option>
            <option value="その他">その他</option>
          </select>
        </div>
      </div>
      <div className="select-alert">
        <div className="select-alert-item">必須項目です</div>
      </div>
    </SBox>
  );
};
