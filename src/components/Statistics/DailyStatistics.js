import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { apis } from "../../shared/api";

import { Line,Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DailyStatistics = () => {
    const [statisticsData,setStatisticsData] = useState(null);
    let labels;
    let data;
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
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
          borderColor: '#807C3F',
          backgroundColor: '#807C3F',
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
      setStatisticsData(res.data);
    }
    getDailyStatisticsApi();
  },[])

 
if (!statisticsData) return null;
return (
    <StatisticsContainer>
        <Bar options={options} data={data}/>
    </StatisticsContainer>
  );
};

export default DailyStatistics;

const StatisticsContainer = styled.div`
  max-width: 360px;
  width: 100%;
  height: 40vh;
  margin-bottom: 5vh;
`;