import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { CreatePageBox } from "./createPage";
import { ProfileImage } from "../../atoms/page/registered/profileImage";
import { BasicInfromation } from "../../atoms/page/registered/basicInformation";
import { EnglishSkill } from "../../atoms/page/registered/englishSkill";
import { LanguageSkill } from "../../atoms/page/registered/languageSkill";
import { MiddleChronology } from "../../atoms/page/registered/middleChronology";

import { DetailVideoCard } from "../../atoms/page/detail/detailVideoCard";
import { DetailLikeCard } from "../../atoms/page/detail/detailLikeCard";
import { DetailPersonalCard } from "../../atoms/page/detail/detailPersonalCard";
import { DetailTopChronology } from "../../atoms/page/detail/detailTopChronology";
import { DetailBottomChronology } from "../../atoms/page/detail/detailBottomChronology";

type RegisteredPageDetailType = {
  setColor: Function;
};

export const RegisteredPageDetail = (props: RegisteredPageDetailType) => {
  const location = useLocation();
  const state = location.state as any

  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const { setColor } = props;
  const [motivationFlag, setMotivationFlag] = useState(true);
  const [selfproduceFlag, setSelfproduceFlag] = useState(true);
  const [extracurricularFlag, setExtracurricularFlag] = useState(true);
  const [interviewFlag, setInterviewFlag] = useState(true);
  const [frustrationFlag, setFrustrationFlag] = useState(true);
  const [otherFlag1, setOtherFlag1] = useState(true);
  const [otherFlag2, setOtherFlag2] = useState(true);
  const [otherFlag3, setOtherFlag3] = useState(true);

  const [extracurricularId, setExtracurricularId] = useState("");
  const [frustrationId, setFrustrationId] = useState("");
  const [motivationId, setMotivationId] = useState("");
  const [selfproduceId, setSelfproduceId] = useState("");
  const [interviewId, setInterviewId] = useState("");
  const [otherId1, setOtherId1] = useState("");
  const [otherId2, setOtherId2] = useState("");
  const [otherId3, setOtherId3] = useState("");
  const [chronoId1, setChronoId1] = useState("");
  const [chronoId2, setChronoId2] = useState("");
  const [chronoId3, setChronoId3] = useState("");
  const [chronoId4, setChronoId4] = useState("");
  const [chronoId5, setChronoId5] = useState("");
  const [likeId1, setLikeId1] = useState("");
  const [likeId2, setLikeId2] = useState("");
  const [likeId3, setLikeId3] = useState("");
  const [hobbyId, setHobbyId] = useState("");
  const [stressId, setStressId] = useState("");
  const [talentId, setTalentId] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (state == null) {
      navigate("/dashboard/registered/page");
    } else {
      axios
        .get(`https://onepage-server.com/onepage/paged/${state.page_id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
          setExtracurricularId(res.data.extracurricular_id);
          setMotivationId(res.data.motivation_id);
          setFrustrationId(res.data.frustration_id);
          setInterviewId(res.data.interview_id);
          setSelfproduceId(res.data.selfproduce_id);
          setOtherId1(res.data.other_1_id);
          setOtherId2(res.data.other_2_id);
          setOtherId3(res.data.other_3_id);
          setLikeId1(res.data.like_1_id);
          setLikeId2(res.data.like_2_id);
          setLikeId3(res.data.like_3_id);
          setHobbyId(res.data.hobby_id);
          setStressId(res.data.stress_id);
          setTalentId(res.data.talent_id);
          setChronoId1(res.data.chrono_1_id);
          setChronoId2(res.data.chrono_2_id);
          setChronoId3(res.data.chrono_3_id);
          setChronoId4(res.data.chrono_4_id);
          setChronoId5(res.data.chrono_5_id);
          setCompany(res.data.page_company);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, []);

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
        <DetailVideoCard
          title="志望理由"
          label="motiv"
          id={motivationId}
          setValue={setMotivationFlag}
          value={motivationFlag}
        />
        <DetailVideoCard
          title="自己PR"
          label="self"
          id={selfproduceId}
          setValue={setSelfproduceFlag}
          value={selfproduceFlag}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          title="ガクチカ"
          label="extra"
          id={extracurricularId}
          setValue={setExtracurricularFlag}
          value={extracurricularFlag}
        />
        <DetailVideoCard
          title="挫折経験"
          label="frust"
          id={frustrationId}
          setValue={setFrustrationFlag}
          value={frustrationFlag}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          title="インタビュー"
          label="inter"
          id={interviewId}
          setValue={setInterviewFlag}
          value={interviewFlag}
        />
        <DetailVideoCard
          label="other1"
          id={otherId1}
          setValue={setOtherFlag1}
          value={otherFlag1}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          label="other2"
          id={otherId2}
          setValue={setOtherFlag2}
          value={otherFlag2}
        />
        <DetailVideoCard
          label="other3"
          id={otherId3}
          setValue={setOtherFlag3}
          value={otherFlag3}
        />
      </div>
      <div className="chrono">
        <div className="chrono-top">
          <DetailTopChronology label="1" id={chronoId1} />
          <DetailTopChronology label="2" id={chronoId2} />
          <DetailTopChronology label="3" id={chronoId3} />
        </div>
        <MiddleChronology />
        <div className="chrono-bottom">
          <DetailBottomChronology label="4" id={chronoId4} />
          <DetailBottomChronology label="5" id={chronoId5} />
        </div>
      </div>

      <div className="like">
        <DetailLikeCard label="1" id={likeId1} />
        <DetailLikeCard label="2" id={likeId2} />
        <DetailLikeCard label="3" id={likeId3} />
      </div>
      <div className="personal">
        <DetailPersonalCard label="趣味" id={hobbyId} />
        <DetailPersonalCard label="特技" id={talentId} />
        <DetailPersonalCard label="ストレス" id={stressId} />
      </div>
    </CreatePageBox>
  );
};
