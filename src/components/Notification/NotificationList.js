import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import styled from "styled-components";
import Button from "../../element/Button";
import { actionCreators as notificationAction } from "../../redux/modules/notification";


const NotificationList = () => {
    const dispatch = useDispatch();
    const notificationList = useSelector(state => state.notification);
    console.log(notificationList);
    

    useEffect(()=>{
        dispatch(notificationAction.getNotificationDB())
    },[])

    return(
        <>
        <Container>
             <div className="writeDate">2022.06.25</div>
             <div className="notiWrap">
                <IconDiv></IconDiv>
                <p>bboshi님이 인증을 요청하셨습니다</p>
                <div>
                    <Button size="medium" color="EXPColor">수락하기</Button>
                </div>
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
        {notificationList && notificationList.map((noti,idx)=>{
            return(
                <Container key={idx}>
                    <div className="writeDate">{noti.alarmDate}</div>
                    <div className="notiWrap">
                        <IconDiv></IconDiv>
                        <p>{noti.message}</p>
                        <div>
                        {/* alarmType에 따라 인증하기 / 수락하기 */}
                            {noti.alarmType === "AUTHENTICATION"?
                                // alarmState에 따라 버튼 활성 / 비활성
                                noti.alarmState === 0? 
                                //온클릭에 friendsmain 라우팅 달기 
                            <Button size="medium" color="main02">인증하기</Button>
                                :
                            <Button 
                            size="medium" 
                            disabled
                            >완료</Button>
                            :
                                noti.alarmState === 0? 
                            <Button 
                            size="medium" 
                            color="EXPColor"
                            onClick={()=> {
                                dispatch(notificationAction.acceptMatchingDB(noti.senderId))
                            }}
                            >수락하기</Button>
                                :
                            <Button 
                            size="medium" 
                            disabled
                            >완료</Button>
                            }
                        </div>
                    </div>
        </Container>
            )
        }) }
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
