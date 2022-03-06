import styled from "styled-components";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import Looks3Icon from "@material-ui/icons/Looks3";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";

import { SideMenuTile } from "../atoms/sideMenu/sideMenuTitle";
import { SideButtonPage } from "../atoms/sideMenu/sideButtonPage";

import { SideMenuS } from "./sideMenu";

import { useState, useEffect, memo } from "react";

type SideMenuType = {
  color: string;
};

export const CorSideMenu = memo((props: SideMenuType) => {
  const { color } = props;

  return (
    <SideMenuS>
      <ul className="sideMenu">
        <SideMenuTile />
        <span className="sideMenu-title">Corporation</span>
        <SideButtonPage
          icon={<LooksOneIcon fontSize="small" />}
          title="学生一覧"
          iconFlag={false}
          classname={color === "corfirst" ? "list-color" : "list"}
          link="first"
        />
        <SideButtonPage
          icon={<SettingsIcon fontSize="small" />}
          title="企業情報"
          iconFlag={false}
          classname={color === "corinfo" ? "list-color" : "list"}
          link="info"
        />
        <SideButtonPage
          icon={<HelpIcon fontSize="small" />}
          title="質問一覧"
          iconFlag={false}
          classname={color === "corquestion" ? "list-color" : "list"}
          link="question"
        />
      </ul>
    </SideMenuS>
  );
});
