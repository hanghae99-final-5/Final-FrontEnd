import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/images/icons/back_arrow_24.png"
import { apis } from "../shared/api";

import { Line,Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Statistics = () => {
  const navigate = useNavigate();
  const [statisticsData,setStatisticsData] = useState(null);
  let labels;
  let data;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '일간 통계',
      },
    },
    scales: {
        y: {
          type: 'linear', 
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
  };
  if (statisticsData) {
    labels = Object.keys(statisticsData.myAchievement);
  
  data = {
    labels,
    datasets: [
    {
        type: 'line',
        label: '내 경험치 증가량',
        borderColor: '#E7765E',
        backgroundColor: '#E7765E',
        borderWidth: 3,
        data: Object.values(statisticsData.myExpChanges),
        yAxisID: 'y1',
    },
      {
        type: 'line',
        label: '친구 경험치 증가량',
        data: Object.values(statisticsData.friendExpChanges),
        borderWidth: 3,
        borderColor: '#EF920F',
        backgroundColor: '#EF920F',
        yAxisID: 'y1',
      },
      {
        label: '내 매칭투두 달성갯수',
        data: Object.values(statisticsData.myAchievement),
        backgroundColor: '#E0C770',
        yAxisID: 'y',

      },
      {
        label: '친구 매칭투두 달성갯수',
        data: Object.values(statisticsData.friendAchievement),
        backgroundColor: '#5C800C',
        yAxisID: 'y',
      },
    ],
  }
}

  
  useEffect(()=>{
    const getDailyStatisticsApi = async () => {
      const res = await apis.GetDailyStatistics()
      console.log(res.data);
      setStatisticsData(res.data);
    }
    getDailyStatisticsApi();
  },[])

  if (!statisticsData) return null;
  return (
    <Container>
      <HeaderWrap>
          <Wrapper>
              <BackDiv onClick={()=>navigate(-1)}>
                  <img src={backArrow}/>
              </BackDiv>
          </Wrapper>
      </HeaderWrap>
      <div>
      <Bar options={options} data={data} />
      </div>
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
    border: 1px solid;
`;
const HeaderWrap = styled.nav`
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

