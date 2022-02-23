import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
  });

  const signinData = () => {
    const data = {
      username: email,
      password: password
    };

    axios
      .post("https://onepage-server.com/auth/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setEmailError("");
        console.log(localStorage.getItem("token"));
        console.log(res.data);
        axios
          .get("https://onepage-server.com/onepage/myself/", {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`
            }
          })
          .then((res) => {
            localStorage.setItem("userid", res.data.id);
            console.log("myself:", res.data);
            navigate("/dashboard/home");
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        console.log(err.response.data);
        setEmailError(err.response.data.username);
        setPasswordError(err.response.data.password);
        if (
          err.response.data.non_field_errors ==
          "提供された認証情報でログインできません。"
        ) {
          setEmailError("メールアドレスかパスワードが間違っています。");
        }
      });
  };

  return (
    <SignUpBox>
      <div className="signup-header">
        <div className="signup-header-box">
          <div className="signup-header-label">
            <h1 className="signup-header-label-item">OnePage</h1>
          </div>
          <div className="signup-header-text">
            <p className="signup-header-text-item">
              写真や動画をベースとした新しい履歴書の形を提供
            </p>
          </div>
          <div className="signup-header-text">
            <p className="signup-header-text-item">
              Web上で情報の登録・編集および履歴書の作成・送信が可能
            </p>
          </div>
        </div>
      </div>
      <div className="signup-root">
        <div className="signup-label">
          <label className="signup-label-item">sign in</label>
        </div>
        <div className="signup-form">
          <form action="">
            <div className="signup-form-container">
              <div className="signup-form-containt">
                <input
                  className="signup-form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={onChangeEmail}
                />
              </div>
              <div className="signup-alert">
                <span className="signup-alert-item">{emailError}</span>
              </div>
            </div>
            <div className="signup-form-container">
              <div className="signup-form-containt">
                <input
                  className="signup-form-input"
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={onChangePassword}
                />
              </div>
              <div className="signup-alert">
                <span className="signup-alert-item">{passwordError}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="signup-button">
          <button
            className="signup-button-item"
            type="button"
            onClick={signinData}
          >
            sign in
          </button>
          <div className="signup-button-line">
            <hr className="signup-button-line-hr" />
            <div className="signup-button-line-text">
              <span className="signup-button-line-text-item">or</span>
            </div>
          </div>
          <button
            className="signup-button-item-signup"
            type="button"
            onClick={signinData}
          >
            sign up
          </button>
        </div>
      </div>
    </SignUpBox>
  );
};

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .signup {
    &-header {
      width: 98%;
      min-height: 50vh;
      margin: 16px;
      padding-bottom: 30px;
      background-image: url("https://demos.creative-tim.com/soft-ui-dashboard-pro-react/marketplace/static/media/curved9.ec7010fa.jpg");
      background: linear-gradient(
            310deg,
            rgba(20, 23, 39, 0.6),
            rgba(58, 65, 111, 0.6)
          )
          center center / cover no-repeat,
        url("https://demos.creative-tim.com/soft-ui-dashboard-pro-react/marketplace/static/media/curved9.ec7010fa.jpg")
          transparent;
      border-radius: 0.75rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

      &-box {
        height: 50vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-label {
        margin-top: 100px;
        margin-bottom: 50px;
        &-item {
          color: #fff;
          font-weight: 600;
          font-size: 60px;
        }
      }

      &-text {
        margin-bottom: 10px;
        &-item {
          color: #fff;
          font-weight: 500;
        }
      }
    }

    &-root {
      margin-top: -120px;
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 25%;
      overflow-wrap: break-word;
      background-color: rgb(255, 255, 255);
      background-clip: border-box;
      border: 0px solid rgba(0, 0, 0, 0.125);
      border-radius: 1rem;
      box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    }

    &-label {
      padding: 24px 12px 12px 12px;
      margin-bottom: 8px;
      text-align: center;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);

      &-item {
        margin: 0px;
        font-size: 1.75rem;
        line-height: 1.375;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0em;
        opacity: 1;
        text-transform: none;
        vertical-align: unset;
        text-decoration: none;
        color: rgb(52, 71, 103);
        font-weight: 500;
      }
    }

    &-form {
      padding: 12px;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      min-width: 90%;

      &-container {
        margin-bottom: 16px;
        opacity: 1;
        background: transparent;
        color: rgb(52, 71, 103);
      }
      &-containt {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.00938em;
        box-sizing: border-box;
        position: relative;
        cursor: text;
        -webkit-box-align: center;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid rgb(210, 214, 218);
        border-radius: 0.5rem;
        pointer-events: auto;
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
        appearance: none !important;
        transition: box-shadow 150ms ease 0s, border-color 150ms ease 0s,
          padding 150ms ease 0s !important;
      }
      &-input {
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
      padding: 10px;
      opacity: 1;

      &-item {
        color: rgb(255, 42, 42);
        font-size: 0.875rem;
      }
    }

    &-button {
      margin-top: 20px;
      margin-bottom: 40px;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      width: 90%;

      &-item {
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        outline: 0px;
        border: 0px;
        margin: 0px;
        cursor: pointer;
        vertical-align: middle;
        appearance: none;
        text-decoration: none;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.02857em;
        min-width: 64px;
        width: 100%;
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 0.5rem;
        line-height: 1.4;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        transition: all 150ms ease-in 0s;
        min-height: 2.5rem;
        box-shadow: rgb(0 0 0 / 11%) 0rem 0.25rem 0.4375rem -0.0625rem,
          rgb(0 0 0 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
        padding: 0.75rem 1.5rem;
        background-image: linear-gradient(
          310deg,
          rgb(33, 82, 255),
          rgb(33, 212, 253)
        );
        background-position-y: initial;
        background-repeat: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: initial;
        color: rgb(255, 255, 255);
        background-size: 150% !important;
        background-position-x: 25% !important;

        &-signup {
          position: relative;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          outline: 0px;
          border: 0px;
          margin: 0px;
          cursor: pointer;
          vertical-align: middle;
          appearance: none;
          text-decoration: none;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          letter-spacing: 0.02857em;
          min-width: 64px;
          width: 100%;
          display: inline-flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 0.5rem;
          line-height: 1.4;
          text-align: center;
          text-transform: uppercase;
          user-select: none;
          transition: all 150ms ease-in 0s;
          min-height: 2.5rem;
          box-shadow: rgb(0 0 0 / 11%) 0rem 0.25rem 0.4375rem -0.0625rem,
            rgb(0 0 0 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
          padding: 0.75rem 1.5rem;
          background-image: linear-gradient(
            310deg,
            rgb(20, 23, 39),
            rgb(58, 65, 111)
          );
          background-position-y: initial;
          background-repeat: initial;
          background-attachment: initial;
          background-origin: initial;
          background-clip: initial;
          background-color: initial;
          color: rgb(255, 255, 255);
          background-size: 150% !important;
          background-position-x: 25% !important;
        }
      }

      &-line {
        position: relative;
        padding-top: 2px;
        padding-bottom: 2px;
        opacity: 1;
        background: transparent;
        color: rgb(52, 71, 103);
        &-hr {
          flex-shrink: 0;
          border-top: 0px solid rgba(0, 0, 0, 0.12);
          border-right: 0px solid rgba(0, 0, 0, 0.12);
          border-left: 0px solid rgba(0, 0, 0, 0.12);
          background-color: transparent;
          height: 0.0625rem;
          margin: 1rem 0px;
          border-bottom: none;
          opacity: 0.25;
          background-image: linear-gradient(
            to right,
            rgba(52, 71, 103, 0),
            rgba(52, 71, 103, 0.5),
            rgba(52, 71, 103, 0)
          ) !important;
        }
        &-text {
          position: absolute;
          top: 50%;
          left: 50%;
          padding-left: 12px;
          padding-right: 12px;
          line-height: 1;
          opacity: 1;
          background: rgb(255, 255, 255);
          color: rgb(52, 71, 103);
          transform: translate(-50%, -60%);
          &-item {
            margin: 0px;
            font-family: Roboto, Helvetica, Arial, sans-serif;
            font-size: 0.875rem;
            line-height: 1.5;
            letter-spacing: 0.02857em;
            opacity: 1;
            text-transform: none;
            vertical-align: unset;
            text-decoration: none;
            color: rgb(131, 146, 171);
            font-weight: 500;
          }
        }
      }
    }
  }
`;
function setEmail(value: string) {
  throw new Error("Function not implemented.");
}

function setPassword(value: string) {
  throw new Error("Function not implemented.");
}
