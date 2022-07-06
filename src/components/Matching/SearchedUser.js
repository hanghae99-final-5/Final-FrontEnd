import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as matchingAction } from "../../redux/modules/matching";
import styled from "styled-components";
import user from "../../assets/images/icons/account_40.png"
import Button from "../../element/Button";


const SearchedUser = () => {
    const dispatch = useDispatch();

    const seachedUser = useSelector(state => state.matching);
    console.log(seachedUser);

    return(
        <Container>
            <UserWrap>
                <div>
                    <span><img src={user}/></span>
                    <UserNameWrap>
                        <div>{SearchedUser.nickname}</div>
                        <div>이미 매칭중입니다</div>
                    </UserNameWrap>
                </div>
                <Button size="medium" color="sub01">매칭취소</Button>
            </UserWrap>
            <UserWrap>
                <div>
                    <span><img src={user}/></span>
                    <UserNameWrap>
                        <div>bboshi</div>
                        <div>다른 사람과 매칭 중 입니다.</div>
                    </UserNameWrap>
                </div>
                <Button size="medium" color="gray2">매칭불가</Button>
            </UserWrap>
            <UserWrap>
                <div>
                    <span><img src={user}/></span>
                    <UserNameWrap>
                        <div>bboshi</div>
                        <div>매칭할 수 있습니다.</div>
                    </UserNameWrap>
                </div>
                <Button size="medium" color="main02" onClick={()=>{
                    dispatch(matchingAction.matchingInvitationDB(seachedUser.memberId))
                }} >초대하기</Button>
            </UserWrap>
        </Container>
    )
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

    & > div:last-child {
        font-size: 12px;
        color: ${props => props.theme.gray2}
    }
`;