import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { ProfileImage } from "../../atoms/page/registered/profileImage";
import { BasicInfromation } from "../../atoms/page/registered/basicInformation";
import { TopChronology } from "../../atoms/page/registered/topChronology";
import { MiddleChronology } from "../../atoms/page/registered/middleChronology";
import { BottomChronology } from "../../atoms/page/registered/bottomChronology";
import { VideoCard } from "../../atoms/page/registered/videoCard";
import { EnglishSkill } from "../../atoms/page/registered/englishSkill";
import { LanguageSkill } from "../../atoms/page/registered/languageSkill";
import { PersonalCard } from "../../atoms/page/registered/personalCard";
import { LikeCard } from "../../atoms/page/registered/likeCard";

import { CreatePersonalCard } from "../../atoms/page/create/createPersonalCard";
import { CreateVideoCard } from "../../atoms/page/create/createVideoCard";
import { CreateChronology } from "../../atoms/page/create/createChronology";
import { CompanyId } from "../../atoms/page/create/companyId";
import { CreateButton } from "../../atoms/page/create/createButton";
import { CompanyName } from "../../atoms/page/create/companyName";

type CreatePageType = {
  setColor: Function;
  motivRegFlag: boolean;
  selfRegFlag: boolean;
  frustRegFlag: boolean;
  extraRegFlag: boolean;
  interRegFlag: boolean;
  otherRegFlag1: boolean;
  otherRegFlag2: boolean;
  otherRegFlag3: boolean;
  chronoRegFlag1: boolean;
  chronoRegFlag2: boolean;
  chronoRegFlag3: boolean;
  chronoRegFlag4: boolean;
  chronoRegFlag5: boolean;
  likeRegFlag1: boolean;
  likeRegFlag2: boolean;
  likeRegFlag3: boolean;
  hobbyRegFlag: boolean;
  stressRegFlag: boolean;
  talentRegFlag: boolean;
  selfproduceId: string;
  motivationId: string;
  frustrationId: string;
  extracurricularId: string;
  interviewId: string;
  otherId1: string;
  otherId2: string;
  otherId3: string;
  chronoId1: string;
  chronoId2: string;
  chronoId3: string;
  chronoId4: string;
  chronoId5: string;
  likeId1: string;
  likeId2: string;
  likeId3: string;
  hobbyId: string;
  stressId: string;
  talentId: string;
};

export const CreatePage = (props: CreatePageType) => {
  const {
    setColor,
    motivRegFlag,
    selfRegFlag,
    frustRegFlag,
    extraRegFlag,
    interRegFlag,
    otherRegFlag1,
    otherRegFlag2,
    otherRegFlag3,
    chronoRegFlag1,
    chronoRegFlag2,
    chronoRegFlag3,
    chronoRegFlag4,
    chronoRegFlag5,
    likeRegFlag1,
    likeRegFlag2,
    likeRegFlag3,
    hobbyRegFlag,
    stressRegFlag,
    talentRegFlag,
    selfproduceId,
    motivationId,
    extracurricularId,
    frustrationId,
    interviewId,
    otherId1,
    otherId2,
    otherId3,
    chronoId1,
    chronoId2,
    chronoId3,
    chronoId4,
    chronoId5,
    likeId1,
    likeId2,
    likeId3,
    hobbyId,
    stressId,
    talentId
  } = props;

  const { state } = useLocation();
  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const [companyId, setCompanyId] = useState(0);
  const [companyName, setCompanyName] = useState(0);

  const [motivationFlag, setMotivationFlag] = useState(true);
  const [selfproduceFlag, setSelfproduceFlag] = useState(true);
  const [extracurricularFlag, setExtracurricularFlag] = useState(true);
  const [interviewFlag, setInterviewFlag] = useState(true);
  const [frustrationFlag, setFrustrationFlag] = useState(true);
  const [otherFlag1, setOtherFlag1] = useState(true);
  const [otherFlag2, setOtherFlag2] = useState(true);
  const [otherFlag3, setOtherFlag3] = useState(true);

  useEffect(() => {
    setColor("pageN");
  }, []);

  const CreatePage = () => {
    const data = {
      user: userid,
      auth: token,
      page_company: companyName,
      motivation_id: motivationId,
      selfproduce_id: selfproduceId,
      extracurricular_id: extracurricularId,
      frustration_id: frustrationId,
      interview_id: interviewId,
      other_1_id: otherId1,
      other_2_id: otherId2,
      other_3_id: otherId3,
      chrono_1_id: chronoId1,
      chrono_2_id: chronoId2,
      chrono_3_id: chronoId3,
      chrono_4_id: chronoId4,
      chrono_5_id: chronoId5,
      like_1_id: likeId1,
      like_2_id: likeId2,
      like_3_id: likeId3,
      hobby_id: hobbyId,
      talent_id: talentId,
      stress_id: stressId,
      company: companyId
    };

    axios
      .post("https://onepage-server.com/onepage/pageu/", data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        navigate("/dashboard/success")
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <CreatePageBox>
      <div className="basic">
        <ProfileImage />
        <BasicInfromation />
      </div>
      <div className="language">
        <EnglishSkill title="TOEIC" />
        <EnglishSkill title="TOEFL" />
        <LanguageSkill title="第二言語" />
        <LanguageSkill title="第三言語" />
      </div>
      <div className="video">
        {motivRegFlag ? (
          <CreateVideoCard
            title="志望理由"
            path="/dashboard/onepage/list/motivation"
            setValue={setMotivationFlag}
            value={motivationFlag}
          />
        ) : (
          <VideoCard
            title="志望理由"
            label="motiv"
            id={motivationId}
            setValue={setMotivationFlag}
            value={motivationFlag}
          />
        )}
        {selfRegFlag ? (
          <CreateVideoCard
            title="自己PR"
            path="/dashboard/onepage/list/selfproduce"
            setValue={setSelfproduceFlag}
            value={selfproduceFlag}
          />
        ) : (
          <VideoCard
            title="自己PR"
            label="self"
            id={selfproduceId}
            setValue={setSelfproduceFlag}
            value={selfproduceFlag}
          />
        )}
      </div>
      <div className="video">
        {extraRegFlag ? (
          <CreateVideoCard
            title="ガクチカ"
            path="/dashboard/onepage/list/extracurricular"
            setValue={setExtracurricularFlag}
            value={extracurricularFlag}
          />
        ) : (
          <VideoCard
            title="ガクチカ"
            label="extra"
            id={extracurricularId}
            setValue={setExtracurricularFlag}
            value={extracurricularFlag}
          />
        )}
        {frustRegFlag ? (
          <CreateVideoCard
            title="挫折経験"
            path="/dashboard/onepage/list/frustration"
            setValue={setFrustrationFlag}
            value={frustrationFlag}
          />
        ) : (
          <VideoCard
            title="挫折経験"
            label="frust"
            id={frustrationId}
            setValue={setFrustrationFlag}
            value={frustrationFlag}
          />
        )}
      </div>
      <div className="video">
        {interRegFlag ? (
          <CreateVideoCard
            title="インタビュー"
            path="/dashboard/onepage/list/interview"
            setValue={setInterviewFlag}
            value={interviewFlag}
          />
        ) : (
          <VideoCard
            title="インタビュー"
            label="inter"
            id={interviewId}
            setValue={setInterviewFlag}
            value={interviewFlag}
          />
        )}
        {otherRegFlag1 ? (
          <CreateVideoCard
            title="フリー動画"
            path="/dashboard/onepage/list/other/first"
            setValue={setOtherFlag1}
            value={otherFlag1}
          />
        ) : (
          <VideoCard
            title="フリー動画"
            label="other1"
            id={otherId1}
            setValue={setOtherFlag1}
            value={otherFlag1}
          />
        )}
      </div>
      <div className="video">
        {otherRegFlag2 ? (
          <CreateVideoCard
            title="フリー動画"
            path="/dashboard/onepage/list/other/second"
            setValue={setOtherFlag2}
            value={otherFlag2}
          />
        ) : (
          <VideoCard
            title="フリー動画"
            label="other2"
            id={otherId2}
            setValue={setOtherFlag2}
            value={otherFlag2}
          />
        )}
        {otherRegFlag3 ? (
          <CreateVideoCard
            title="フリー動画"
            path="/dashboard/onepage/list/other/third"
            setValue={setOtherFlag3}
            value={otherFlag3}
          />
        ) : (
          <VideoCard
            title="フリー動画"
            label="other3"
            id={otherId3}
            setValue={setOtherFlag3}
            value={otherFlag3}
          />
        )}
      </div>
      <div className="chrono">
        <div className="chrono-top">
          {chronoRegFlag1 ? (
            <CreateChronology path="/dashboard/onepage/list/chrono/first" />
          ) : (
            <TopChronology label="1" id={chronoId1} />
          )}
          {chronoRegFlag2 ? (
            <CreateChronology path="/dashboard/onepage/list/chrono/second" />
          ) : (
            <TopChronology label="2" id={chronoId2} />
          )}
          {chronoRegFlag3 ? (
            <CreateChronology path="/dashboard/onepage/list/chrono/third" />
          ) : (
            <TopChronology label="3" id={chronoId3} />
          )}
        </div>
        <MiddleChronology />
        <div className="chrono-bottom">
          {chronoRegFlag4 ? (
            <CreateChronology path="/dashboard/onepage/list/chrono/fourth" />
          ) : (
            <BottomChronology label="4" id={chronoId4} />
          )}
          {chronoRegFlag5 ? (
            <CreateChronology path="/dashboard/onepage/list/chrono/fifth" />
          ) : (
            <BottomChronology label="5" id={chronoId5} />
          )}
        </div>
      </div>
      <div className="like">
        {likeRegFlag1 ? (
          <CreatePersonalCard
            label="好きなもの"
            path="/dashboard/onepage/list/like/first"
          />
        ) : (
          <LikeCard label="1" id={likeId1} />
        )}
        {likeRegFlag2 ? (
          <CreatePersonalCard
            label="好きなもの"
            path="/dashboard/onepage/list/like/second"
          />
        ) : (
          <LikeCard label="2" id={likeId2} />
        )}
        {likeRegFlag3 ? (
          <CreatePersonalCard
            label="好きなもの"
            path="/dashboard/onepage/list/like/third"
          />
        ) : (
          <LikeCard label="3" id={likeId3} />
        )}
      </div>
      <div className="personal">
        {hobbyRegFlag ? (
          <CreatePersonalCard
            label="趣味"
            path="/dashboard/onepage/list/hobby"
          />
        ) : (
          <PersonalCard label="趣味" id={hobbyId} />
        )}
        {talentRegFlag ? (
          <CreatePersonalCard
            label="特技"
            path="/dashboard/onepage/list/talent"
          />
        ) : (
          <PersonalCard label="特技" id={talentId} />
        )}
        {stressRegFlag ? (
          <CreatePersonalCard
            label="ストレス"
            path="/dashboard/onepage/list/stress"
          />
        ) : (
          <PersonalCard label="ストレス" id={stressId} />
        )}
      </div>
      <CompanyId setValue={setCompanyId} value={companyId} />
      <div className="register">
        <CompanyName setValue={setCompanyName} value={companyName} />
        <CreateButton onClickEvent={CreatePage} />
      </div>
    </CreatePageBox>
  );
};

export const CreatePageBox = styled.div`
  margin-top: 40px;
  width: 100%;

  .chrono {
    padding: 45px 30px;
    width: 100%;
    margin-bottom: 40px;
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    &-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
    }

    &-bottom {
      width: 100%;
      margin-top: 25px;
      display: flex;
      justify-content: space-evenly;
    }
  }

  .language {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .basic {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  .video {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .personal {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  .like {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  .register {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
  }
`;
