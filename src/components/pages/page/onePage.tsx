import styled from "styled-components";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CreatePage } from "../../pages/page/createPage";

import { MotivationList } from "../../pages/list/motivationList";
import { SelfproduceList } from "../../pages/list/selfproduceList";
import { FrustrationList } from "../../pages/list/frustrationList";
import { ExtracurricularList } from "../../pages/list/extracurricularList";
import { InterviewList } from "../../pages/list/interviewList";
import { OtherList } from "../../pages/list/otherList";

import { HobbyList } from "../../pages/list/hobbyList";
import { TalentList } from "../../pages/list/talentList";
import { StressList } from "../../pages/list/stressList";
import { LikeList } from "../../pages/list/likeList";
import { ChronologyList } from "../../pages/list/chronologyList";

type MainType = {
  setColor: Function;
};

export const OnePage = (props: MainType) => {
  const { setColor } = props;

  const [motivationId, setMotivationId] = useState(0);
  const [selfproduceId, setSelfproduceId] = useState(0);
  const [frustrationId, setFrustrationId] = useState(0);
  const [extracurricularId, setExtracurricularId] = useState(0);
  const [interviewId, setInterviewId] = useState(0);
  const [otherId1, setOtherId1] = useState(0);
  const [otherId2, setOtherId2] = useState(0);
  const [otherId3, setOtherId3] = useState(0);
  const [chronoId1, setChronoId1] = useState(0);
  const [chronoId2, setChronoId2] = useState(0);
  const [chronoId3, setChronoId3] = useState(0);
  const [chronoId4, setChronoId4] = useState(0);
  const [chronoId5, setChronoId5] = useState(0);
  const [likeId1, setLikeId1] = useState(0);
  const [likeId2, setLikeId2] = useState(0);
  const [likeId3, setLikeId3] = useState(0);
  const [hobbyId, setHobbyId] = useState(0);
  const [stressId, setStressId] = useState(0);
  const [talentId, setTalentId] = useState(0);

  const [motivationRegFlag, setMotivationRegFlag] = useState(true);
  const [selfproduceRegFlag, setSelfproduceRegFlag] = useState(true);
  const [frustrationRegFlag, setFrustrationRegFlag] = useState(true);
  const [extracurricularRegFlag, setExtracurricularRegFlag] = useState(true);
  const [interviewRegFlag, setInterviewRegFlag] = useState(true);
  const [otherRegFlag1, setOtherRegFlag1] = useState(true);
  const [otherRegFlag2, setOtherRegFlag2] = useState(true);
  const [otherRegFlag3, setOtherRegFlag3] = useState(true);
  const [chronoRegFlag1, setChronoRegFlag1] = useState(true);
  const [chronoRegFlag2, setChronoRegFlag2] = useState(true);
  const [chronoRegFlag3, setChronoRegFlag3] = useState(true);
  const [chronoRegFlag4, setChronoRegFlag4] = useState(true);
  const [chronoRegFlag5, setChronoRegFlag5] = useState(true);
  const [likeRegFlag1, setLikeRegFlag1] = useState(true);
  const [likeRegFlag2, setLikeRegFlag2] = useState(true);
  const [likeRegFlag3, setLikeRegFlag3] = useState(true);
  const [hobbyRegFlag, setHobbyRegFlag] = useState(true);
  const [stressRegFlag, setStressRegFlag] = useState(true);
  const [talentRegFlag, setTalentRegFlag] = useState(true);

  useEffect(() => {
    setMotivationRegFlag(true);
    setSelfproduceRegFlag(true);
    setFrustrationRegFlag(true);
    setExtracurricularRegFlag(true);
    setInterviewRegFlag(true);
    setOtherRegFlag1(true);
    setOtherRegFlag2(true);
    setOtherRegFlag3(true);
    setChronoRegFlag1(true);
    setChronoRegFlag2(true);
    setChronoRegFlag3(true);
    setChronoRegFlag4(true);
    setChronoRegFlag5(true);
    setLikeRegFlag1(true);
    setLikeRegFlag2(true);
    setLikeRegFlag3(true);
    setHobbyRegFlag(true);
    setStressRegFlag(true);
    setTalentRegFlag(true);

    setMotivationId(0);
    setSelfproduceId(0);
    setFrustrationId(0);
    setExtracurricularId(0);
    setInterviewId(0);
    setOtherId1(0);
    setOtherId2(0);
    setOtherId3(0);
    setChronoId1(0);
    setChronoId2(0);
    setChronoId3(0);
    setChronoId4(0);
    setChronoId5(0);
    setLikeId1(0);
    setLikeId2(0);
    setLikeId3(0);
    setHobbyId(0);
    setStressId(0);
    setTalentId(0);
  }, []);

  return (
    <OnePageBox>
      <Routes>
        <Route
          path="create/page"
          element={
            <CreatePage
              setColor={setColor}
              motivRegFlag={motivationRegFlag}
              selfRegFlag={selfproduceRegFlag}
              selfproduceId={selfproduceId}
              motivationId={motivationId}
              frustrationId={frustrationId}
              extracurricularId={extracurricularId}
              interviewId={interviewId}
              otherId1={otherId1}
              otherId2={otherId2}
              otherId3={otherId3}
              chronoId1={chronoId1}
              chronoId2={chronoId2}
              chronoId3={chronoId3}
              chronoId4={chronoId4}
              chronoId5={chronoId5}
              likeId1={likeId1}
              likeId2={likeId2}
              likeId3={likeId3}
              hobbyId={hobbyId}
              stressId={stressId}
              talentId={talentId}
              frustRegFlag={frustrationRegFlag}
              extraRegFlag={extracurricularRegFlag}
              interRegFlag={interviewRegFlag}
              otherRegFlag1={otherRegFlag1}
              otherRegFlag2={otherRegFlag2}
              otherRegFlag3={otherRegFlag3}
              chronoRegFlag1={chronoRegFlag1}
              chronoRegFlag2={chronoRegFlag2}
              chronoRegFlag3={chronoRegFlag3}
              chronoRegFlag4={chronoRegFlag4}
              chronoRegFlag5={chronoRegFlag5}
              likeRegFlag1={likeRegFlag1}
              likeRegFlag2={likeRegFlag2}
              likeRegFlag3={likeRegFlag3}
              hobbyRegFlag={hobbyRegFlag}
              stressRegFlag={stressRegFlag}
              talentRegFlag={talentRegFlag}
            />
          }
        />
        {/* 動画 */}
        <Route
          path="list/motivation"
          element={
            <MotivationList
              setRegFlag={setMotivationRegFlag}
              setMotivationId={setMotivationId}
            />
          }
        />
        <Route
          path="list/selfproduce"
          element={
            <SelfproduceList
              setRegFlag={setSelfproduceRegFlag}
              setSelfproduceId={setSelfproduceId}
            />
          }
        />
        <Route
          path="list/frustration"
          element={
            <FrustrationList
              setRegFlag={setFrustrationRegFlag}
              setFrustrationId={setFrustrationId}
            />
          }
        />
        <Route
          path="list/extracurricular"
          element={
            <ExtracurricularList
              setRegFlag={setExtracurricularRegFlag}
              setExtracurricularId={setExtracurricularId}
            />
          }
        />
        <Route
          path="list/interview"
          element={
            <InterviewList
              setRegFlag={setInterviewRegFlag}
              setInterviewId={setInterviewId}
            />
          }
        />
        <Route
          path="list/selfproduce"
          element={
            <SelfproduceList
              setRegFlag={setSelfproduceRegFlag}
              setSelfproduceId={setSelfproduceId}
            />
          }
        />
        <Route
          path="list/other/first"
          element={
            <OtherList setRegFlag={setOtherRegFlag1} setOtherId={setOtherId1} />
          }
        />
        <Route
          path="list/other/second"
          element={
            <OtherList setRegFlag={setOtherRegFlag2} setOtherId={setOtherId2} />
          }
        />
        <Route
          path="list/other/third"
          element={
            <OtherList setRegFlag={setOtherRegFlag3} setOtherId={setOtherId3} />
          }
        />
        {/* パーソナル */}
        <Route
          path="list/hobby"
          element={
            <HobbyList setRegFlag={setHobbyRegFlag} setHobbyId={setHobbyId} />
          }
        />
        <Route
          path="list/talent"
          element={
            <TalentList
              setRegFlag={setTalentRegFlag}
              setTalentId={setTalentId}
            />
          }
        />
        <Route
          path="list/stress"
          element={
            <StressList
              setRegFlag={setStressRegFlag}
              setStressId={setStressId}
            />
          }
        />
        <Route
          path="list/like/first"
          element={
            <LikeList setRegFlag={setLikeRegFlag1} setLikeId={setLikeId1} />
          }
        />
        <Route
          path="list/like/second"
          element={
            <LikeList setRegFlag={setLikeRegFlag2} setLikeId={setLikeId2} />
          }
        />
        <Route
          path="list/like/third"
          element={
            <LikeList setRegFlag={setLikeRegFlag3} setLikeId={setLikeId3} />
          }
        />
        {/* 年表 */}
        <Route
          path="list/chrono/first"
          element={
            <ChronologyList
              setRegFlag={setChronoRegFlag1}
              setChronoId={setChronoId1}
            />
          }
        />
        <Route
          path="list/chrono/second"
          element={
            <ChronologyList
              setRegFlag={setChronoRegFlag2}
              setChronoId={setChronoId2}
            />
          }
        />
        <Route
          path="list/chrono/third"
          element={
            <ChronologyList
              setRegFlag={setChronoRegFlag3}
              setChronoId={setChronoId3}
            />
          }
        />
        <Route
          path="list/chrono/fourth"
          element={
            <ChronologyList
              setRegFlag={setChronoRegFlag4}
              setChronoId={setChronoId4}
            />
          }
        />
        <Route
          path="list/chrono/fifth"
          element={
            <ChronologyList
              setRegFlag={setChronoRegFlag5}
              setChronoId={setChronoId5}
            />
          }
        />
      </Routes>
    </OnePageBox>
  );
};

const OnePageBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;
