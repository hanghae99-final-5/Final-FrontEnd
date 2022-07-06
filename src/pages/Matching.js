import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as matchingAction } from "../redux/modules/matching";
import jwt_decode from "jwt-decode";

import styled from "styled-components";
import NoDataPage from "../components/Matching/NoDataPage";
import SearchedUser from "../components/Matching/SearchedUser";
import Button from "../element/Button";
import backArrow from "../assets/images/icons/back_arrow_24.png"

const Matching = () => {
    const navigate = useNavigate();
    const inputRef = useRef();
    const dispatch = useDispatch();

 

    return (
        <Container>
            <HeaderWrap>
                <Wrapper>
                    <BackDiv onClick={()=>navigate("/")}>
                        <img src={backArrow}/>
                    </BackDiv>
                    <SearchBarinput type="text" placeholder="Search email" ref={inputRef}/>
                </Wrapper>
                <NavDiv>
                    <div>
                        <Button 
                        color="gray2"
                        size="small"
                        outline
                        onClick={()=>{
                            console.log(inputRef.current.value);
                            dispatch(matchingAction.getSearchedUserDB(inputRef.current.value));
                        }}
                        ><p>Search</p></Button>
                    </div>
                </NavDiv>
            </HeaderWrap>
            {/* <NoDataPage/> */}
            <SearchedUser/>
            

        </Container>
    )

}
export default Matching;

const Container = styled.div`
    min-width: 360px;
    height: 640px;
    background: #FFFFFF;
`;

const HeaderWrap = styled.nav`
    width: 100%;
    height: 70px;
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
const SearchBarinput = styled.input`
    display: flex;
    align-items: center;
    width: 224px;
    margin: 0 0 0 12px;
    font-size: 14px;
    font-weight: 500;
    background: ${props => props.theme.gray5};
    height: 30px;
    border-radius: 6px;
    border: 0;
    color: ${props => props.theme.gray1};
    padding-left: 10px;
    &:focus {
    }
`;
const NavDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 15px 0 0;
`;






