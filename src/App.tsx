import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

import { DashBoard } from "../src/components/pages/dashboard";
import { Corporation } from "../src/components/pages/corporation";
import { SignUp } from "../src/components/pages/auth/signup";
import { SignIn } from "../src/components/pages/auth/signin";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Global
          styles={css`
            ${emotionReset}
            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }
          `}
        />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/corporation/*" element={<Corporation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

const RightSide = styled.div`
  margin-left: 254px;
  padding: 20px;
`;

const SideMenu = styled.div`
  flex: 0 0 auto;
  width: 15.625rem;
  white-space: nowrap;
  border: none;
`;
