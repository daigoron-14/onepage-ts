import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const ProfileImage = () => {
  const [image, setImage] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://onepage-server.com/onepage/basic/", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        if (res.data.length === 1) {
          setImage(res.data[0].id_photo);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });

  return (
    <ProfileImageBox>
      <div className="profile">
        <img src={image} alt="" className="profile-image" />
      </div>
    </ProfileImageBox>
  );
};

const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 270px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 360px;
  border-radius: 1rem;
  background-color: #fff;
  margin-right: 30px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  .profile {
    width: 240px;
    height: 320px;
    border-radius: 1rem;

    &-image {
      border-radius: 1rem;
      width: 240px;
      height: 320px;
      object-fit: cover;
    }
  }
`;
