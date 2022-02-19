import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  const createUser = () => {
    if (password === rePassword) {
      const data = {
        name: name,
        email: email,
        password: password
      };

      setRePasswordError("");

      axios
        .post("https://onepage-server.com/onepage/user/", data)
        .then((res) => {
          console.log("response body:", res.data);
          setRePasswordError("");
          setNameError("");
          setEmailError("");
        })
        .catch((err) => {
          setNameError(err.response.data.name);
          setEmailError(err.response.data.email);
          setPasswordError(err.response.data.password);
        });
    } else {
      setRePasswordError("パスワードが確認用と異なっています。");
    }
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onChangeRePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setRePassword(e.target.value);

  return (
    <SignUpBox>
      <div className="signup-root">
        <div className="signup-label">
          <label className="signup-label-item">sign up</label>
        </div>
        <div className="signup-form">
          <form action="">
            <div className="signup-form-container">
              <div className="signup-form-containt">
                <input
                  className="signup-form-input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={onChangeName}
                />
              </div>
              <div className="signup-alert">
                <span className="signup-alert-item">{nameError}</span>
              </div>
            </div>
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
            <div className="signup-form-container">
              <div className="signup-form-containt">
                <input
                  className="signup-form-input"
                  type="text"
                  name="re:password"
                  placeholder="re: Password"
                  onChange={onChangeRePassword}
                />
              </div>
              <div className="signup-alert">
                <span className="signup-alert-item">{rePasswordError}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="signup-button">
          <button
            className="signup-button-item"
            type="button"
            onClick={createUser}
          >
            sign up
          </button>
        </div>
      </div>
    </SignUpBox>
  );
};

const SignUpBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  .signup {
    &-root {
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      min-width: 60%;
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
      margin-bottom: 30px;
      opacity: 1;
      background: transparent;
      color: rgb(52, 71, 103);
      width: 50%;

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
      }
    }
  }
`;
