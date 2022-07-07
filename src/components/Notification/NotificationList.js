import React from "react";
import styled from "styled-components";
import Button from "../../element/Button";


const NotificationList = () => {

    return(
        <>
        <Container>
             <div className="writeDate">2022.06.25</div>
             <div className="notiWrap">
                <IconDiv></IconDiv>
                <p>bboshi님이 인증을 요청하셨습니다</p>
                <Button size="medium" color="main02">인증하기</Button>
             </div>
        </Container>
        <Container>
             <div className="writeDate">2022.06.25</div>
             <div className="notiWrap">
                <IconDiv></IconDiv>
                <p>bboshi님과 함께하시겠습니까?</p>
                <div>
                    <Button size="medium" color="EXPColor">수락하기</Button>
                </div>
             </div>
        </Container>
        </>
    )
}

export default NotificationList;

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 15%;
    margin: auto;
    
    .writeDate {
        font-weight: 400;
        font-size: 14px;
        padding-left: 8px;
    }
    .notiWrap {
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 336px;
        margin: 0 12px;

        p {
            font-size: 12px;
            font-weight: 400;
            width: 210px;
        }
    }
`;
const IconDiv = styled.div`
    width: 40px;
    height: 40px;
    background: gray;
    margin: 0 10px 0 0;
`;
