import React from "react";
import styled from "styled-components";
import { DifficultyItemBox } from "../../element/ItemBox";
import difficulty1 from "../../assets/images/icons/01_create_page_difficulty_52.png";
import difficulty2 from "../../assets/images/icons/02_create_page_difficulty_52.png";
import difficulty3 from "../../assets/images/icons/03_create_page_difficulty_52.png";
import difficulty4 from "../../assets/images/icons/04_create_page_difficulty_52.png";
import coin from "../../assets/images/icons/coin_24.png";

const Difficulty = ({ setDiff, diff, todoType }) => {
  const difficultyList = [
    { name: "Easy", coin: 10, exp: 5, icon: difficulty1 },
    { name: "Normal", coin: 20, exp: 10, icon: difficulty2 },
    { name: "Hard", coin: 30, exp: 15, icon: difficulty3 },
    { name: "Hard Core", coin: 40, exp: 20, icon: difficulty4 },
  ];

  return (
    <Container>
      <div>Difficulty</div>
      {todoType === 2 && diff ? (
        <RewardInfoDiv>
          <span>EXP {difficultyList[diff - 1].exp} </span>
          <img src={coin} style={{ verticalAlign: "top" }} />
          <span> {difficultyList[diff - 1].coin}</span>
        </RewardInfoDiv>
      ) : null}
      <div className="wrap">
        {difficultyList.map((difficultyObj, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setDiff(idx + 1);
              }}
            >
              <DifficultyItemBox
                img={difficultyObj.icon}
                selected={diff - 1 === idx}
              />
              <TextDiv>{difficultyObj.name}</TextDiv>
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
