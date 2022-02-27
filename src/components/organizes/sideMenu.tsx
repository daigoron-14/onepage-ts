import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import DescriptionIcon from "@material-ui/icons/Description";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CallSplitIcon from "@material-ui/icons/CallSplit";

import { SideMenuTile } from "../atoms/sideMenu/sideMenuTitle";
import { SideButton } from "../atoms/sideMenu/sideButton";
import { SideButtonHide } from "../atoms/sideMenu/sideButtonHide";
import { SideButtonPage } from "../atoms/sideMenu/sideButtonPage";
import { SideButtonTitle } from "../atoms/sideMenu/sideButtonTitle"

import { useState, useEffect, memo, useContext } from "react";
import { PersonalCard } from "../atoms/page/registered/personalCard";


type SideMenuType = {
  color: string;
};

export const SideMenu = memo((props: SideMenuType) => {
  const { color } = props;

  const [basic, setBasic] = useState(false);
  const [basicR, setBasicR] = useState(false);
  const [basicN, setBasicN] = useState(false);
  const [skill, setSkill] = useState(false);
  const [skillR, setSkillR] = useState(false);
  const [skillN, setSkillN] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [personalR, setPersonalR] = useState(false);
  const [personalN, setPersonalN] = useState(false);
  const [video, setVideo] = useState(false);
  const [videoR, setVideoR] = useState(false);
  const [videoN, setVideoN] = useState(false);
  const [chrono, setChrono] = useState(false);
  const [chronoR, setChronoR] = useState(false);
  const [chronoN, setChronoN] = useState(false);

  useEffect(() => {
    if (basic == false) {
      setBasicR(false);
      setBasicN(false);
    }
    if (skill == false) {
      setSkillR(false);
      setSkillN(false);
    }
    if (personal == false) {
      setPersonalR(false);
      setPersonalN(false);
    }
    if (video == false) {
      setVideoR(false);
      setVideoN(false);
    }
  }, [basic, skill, personal, video]);

  return (
    <SideMenuS>
      <ul className="sideMenu">
        <SideMenuTile />
        <span className="sideMenu-title">OnePage</span>
        <SideButtonPage
          icon={<DescriptionIcon fontSize="small" />}
          title="ページ一覧"
          iconFlag={false}
          classname={color === "pageR" ? "list-color" : "list"}
          link="registered/page"
        />
        <SideButtonPage
          icon={<NoteAddIcon fontSize="small" />}
          title="ページ作成"
          iconFlag={false}
          classname={color === "pageN" ? "list-color" : "list"}
          link="onepage/create/page"
        />
        <hr />
        <span className="sideMenu-title">Information</span>
        <SideButton
          icon={<AccountCircleIcon fontSize="small" />}
          title="基本情報"
          iconFlag={true}
          setValue={setBasic}
          value={basic}
          classname={
            color === "basicR" ||
            color === "addressR" ||
            color === "educationR" ||
            color === "basicN" ||
            color === "addressN" ||
            color === "educationN"
              ? "list-color"
              : "list"
          }
        />
        <SideButtonTitle
          title="基礎情報"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/basic"
          classnamePull={
            basic ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "basicN" ? "sideHide-list-color" : "sideHide-list"
          }
          setValue={setBasicN}
          value={basicN}
          flag={true}
        />
        <SideButtonTitle
          title="住所情報"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/address"
          classnamePull={
            basic ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "addressN" ? "sideHide-list-color" : "sideHide-list"
          }
          setValue={setBasicN}
          value={basicN}
          flag={true}
        />
        <SideButtonTitle
          title="学歴情報"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/education"
          classnamePull={
            basic ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "educationN" ? "sideHide-list-color" : "sideHide-list"
          }
          setValue={setBasicN}
          value={basicN}
          flag={true}
        />
        <SideButton
          icon={<CardMembershipIcon fontSize="small" />}
          title="スキル・資格"
          iconFlag={true}
          setValue={setSkill}
          value={skill}
          classname={
            color === "languageR" ||
            color === "qualiR" ||
            color === "languageN" ||
            color === "qualiN"
              ? "list-color"
              : "list"
          }
        />
        <SideButtonTitle
          title="資格・免許"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/qualification"
          flag={true}
          setValue={setSkillN}
          value={skillN}
          classnamePull={
            skill ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "qualiN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonTitle
          title="言語スキル"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/language"
          flag={true}
          setValue={setSkillN}
          value={skillN}
          classnamePull={
            skill ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "languageN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButton
          icon={<FavoriteBorderIcon fontSize="small" />}
          title="パーソナル"
          iconFlag={true}
          setValue={setPersonal}
          value={personal}
          classname={
            color === "likeR" ||
            color === "hobbyR" ||
            color === "stressR" ||
            color === "talentR" ||
            color === "likeN" ||
            color === "hobbyN" ||
            color === "stressN" ||
            color === "talentN"
              ? "list-color"
              : "list"
          }
        />
        <SideButtonTitle
          title="登録済み"
          listStyle="sideHide-item"
          iconFlag={true}
          link="#"
          flag={true}
          setValue={setPersonalR}
          value={personalR}
          classnamePull={
            personal ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "likeR" ||
            color === "stressR" ||
            color === "hobbyR" ||
            color === "talentR"
              ? "sideHide-list-color"
              : "sideHide-list"
          }
        />
        <SideButtonHide
          title="好きなもの"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/like"
          flag={false}
          classnamePull={
            personalR && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "likeR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="趣味"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/hobby"
          flag={false}
          classnamePull={
            personalR && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "hobbyR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="ストレス"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/stress"
          flag={false}
          classnamePull={
            personalR && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "stressR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="特技"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/talent"
          flag={false}
          classnamePull={
            personalR && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "talentR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonTitle
          title="新規作成"
          listStyle="sideHide-item"
          iconFlag={true}
          link="#"
          flag={true}
          setValue={setPersonalN}
          value={personalN}
          classnamePull={
            personal ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "likeN" ||
            color === "stressN" ||
            color === "hobbyN" ||
            color === "talentN"
              ? "sideHide-list-color"
              : "sideHide-list"
          }
        />
        <SideButtonHide
          title="好きなもの"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/like"
          flag={false}
          classnamePull={
            personalN && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "likeN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="趣味"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/hobby"
          flag={false}
          classnamePull={
            personalN && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "hobbyN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="ストレス"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/stress"
          flag={false}
          classnamePull={
            personalN && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "stressN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="特技"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/talent"
          flag={false}
          classnamePull={
            personalN && personal
              ? "sideHide-root sideHide-visible"
              : "sideHide-root"
          }
          classnameTitle={
            color === "talentN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButton
          icon={<LiveTvIcon fontSize="small" />}
          title="動画"
          iconFlag={true}
          setValue={setVideo}
          value={video}
          classname={
            color === "motivationR" ||
            color === "frustR" ||
            color === "selfproduceR" ||
            color === "extraR" ||
            color === "interviewR" ||
            color === "motivationN" ||
            color === "frustN" ||
            color === "selfproduceN" ||
            color === "extraN" ||
            color === "interviewN"
              ? "list-color"
              : "list"
          }
        />
        <SideButtonTitle
          title="登録済み"
          listStyle="sideHide-item"
          iconFlag={true}
          link="#"
          flag={true}
          setValue={setVideoR}
          value={videoR}
          classnamePull={
            video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "motivationR" ||
            color === "frustR" ||
            color === "selfproduceR" ||
            color === "extraR" ||
            color === "interviewR"
              ? "sideHide-list-color"
              : "sideHide-list"
          }
        />
        <SideButtonHide
          title="志望動機"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/motivation"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "motivationR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="自己PR"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/selfproduce"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "selfproduceR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="ガクチカ"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/Extracurricular"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "extraR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="挫折経験"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/frustration"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "frustR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="インタビュー"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/interview"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "interviewR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="その他"
          listStyle="sideHide-none"
          iconFlag={false}
          link="registered/other"
          flag={false}
          classnamePull={
            videoR && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "otherR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonTitle
          title="新規作成"
          listStyle="sideHide-item"
          iconFlag={true}
          link="#"
          flag={true}
          setValue={setVideoN}
          value={videoN}
          classnamePull={
            video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "motivationN" ||
            color === "frustN" ||
            color === "selfproduceN" ||
            color === "extraN" ||
            color === "interviewN"
              ? "sideHide-list-color"
              : "sideHide-list"
          }
        />
        <SideButtonHide
          title="志望動機"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/motivation"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "motivationN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="自己PR"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/selfproduce"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "selfproduceN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="ガクチカ"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/Extracurricular"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "extraN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="挫折経験"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/frustration"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "frustN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="インタビュー"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/interview"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "interviewN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="その他"
          listStyle="sideHide-none"
          iconFlag={false}
          link="create/other"
          flag={false}
          classnamePull={
            videoN && video ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "otherN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButton
          icon={<CallSplitIcon fontSize="small" />}
          title="人生年表"
          iconFlag={true}
          setValue={setChrono}
          value={chrono}
          classname={
            color === "chronoR" || color === "chronoN" ? "list-color" : "list"
          }
        />
        <SideButtonHide
          title="登録済み"
          listStyle="sideHide-item"
          iconFlag={false}
          link="registered/chronology"
          flag={false}
          classnamePull={
            chrono ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "chronoR" ? "sideHide-list-color" : "sideHide-list"
          }
        />
        <SideButtonHide
          title="新規登録"
          listStyle="sideHide-item"
          iconFlag={false}
          link="create/chronology"
          flag={false}
          classnamePull={
            chrono ? "sideHide-root sideHide-visible" : "sideHide-root"
          }
          classnameTitle={
            color === "chronoN" ? "sideHide-list-color" : "sideHide-list"
          }
        />
      </ul>
    </SideMenuS>
  );
});

const SideMenuS = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1200;
  position: fixed;
  top: 0px;
  outline: 0px;
  left: 0px;
  width: 15.625rem;
  border-radius: 1rem;
  border: none;

  .sideMenu {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    z-index: 1200;
    top: 0px;
    outline: 0px;
    left: 0px;
    width: 15.625rem;
    background-color: rgb(248, 249, 250);
    backdrop-filter: saturate(200%) blur(1.875rem);
    height: calc(100vh - 2rem);
    margin: 1rem;
    border-radius: 1rem;
    border: none;
  }

  hr {
    border-top: 0px solid rgba(0, 0, 0, 0.12);
    border-right: 0px solid rgba(0, 0, 0, 0.12);
    border-left: 0px solid rgba(0, 0, 0, 0.12);
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

  .sideMenu {
    &-title {
      margin: 16px 0px 8px 8px;
      font-size: 0.75rem;
      line-height: 1.25;
      letter-spacing: 0.03333em;
      display: block;
      padding-left: 24px;
      opacity: 0.6;
      text-decoration: none;
      color: rgb(52, 71, 103);
      font-weight: 700;
    }
  }
`;
