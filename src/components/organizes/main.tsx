import styled from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CreateBasic } from "../pages/basic/basic";
import { CreateAddress } from "../pages/basic/address";
import { CreateEducation } from "../pages/basic/education";
import { CreateQualification } from "../pages/skill/qualification";
import { CreateLanguage } from "../pages/skill/language";
import { CreateMotivation } from "../pages/video/create/createMotivation";
import { CreateExtracurricular } from "../pages/video/create/createExtracurricular";
import { CreateFrustration } from "../pages/video/create/createFrustration";
import { CreateInterview } from "../pages/video/create/createInterview";
import { CreateSelfproduce } from "../pages/video/create/createSelfproduce";
import { CreateOther } from "../pages/video/create/createOther";
import { CreateStress } from "../pages/personal/create/createStress";
import { CreateLike } from "../pages/personal/create/createLike";
import { CreateHobby } from "../pages/personal/create/createHobby";
import { CreateTalent } from "../pages/personal/create/createTalent";
import { CreateChronology } from "../pages/chronology/create/createChronology";
import { CreatePage } from "../pages/page/createPage";
import { SuccessPage } from "../pages/page/successPage";
import { HomePage } from "../pages/page/homePage";
import { ErrorBasicPage } from "../pages/page/errorBasicPage"

import { RegisteredChronologyList } from "../pages/chronology/registered/registeredChronologyList";
import { RegisteredChronologyDetail } from "../pages/chronology/registered/registeredChronologyDetail";
import { RegisteredExtracurricularList } from "../pages/video/registered/registeredExtracurricularList";
import { RegisteredExtracurricularDetail } from "../pages/video/registered/registeredExtracurricularDetail";
import { RegisteredFrustrationList } from "../pages/video/registered/registeredFrustrationList";
import { RegisteredFrustrationDetail } from "../pages/video/registered/registeredFrustrationDetail";
import { RegisteredInterviewList } from "../pages/video/registered/registeredInterviewList";
import { RegisteredInterviewDetail } from "../pages/video/registered/registeredInterviewDetail";
import { RegisteredMotivationList } from "../pages/video/registered/registeredMotivationList";
import { RegisteredMotivationDetail } from "../pages/video/registered/registeredMotivationDetail";
import { RegisteredSelfproduceList } from "../pages/video/registered/registeredSelfproduceList";
import { RegisteredSelfproduceDetail } from "../pages/video/registered/registeredSelfproduceDetail";
import { RegisteredOtherList } from "../pages/video/registered/registeredOtherList";
import { RegisteredOtherDetail } from "../pages/video/registered/registeredOtherDetail";
import { RegisteredPageList } from "../pages/page/registeredPageList";
import { RegisteredPageDetail } from "../pages/page/registeredPageDetail";
import { RegisteredHobbyList } from "../pages/personal/registered/registeredHobbyList";
import { RegisteredHobbyDetail } from "../pages/personal/registered/registeredHobbyDetail";
import { RegisteredLikeList } from "../pages/personal/registered/registeredLikeList";
import { RegisteredLikeDetail } from "../pages/personal/registered/registeredLikeDetail";
import { RegisteredStressList } from "../pages/personal/registered/registeredStressList";
import { RegisteredStressDetail } from "../pages/personal/registered/registeredStressDetail";
import { RegisteredTalentList } from "../pages/personal/registered/registeredTalentList";
import { RegisteredTalentDetail } from "../pages/personal/registered/registeredTalentDetail";

import { OnePage } from "../pages/page/onePage";

type MainType = {
  setColor: Function;
};

export const Main = (props: MainType) => {
  const { setColor } = props;

  return (
    <MainBox>
      <Routes>
        <Route path="/onepage/*" element={<OnePage setColor={setColor} />} />
        <Route
          path="/registered/page"
          element={<RegisteredPageList setColor={setColor} />}
        />
        <Route
          path="/registered/page/detail"
          element={<RegisteredPageDetail setColor={setColor} />}
        />

        {/* 基礎情報 */}
        <Route
          path="/create/basic"
          element={<CreateBasic setColor={setColor} />}
        />
        <Route
          path="/create/address"
          element={<CreateAddress setColor={setColor} />}
        />
        <Route
          path="/create/education"
          element={<CreateEducation setColor={setColor} />}
        />

        {/* スキル */}
        <Route
          path="/create/qualification"
          element={<CreateQualification setColor={setColor} />}
        />
        <Route
          path="/create/language"
          element={<CreateLanguage setColor={setColor} />}
        />

        {/* 動画 */}
        <Route
          path="/create/extracurricular"
          element={<CreateExtracurricular setColor={setColor} />}
        />
        <Route
          path="registered/extracurricular"
          element={<RegisteredExtracurricularList setColor={setColor} />}
        />
        <Route
          path="registered/extracurricular/detail"
          element={<RegisteredExtracurricularDetail setColor={setColor} />}
        />
        <Route
          path="/create/frustration"
          element={<CreateFrustration setColor={setColor} />}
        />
        <Route
          path="registered/frustration"
          element={<RegisteredFrustrationList setColor={setColor} />}
        />
        <Route
          path="registered/frustration/detail"
          element={<RegisteredFrustrationDetail setColor={setColor} />}
        />
        <Route
          path="/create/interview"
          element={<CreateInterview setColor={setColor} />}
        />
        <Route
          path="registered/interview"
          element={<RegisteredInterviewList setColor={setColor} />}
        />
        <Route
          path="registered/interview/detail"
          element={<RegisteredInterviewDetail setColor={setColor} />}
        />
        <Route
          path="/create/motivation"
          element={<CreateMotivation setColor={setColor} />}
        />
        <Route
          path="registered/motivation"
          element={<RegisteredMotivationList setColor={setColor} />}
        />
        <Route
          path="registered/motivation/detail"
          element={<RegisteredMotivationDetail setColor={setColor} />}
        />
        <Route
          path="/create/selfproduce"
          element={<CreateSelfproduce setColor={setColor} />}
        />
        <Route
          path="registered/selfproduce"
          element={<RegisteredSelfproduceList setColor={setColor} />}
        />
        <Route
          path="registered/selfproduce/detail"
          element={<RegisteredSelfproduceDetail setColor={setColor} />}
        />
        <Route
          path="/create/other"
          element={<CreateOther setColor={setColor} />}
        />
        <Route
          path="registered/other"
          element={<RegisteredOtherList setColor={setColor} />}
        />
        <Route
          path="registered/other/detail"
          element={<RegisteredOtherDetail setColor={setColor} />}
        />

        {/* パーソナル */}
        <Route
          path="/create/like"
          element={<CreateLike setColor={setColor} />}
        />
        <Route
          path="/create/hobby"
          element={<CreateHobby setColor={setColor} />}
        />
        <Route
          path="/create/stress"
          element={<CreateStress setColor={setColor} />}
        />
        <Route
          path="/registered/like"
          element={<RegisteredLikeList setColor={setColor} />}
        />
        <Route
          path="/registered/hobby"
          element={<RegisteredHobbyList setColor={setColor} />}
        />
        <Route
          path="/registered/stress"
          element={<RegisteredStressList setColor={setColor} />}
        />
        <Route
          path="/registered/like/detail"
          element={<RegisteredLikeDetail setColor={setColor} />}
        />
        <Route
          path="/registered/hobby/detail"
          element={<RegisteredHobbyDetail setColor={setColor} />}
        />
        <Route
          path="/registered/stress/detail"
          element={<RegisteredStressDetail setColor={setColor} />}
        />
        <Route
          path="/create/talent"
          element={<CreateTalent setColor={setColor} />}
        />
        <Route
          path="/registered/talent"
          element={<RegisteredTalentList setColor={setColor} />}
        />
        <Route
          path="/registered/talent/detail"
          element={<RegisteredTalentDetail setColor={setColor} />}
        />

        {/* 年表 */}
        <Route
          path="/create/chronology"
          element={<CreateChronology setColor={setColor} />}
        />
        <Route
          path="/registered/chronology"
          element={<RegisteredChronologyList setColor={setColor} />}
        />
        <Route
          path="/registered/chronology/detail"
          element={<RegisteredChronologyDetail setColor={setColor} />}
        />

        {/* success */}
        <Route path="/success" element={<SuccessPage />} />

        {/* home */}
        <Route path="/home" element={<HomePage />} />

        {/* errorBasic */}
        <Route path="/error" element={<ErrorBasicPage />} />
      </Routes>
    </MainBox>
  );
};

const MainBox = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
