import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as matchingAction } from "../../redux/modules/matching";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import user from "../../assets/images/icons/account_40.png"
import Button from "../../element/Button";
import NoDataPage from "./NoDataPage";





const SearchedUser = ({inputRef}) => {
    const dispatch = useDispatch();
    const searchedUser = useSelector(state => state.matching);

    //토큰에서 유저 아이디 받아오기
    const token = localStorage.getItem("jwtToken")
    const decodedToken = jwt_decode(token);
    const userName = decodedToken.username;


    if (Object.keys(searchedUser).length === 0 ) 
        return <NoDataPage/> 
    
    
    //내 매칭상태가 true면 매칭불가
    if (searchedUser.myMatchingState){
        //내 매칭상태가 true && 파트너가 매칭한 유저네임=내 유저네임 같을때 이미 그사람과 매칭중
        if(searchedUser.searchedUserPartner === userName){
            return(
                <Container>
                    <UserWrap>
                        <div>
                            <span><img src={user}/></span>
                            <UserNameWrap>
                                <div>{searchedUser.nickname}</div>
                                <div>이미 {searchedUser.nickname}님과 매칭중입니다</div>
                            </UserNameWrap>
                        </div>
                        <Button 
                        size="medium" 
                        color="sub01"
                        onClick={()=>{
                            dispatch(matchingAction.matchingCancleDB(searchedUser.memberId))
                        }}
                        >매칭취소</Button>
                    </UserWrap>
                </Container>
            )
        }
        return(
            <Container>
                <UserWrap>
                    <div>
                        <span><img src={user}/></span>
                        <UserNameWrap>
                            <div>{searchedUser.nickname}</div>
                            <div>먼저 본인의 파트너와 매칭을 <br/>취소하고 
                                이용하실 수 있습니다</div>
                        </UserNameWrap>
                    </div>
                    <Button size="medium" color="gray2">매칭불가</Button>
                </UserWrap>
            </Container>
        )
        //내 매칭상태가 false일때
    } else {
        //내 매칭상태가 false && 검색한유저의 매칭상태가 true일경우 검색한유저는 다른사람과 매칭중
        if (searchedUser.partnerMatchingState){
            return(
            <Container>
                <UserWrap>
                    <div>
                        <span><img src={user}/></span>
                        <UserNameWrap>
                            <div>{searchedUser.nickname}</div>
                            <div>다른 사람과 매칭 중 입니다.</div>
                        </UserNameWrap>
                    </div>
                    <Button size="medium" color="gray2">매칭불가</Button>
                </UserWrap>
            </Container>
            )
        //내 매칭상태가 false && 검색한유저의 매칭상태가 false && 검색한유저가 내아이디가 아닐때 초대가능
        }else if(inputRef.current?.value !== userName) {
            return(
                <Container>
                    <UserWrap>
                        <div>
                            <span><img src={user}/></span>
                            <UserNameWrap>
                                <div>{searchedUser.nickname}</div>
                                <div>매칭할 수 있습니다</div>
                            </UserNameWrap>
                        </div>
                        <Button size="medium" color="main02" onClick={()=>{
                            dispatch(matchingAction.matchingInvitationDB(searchedUser.memberId))
                        }} >초대하기</Button>
                </UserWrap>
            </Container>
            )
        }
    }
    
}

export default SearchedUser;

const Container = styled.div`
    width: 100%;
    height: 570px;
    
`;
const UserWrap = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    & > div {
        display: flex;
        gap: 10px;
    }
`;
const UserNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    & > div:last-child {
        font-size: 12px;
        color: ${props => props.theme.gray2}
    }
`;