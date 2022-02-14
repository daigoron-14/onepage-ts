import styled from "styled-components";
import { useState, useEffect } from "react";

export const MiddleChronology = () => {
  return (
    <MiddleChronologies>
      <div className="middle-black"></div>
      <div className="middle-gray"></div>
      <div className="middle-black"></div>
      <div className="middle-gray"></div>
      <div className="middle-black"></div>
      <div className="middle-gray"></div>
      <div className="middle-black"></div>
      <div className="middle-gray"></div>
    </MiddleChronologies>
  );
};

const MiddleChronologies = styled.div`
  width: 100%;
  height: 20px;
  margin: 0 auto;
  display: flex;

  .middle {
    &-black {
      width: 12.5%;
      height: 20px;
      background-color: rgb(190, 190, 190);
      border-right: 2px solid #fff;
    }

    &-gray {
      width: 12.5%;
      height: 20px;
      background-color: rgb(230, 230, 230);
      border-right: 2px solid #fff;
    }
  }
`;
