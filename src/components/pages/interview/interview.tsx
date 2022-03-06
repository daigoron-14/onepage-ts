import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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

export const Interview = () => {
  const location = useLocation();
  const state = location.state as any;

  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

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

  useEffect(() => {
    if (state == null) {
      navigate("/corporation/first");
    } else {
      axios
        .get(`https://onepage-server.com/onepage/paged/${state.page_id}/`, {
          headers: {
            Authorization: `Token ${state.auth_token}`
          }
        })
        .then((res) => {
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
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, []);

  return (
    <Interviews>
      <div className="basic">
        {state.auth_token !== null && <ProfileImage auth={state.auth_token} />}
        {state.auth_token !== null && (
          <BasicInfromation auth={state.auth_token} />
        )}
      </div>
      <div className="language">
        <EnglishSkill title="TOEIC" auth={state.auth_token} />
        <EnglishSkill title="TOEFL" auth={state.auth_token} />
        <LanguageSkill title="第二言語" auth={state.auth_token} />
        <LanguageSkill title="第三言語" auth={state.auth_token} />
      </div>
      <div className="video">
        <DetailVideoCard
          title="志望理由"
          label="motiv"
          id={motivationId}
          setValue={setMotivationFlag}
          value={motivationFlag}
          auth={state.auth_token}
        />
        <DetailVideoCard
          title="自己PR"
          label="self"
          id={selfproduceId}
          setValue={setSelfproduceFlag}
          value={selfproduceFlag}
          auth={state.auth_token}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          title="ガクチカ"
          label="extra"
          id={extracurricularId}
          setValue={setExtracurricularFlag}
          value={extracurricularFlag}
          auth={state.auth_token}
        />
        <DetailVideoCard
          title="挫折経験"
          label="frust"
          id={frustrationId}
          setValue={setFrustrationFlag}
          value={frustrationFlag}
          auth={state.auth_token}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          title="インタビュー"
          label="inter"
          id={interviewId}
          setValue={setInterviewFlag}
          value={interviewFlag}
          auth={state.auth_token}
        />
        <DetailVideoCard
          label="other1"
          id={otherId1}
          setValue={setOtherFlag1}
          value={otherFlag1}
          auth={state.auth_token}
        />
      </div>
      <div className="video">
        <DetailVideoCard
          label="other2"
          id={otherId2}
          setValue={setOtherFlag2}
          value={otherFlag2}
          auth={state.auth_token}
        />
        <DetailVideoCard
          label="other3"
          id={otherId3}
          setValue={setOtherFlag3}
          value={otherFlag3}
          auth={state.auth_token}
        />
      </div>
      <div className="chrono">
        <div className="chrono-top">
          <DetailTopChronology
            label="1"
            id={chronoId1}
            auth={state.auth_token}
          />
          <DetailTopChronology
            label="2"
            id={chronoId2}
            auth={state.auth_token}
          />
          <DetailTopChronology
            label="3"
            id={chronoId3}
            auth={state.auth_token}
          />
        </div>
        <MiddleChronology />
        <div className="chrono-bottom">
          <DetailBottomChronology
            label="4"
            id={chronoId4}
            auth={state.auth_token}
          />
          <DetailBottomChronology
            label="5"
            id={chronoId5}
            auth={state.auth_token}
          />
        </div>
      </div>

      <div className="like">
        <DetailLikeCard label="1" id={likeId1} auth={state.auth_token} />
        <DetailLikeCard label="2" id={likeId2} auth={state.auth_token} />
        <DetailLikeCard label="3" id={likeId3} auth={state.auth_token} />
      </div>
      <div className="personal">
        <DetailPersonalCard label="趣味" id={hobbyId} auth={state.auth_token} />
        <DetailPersonalCard
          label="特技"
          id={talentId}
          auth={state.auth_token}
        />
        <DetailPersonalCard
          label="ストレス"
          id={stressId}
          auth={state.auth_token}
        />
      </div>
    </Interviews>
  );
};

const Interviews = styled.div`
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
