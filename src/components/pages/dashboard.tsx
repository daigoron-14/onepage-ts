import styled from "styled-components";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { SideMenu } from "../organizes/sideMenu";
import { Main } from "../organizes/main";
import { Header } from "../organizes/header";

export const DashBoard = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("");
  const [sideMenuToggle, setSideMenuToggle] = useState(true);

  const userid = localStorage.getItem("userid");

  useEffect(()=> {
    if (userid == null) {
      navigate("/signin");
    }
  });

  return (
    <DashBoardPage>
      <div className={sideMenuToggle ? "leftSide" : "leftSide-hidden"}>
        <SideMenu color={color} />
      </div>
      <div className={sideMenuToggle ? "rightSide" : "rightSide-hidden"}>
        <Header setValue={setSideMenuToggle} value={sideMenuToggle} />
        <Main setColor={setColor} />
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
