import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

type LanguageSkillType = {
  title: string;
  auth?: string;
};

export const LanguageSkill = (props: LanguageSkillType) => {
  const { title, auth } = props;

  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [indonesia, setIndonesia] = useState(false);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (auth !== "") {
      if (title === "第二言語") {
        axios
          .get("https://onepage-server.com/onepage/language/", {
            headers: {
              Authorization: `Token ${auth}`
            }
          })
          .then((res) => {
            if (res.data.length === 1) {
              setLanguage(res.data[0].second_language);
              setLevel(res.data[0].second_level);
            }
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      } else if (title === "第三言語") {
        axios
          .get("https://onepage-server.com/onepage/language/", {
            headers: {
              Authorization: `Token ${auth}`
            }
          })
          .then((res) => {
            if (res.data.length === 1) {
              setLanguage(res.data[0].third_language);
              setLevel(res.data[0].third_level);
              console.log(.res.data);
            }
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    } else {
      if (title === "第二言語") {
        axios
          .get("https://onepage-server.com/onepage/language/", {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            if (res.data.length === 1) {
              setLanguage(res.data[0].second_language);
              setLevel(res.data[0].second_level);
            }
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      } else if (title === "第三言語") {
        axios
          .get("https://onepage-server.com/onepage/language/", {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then((res) => {
            if (res.data.length === 1) {
              setLanguage(res.data[0].third_language);
              setLevel(res.data[0].third_level);
            }
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    }
  }, [auth]);


  useEffect(() => {
    if (language === "インドネシア語") {
      setIndonesia(true);
    }
  }, [level]);

  return (
    <LanguageSkills>
      {language === "----" ? (
        <div className="language-level-0">
          <div className="language-skill">
            <h4 className="language-skill-title-0">{title}</h4>
            <h4 className="language-skill-language-0">---</h4>
            <h5 className="language-skill-level">unlearned</h5>
          </div>
        </div>
      ) : (
        <div className={`language-level-${level}`}>
          {indonesia ? (
            <div className="language-indonesia">
              <h4 className="language-indonesia-title">{title}</h4>
              <h4 className="language-indonesia-language">{language}</h4>
              <h5 className="language-indonesia-level">{level}</h5>
            </div>
          ) : (
            <div className="language-skill">
              <h4 className="language-skill-title">{title}</h4>
              <h4 className="language-skill-language">{language}</h4>
              <h5 className="language-skill-level">{level}</h5>
            </div>
          )}
        </div>
      )}
    </LanguageSkills>
  );
};

const LanguageSkills = styled.div`
  background-color: #fff;
  width: 21%;
  height: 190px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  border-radius: 0.75rem;

  .language {
    &-level {
      &-0 {
        width: 100%;
        height: 100%;
        background: linear-gradient( 310deg, rgb(30 32 32 / 75%), rgb(201 201 201 / 75%) );
        border-radius: 0.75rem;
      }

      &-日常会話レベル {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          310deg,
          rgb(30 32 32 / 75%),
          rgb(201 201 201 / 75%)
        );
        border-radius: 0.75rem;
      }

      &-日常会話レベル {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          310deg,
          rgb(33 204 255 / 75%),
          rgb(250 33 253 / 75%)
        );
        border-radius: 0.75rem;
      }

      &-ビジネスレベル {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          310deg,
          rgba(253, 236, 33, 0.75),
          rgb(255, 33, 43, 0.75)
        );
        border-radius: 0.75rem;
      }

      &-ネイティブレベル {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          310deg,
          rgba(67, 33, 255, 0.75),
          rgb(253, 33, 124, 0.75)
        );
        border-radius: 0.75rem;
      }
    }

    &-skill {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &-title {
        color: #fff;
        font-size: 35px;
        padding-bottom: 31px;
        letter-spacing: 0.2rem;

        &-0 {
          color: #fff;
          font-size: 35px;
        }
      }

      &-language {
        color: #fff;
        font-size: 30px;
        padding-bottom: 31px;

        &-0 {
          color: #fff;
          font-size: 60px;
          padding: 15px 0px 20px 0px;
        }
      }

      &-level {
        color: #fff;
      }
    }

    &-indonesia {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &-title {
        color: #fff;
        font-size: 35px;
        padding-bottom: 35px;
        letter-spacing: 0.2rem;
      }

      &-language {
        color: #fff;
        font-size: 23px;
        padding-bottom: 35px;
      }

      &-level {
        color: #fff;
      }
    }
  }
`;
