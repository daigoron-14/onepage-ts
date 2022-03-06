import styled from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { FirstInterview } from "../pages/interview/firstInterview";
import { Interview } from "../pages/interview/interview";

type MainType = {
  setColor: Function;
};

export const CorMain = (props: MainType) => {
  const { setColor } = props;

  return (
    <MainBox>
      <Routes>
        <Route
          path="/first/"
          element={<FirstInterview setColor={setColor} />}
        />
        <Route path="/profile/" element={<Interview />} />
      </Routes>
    </MainBox>
  );
};

const MainBox = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
