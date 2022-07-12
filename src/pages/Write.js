import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DateRange from "../components/Write/DateRange";
import Difficulty from "../components/Write/Difficulty";
import TodoWrite from "../components/Write/TodoWrite";
import WriteHeader from "../components/Write/WriteHeader";
import CommonModal from "../element/CommonModal";

const Write = () => {
    const [todoType,setTodoType] = useState(null);
    const [todoText,setTodoText] = useState(null);
    const [diff,setDiff] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const convertedStartDate =  startDate.toISOString().split('T')[0]
    const convertedEndDate = endDate.toISOString().split('T')[0]
    

    const [modal,setModal] = useState(false);
    const [modalText,setModalText] = useState(null);
    const openErrModal = (modalText) => {
        console.log("들어왔는지")
        setModal(true);
        setModalText(modalText)
    }
    const onConfirm = () => {
        setModal(false);
    }

    return(
        <>
        <WriteContainer>
            <CommonModal 
                title={"notice"}
                visible={modal}
                modalText={modalText}
                onConfirm={onConfirm}
                isSingleBtn
                />
            <WriteHeader 
            todoObj={{todoType,todoText,diff,convertedStartDate,convertedEndDate}} 
            openErrModal = {openErrModal}
            onConfirm = {onConfirm}
            />
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