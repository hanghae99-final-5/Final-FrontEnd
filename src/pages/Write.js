import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DateRange from "../components/Write/DateRange";
import Difficulty from "../components/Write/Difficulty";
import TodoWrite from "../components/Write/TodoWrite";
import WriteHeader from "../components/Write/WriteHeader";

const Write = () => {
    const [todoType,setTodoType] = useState(null);
    const [todoText,setTodoText] = useState(null);
    const [diff,setDiff] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const convertedStartDate =  startDate.toISOString().split('T')[0]
    const convertedEndDate = endDate.toISOString().split('T')[0]
    

    return(
        <>
        <WriteContainer>
            <WriteHeader todoObj={{todoType,todoText,diff,convertedStartDate,convertedEndDate}}/>
            <TodoWrite setTodoType={setTodoType} setTodoText={setTodoText}/>
            <Difficulty setDiff={setDiff}/>
            <DateRange 
            startDate={startDate} 
            setStartDate={setStartDate} 
            endDate={endDate}
            setEndDate={setEndDate} 
            />
        </WriteContainer>
        </>
    )
}

export default Write;

const WriteContainer = styled.div`
    min-width: 360px;
    height: 640px;
    background: #FFFFFF;
`;