import styled from "styled-components";

export const FirstWrap = styled.div`
    display : flex;
    justify-content : center;
`;

export const LOGO = styled.div`
width : 188px;
height : 120px;
display : flex;
position : fixed;
top : ${(props) => props.top};
justify-content : center;
align-items : center;
background : yellow;
`;

export const FirstButtonWrap = styled.button`
    position : fixed;
    top : ${(props) => props.top};
    display : flex;
    flex-direction : column;
    gap : ${(props) => props.gap};
    background : transparent;
    border : transparent;
    & > button { 
        width : 280px;
        height : 40px;
    };
    & > button > span {
        font-size : 14px;
        color : blue;
    }
`;

export const SignupButtonWrap = styled.button`
    position : fixed;
    top : ${(props) => props.top};
    display : flex;
    flex-direction : column;
    gap : ${(props) => props.gap};
    background : transparent;
    border : transparent;
    & > input { 
        width : 280px;
        height : 40px;
    };
`;