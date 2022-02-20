import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";

export const SuccessPage = () => {
  const navigate = useNavigate();

  const OnClickLink = () => {
    navigate("/dashboard");
  };

  return (
    <SuccessPages>
      <div className="success">
        <div className="success-icon">
          <SendIcon className="success-icon-item" />
        </div>
        <div className="success-label">
          <label className="success-label-item">入力情報を登録しました</label>
        </div>
        <div className="success-button" onClick={OnClickLink}>
          <span className="success-button-item">ホームに戻る</span>
        </div>
      </div>
    </SuccessPages>
  );
};

const SuccessPages = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .success {
    color: rgba(0, 0, 0, 0.87);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    height: 100%;
    width: 64%;

    &-icon {
      margin-top: 60px;
      padding: 18px;
      border-radius: 50%;
      background-color: rgb(23, 193, 232);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 15px rgba(23, 193, 232, 0.6);

      &-item {
        width: 45px;
        height: 45px;
        color: #fff;
      }
    }

    &-label {
      margin-top: 30px;

      &-item {
        font-size: 21px;
        color: rgb(52, 71, 103);
      }
    }

    &-button {
      cursor: pointer;
      margin-top: 60px;
      margin-bottom: 60px;
      background-image: linear-gradient(
        310deg,
        rgb(20, 23, 39),
        rgb(58, 65, 111)
      );
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 40px;
      border-radius: 1rem;
      box-shadow: rgb(0 0 0 / 11%) 0rem 0.25rem 0.4375rem -0.0625rem,
        rgb(0 0 0 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;

      &-item {
        color: #fff;
        font-size: 18px;
      }
    }
  }
`;
