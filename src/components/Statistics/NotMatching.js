import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import warning from "../../assets/images/icons/warning_40.png"
import Button from "../../element/Button";
const NotMatching = () => {
    const navigate = useNavigate();
    return(
        <NoData>
            <div><img src={warning}/> </div>
            <div>친구와 매칭을 하신 뒤 즐기실수 있습니다</div>
            <ButtonSt 
            size = "Xlarge"
            color= "main02"
            onClick = {()=>navigate("/matching")}>
            <p>매칭하러가기</p>
            </ButtonSt>
        </NoData>
    )
}

export default NotMatching;

const NoData = styled.div`
    width: 100%;
    height: 570px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:  ${props => props.theme.gray2} ;
`;

const ButtonSt = styled(Button)`
    margin: 10px 0;
`;