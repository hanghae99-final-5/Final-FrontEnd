import React from "react";
import styled from "styled-components";
import { FirstWrap, LOGO, FirstButtonWrap, SignupButtonWrap } from "../components/FirstPageCSS";

const Login = () => {

    return (
        <FirstWrap>
            <LOGO top="70px">LOGO</LOGO>
            <SignupButtonWrap top="246px" gap="8px">
                <input type="text" placeholder="아이디를 입력하세요"></input>
                <input type="text" placeholder="비밀번호를 입력하세요"></input>
            </SignupButtonWrap>
            <FirstButtonWrap top="344px" gap="10px">
                <button><span>로그인</span></button>
                <button><span>Google 계정으로 로그인</span></button>
            </FirstButtonWrap>
        </FirstWrap>
    )
}

export default Login;