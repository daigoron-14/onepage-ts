import styled from "styled-components";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CorSideMenu } from "../organizes/corSideMenu";
import { CorMain } from "../organizes/corMain";
import { Header } from "../organizes/header";

export const Corporation = () => {
  const [color, setColor] = useState("");
  const [sideMenuToggle, setSideMenuToggle] = useState(true);
  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");
  const company = localStorage.getItem("company");

  useEffect(() => {
    if (userid == null) {
      navigate("/signin");
    } else if (company == "false") {
      navigate("/signin");
    }
  });

  return (
    <DashBoardPage>
      <div className={sideMenuToggle ? "leftSide" : "leftSide-hidden"}>
        <CorSideMenu color={color} />
      </div>
      <div className={sideMenuToggle ? "rightSide" : "rightSide-hidden"}>
        <Header setValue={setSideMenuToggle} value={sideMenuToggle} />
        <CorMain setColor={setColor} />
      </div>
    </DashBoardPage>
  );
};

const DashBoardPage = styled.div`
  width: 100%;
  height: 100%;

  .leftSide {
    &-hidden {
      opacity: 0;
    }
  }

  .rightSide {
    margin-left: 17.125rem;
    padding: 20px;

    &-hidden {
      margin: 0;
      padding: 20px;
    }
  }
`;
