import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const HomePage = () => {
  return (
    <HomePages>
      <div className="home-head">
        <label className="home-head-label">OnePage</label>
      </div>
      <div className="home-head-text">
        <div className="home-head-text-item">
          写真や動画をベースとした新しい履歴書の形
        </div>
        <div className="home-head-text-item">
          Web上で情報の登録・編集から履歴書の作成まで完結
        </div>
      </div>
      <div className="home-container">
        <div className="home-containt">
          <div className="home-box">
            <div className="home-box-num">1</div>
            <div className="home-box-icon">
              <PermIdentityIcon className="home-box-icon-item" />
            </div>
            <div className="home-box-title">基本情報を入力</div>
          </div>
          <div className="home-text">
            <div className="home-text-item">
              あなたに関する基本情報を入力しましょう。
            </div>
            <div className="home-text-item">
              入力した情報はいつでも編集可能です。
            </div>
          </div>
        </div>
        <div className="home-allow">
          <ArrowForwardIosIcon className="home-allow-icon" />
        </div>
        <div className="home-containt">
          <div className="home-box">
            <div className="home-box-num">2</div>
            <div className="home-box-icon">
              <AddIcon className="home-box-icon-item" />
            </div>
            <div className="home-box-title">追加情報を入力</div>
          </div>
          <div className="home-text">
            <div className="home-text-item">
              企業ごとに変わる情報を入力しましょう。
            </div>
            <div className="home-text-item">
              追加した情報は登録一覧から確認可能です。
            </div>
          </div>
        </div>
        <div className="home-allow">
          <ArrowForwardIosIcon className="home-allow-icon" />
        </div>
        <div className="home-containt">
          <div className="home-box">
            <div className="home-box-num">3</div>
            <div className="home-box-icon">
              <NoteAddIcon className="home-box-icon-item" />
            </div>
            <div className="home-box-title">履歴書の作成と送信</div>
          </div>
          <div className="home-text">
            <div className="home-text-item">
              情報を組み合わせて履歴書を作成しましょう。
            </div>
            <div className="home-text-item">
              履歴書は作成時に自動で送信されます。
            </div>
          </div>
        </div>
      </div>
    </HomePages>
  );
};

const HomePages = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home {
    &-head {
      &-label {
        font-weight: 500;
        font-size: 60px;
        color: rgb(52, 71, 103);
      }
      &-text {
        margin-top: 50px;
        color: rgb(72, 84, 108);
        display: flex;
        flex-direction: column;
        align-items: center;
        &-item {
          font-size: 18px;
          margin-bottom: 5px;
        }
      }
    }

    &-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
    }

    &-containt {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-box {
      height: 200px;
      width: 200px;
      border: 0px solid rgba(0, 0, 0, 0.125);
      border-radius: 1rem;
      box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      &-num {
        position: absolute;
        top: -20px;
        left: -20px;
        padding: 17px 22px;
        background-color: rgb(52, 71, 103);
        border-radius: 50%;
        font-weight: 500;
        font-size: 30px;
        color: #fff;
      }

      &-icon {
        padding: 18px;
        background-color: rgb(23, 193, 232);
        border-radius: 1rem;

        &-item {
          height: 70px;
          width: 70px;
          color: #fff;
        }
      }
      &-title {
        margin-top: 20px;
        font-weight: 500;
        font-size: 18px;
        color: rgb(52, 71, 103);
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;

      &-item {
        font-size: 15px;
        margin-top: 5px;
        color: rgb(72, 84, 108);
      }
    }

    &-allow {
      margin-top: 85px;
      &-icon {
        height: 40px;
        width: 40px;
        color: rgb(52, 71, 103);
      }
    }
  }
`;
