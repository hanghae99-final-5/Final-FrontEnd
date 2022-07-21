import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/images/icons/back_arrow_24.png"

import { Line,Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Statistics = () => {
  const navigate = useNavigate();

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

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
    {
        type: 'line',
        label: 'Dataset 5',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: [1,2,3,4,5,6],
        yAxisID: 'y1',
    },
      {
        type: 'line',
        label: 'Dataset 1',
        data: [5,10,15,20,25,30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Dataset 2',
        data: [0,10,20,50,80,100],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',

      },
      {
        label: 'Dataset 3',
        data: [0,10,20,50,80,100],
        backgroundColor: 'yellow',
        yAxisID: 'y',
      },
    ],
  };

export default Statistics;
const Container = styled.div`
    min-width: 360px;
    height: 640px;
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

