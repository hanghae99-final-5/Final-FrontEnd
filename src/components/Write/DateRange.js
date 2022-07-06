import React, { useState, useEffect} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateRange = ({startDate,setStartDate,endDate,setEndDate}) => {

    const [placeholder1,setPlaceholder1] = useState(false);
    const [placeholder2,setPlaceholder2] = useState(false);
    
    const StartCustomInput = ({ value, onClick }) => (
        <DateBox className="example-custom-input" onClick={onClick}>
           Start | {placeholder1? value : "YYYY-MM-DD"}
        </DateBox>
      );
      const EndCustomInput = ({ value, onClick }) => (
        <DateBox className="example-custom-input" onClick={onClick}>
          End | {placeholder2? value : "YYYY-MM-DD"}
        </DateBox>
      );

      
      
    return(

        <Container>
            <div>Date</div>
            <div className="wrap">
                
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            setPlaceholder1(true)}}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={ko}
                        dateFormat="yyyy/MM/dd"
                        customInput={<StartCustomInput/>}
                    />
                
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => {setEndDate(date)
                                            setPlaceholder2(true)}}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="yyyy/MM/dd"
                        locale={ko}
                        customInput={<EndCustomInput />}
                    />

            </div>
        </Container>
    )
}

export default DateRange;

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

const DateBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.gray5};
    border-radius: 6px;
    width: 80%;
    min-height: 40px;
    color: ${props => props.theme.gray3};
    cursor: pointer;
`;


