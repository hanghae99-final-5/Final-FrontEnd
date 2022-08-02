import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/images/icons/back_arrow_24.png"
import { apis } from "../shared/api";

import { Line,Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DailyStatistics from "../components/Statistics/DailyStatistics";
import WeeklyStatistics from "../components/Statistics/WeeklyStatistics";
import MonthlyStatistics from "../components/Statistics/MonthlyStatistics";
import NotMatching from "../components/Statistics/NotMatching";


const Statistics = () => {
  const navigate = useNavigate();
  const [matchingState,setMatchingState] = useState(false);

  useEffect(()=>{
    const getStatisticsApi = async () => {
      const res = await apis.GetDailyStatistics()
      console.log(res.data.myMatchingState);
      setMatchingState(res.data.myMatchingState);
    }
    getStatisticsApi();
  },[matchingState])


  return (
    <Container>
      <HeaderWrap>
          <Wrapper>
              <BackDiv onClick={()=>navigate(-1)}>
                  <img src={backArrow}/>
              </BackDiv>
          </Wrapper>
      </HeaderWrap>
      <StatisticsContainer>
        {!matchingState?
         <NotMatching/>
         :
      <> 
        <DailyStatistics/>
        <WeeklyStatistics/>
        <MonthlyStatistics/>
      </>
        }
      </StatisticsContainer>
    </Container>

  );
};



export default Statistics;
const Container = styled.div`
    min-width: 360px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    

`;
const HeaderWrap = styled.nav`
  position: absolute;
    width: 100%;
    height: 54px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E4E4E4;
    
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BackDiv = styled.div`
    font-weight: 500;
    font-size: 20px;
    width: 24px;
    height: 24px;
    margin:0 0 0 12px;
`;
const StatisticsContainer = styled.div`
  position: fixed;
  top: 54px;
  bottom: 0;
  overflow: auto;
    ::-webkit-scrollbar {
    display: none;
    }
`;


