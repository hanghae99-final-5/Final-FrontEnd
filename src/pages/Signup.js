import { FirstWrap, LOGO, FirstButtonWrap, SignupButtonWrap } from "../components/FirstPageCSS";

const Signup = () => {

    return (
        <FirstWrap>
            <LOGO top="70px">LOGO</LOGO>
            <SignupButtonWrap top="246px" gap="8px">
                <input type="text" placeholder="아이디"></input>
                <input type="text" placeholder="이메일"></input>
                <input type="text" placeholder="비밀번호"></input>
                <input type="text" placeholder="비밀번호 확인"></input>
            </SignupButtonWrap>
            <FirstButtonWrap top="440px" gap="10px">
                <button><span>로그인</span></button>
                <button><span>Google 계정으로 로그인</span></button>
            </FirstButtonWrap>
        </FirstWrap>
    )
}

export default Signup;