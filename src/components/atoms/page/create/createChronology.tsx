import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Brightness1Icon from "@material-ui/icons/Brightness1";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

type CreateChronologyType = {
  path: string;
};

export const CreateChronology = (props: CreateChronologyType) => {
  const { path } = props;
  const navigate = useNavigate();

  const OnClickLink = () => {
    navigate(path);
  };

  return (
    <TopChronologies>
      <div className="top-side">
        <div className="top-side-line"></div>
        <Brightness1Icon className="top-side-icon" />
      </div>
      <div className="body" onClick={OnClickLink}>
        <div className="body-add">
          <label className="body-add-label">年表を選択する</label>
          <div className="body-add-button">
            <span className="body-add-button-icon">
              <LibraryBooksIcon className="body-add-button-icon-item" />
            </span>
          </div>
        </div>
      </div>
    </TopChronologies>
  );
};

const TopChronologies = styled.div`
  display: flex;
  width: 28%;

  .top {
    height: 100%;

    &-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: -4px;

      &-line {
        height: 100%;
        border-left: 0.0625rem solid rgb(150, 150, 150);
      }
      &-icon {
        height: 15px;
        width: 15px;
        color: rgb(150, 150, 150);
      }
    }
  }

  .body {
    padding-left: 10px;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;

    &-add {
      height: 300px;
      width: 100%;
      border-radius: 0.75rem;
      border: 0.0625rem solid rgb(210, 214, 218);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(52, 71, 103);

      &:hover {
        background-color: rgb(237, 237, 237);
      }

      &-label {
        font-size: 22px;
        color: inherit;
        margin-bottom: 20px;
      }

      &-button {
        height: 80px;
        width: 80px;
        border: 0.0625rem solid rgba(52, 71, 103, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
          &-item {
            font-size: 38px;
            color: inherit;
          }
        }
      }
    }
  }
`;
