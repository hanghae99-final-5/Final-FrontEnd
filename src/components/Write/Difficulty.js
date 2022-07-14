import React, { useState } from "react";
import styled from "styled-components";
import { DifficultyItemBox } from "../../element/ItemBox";
import difficulty1 from "../../assets/images/icons/01_create_page_difficulty_52.png";
import difficulty2 from "../../assets/images/icons/02_create_page_difficulty_52.png";
import difficulty3 from "../../assets/images/icons/03_create_page_difficulty_52.png";
import difficulty4 from "../../assets/images/icons/04_create_page_difficulty_52.png";
import coin from "../../assets/images/icons/coin_24.png";

const Difficulty = ({ setDiff,diff }) => {
  const difficultyList = ["Easy", "Normal", "Hard", "Hard Core"];
  const difficultyIconList = [
    difficulty1,
    difficulty2,
    difficulty3,
    difficulty4,
  ];
  return (
    <Container>
      <div>Difficulty</div>
      <RewardInfoDiv>
        <span>EXP 10 </span>
        <img src={coin} style={{ "verticalAlign": "top" }} />
        <span> 10</span>
      </RewardInfoDiv>
      <div className="wrap">
        {difficultyList.map((difficulty, idx) => {
          return (
            <div key = {idx}
              onClick={() => {
                setDiff(idx + 1);
              }}
            >
              <DifficultyItemBox
                img={difficultyIconList[idx]}
                selected={diff-1 === idx}
              />
              <TextDiv>{difficulty}</TextDiv>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Difficulty;

const Container = styled.div`
  width: 100%;
  height: 25%;
  padding: 12px;

  // Text
  & > div:nth-child(1) {
    font-weight: 400;
    font-size: 16px;
    padding: 0 0 12px 0;
  }
  .wrap {
    display: flex;
    justify-content: space-around;
    font-weight: 400;
    font-size: 12px;
  }
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: ${(props) => props.theme.gray1};
  margin-top: 3px;
`;

const RewardInfoDiv = styled.div`
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.gray2};
`;
