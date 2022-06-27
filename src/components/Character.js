import React from "react";
import styled from "styled-components";

const Character = () => {
    return (
        <CharacterWrap>
            <div>캐릭터</div>
        </CharacterWrap>
    )
}

export default Character;

const CharacterWrap = styled.div`
    max-width: 360px;
    width: 100%;
    height: 120px;
    background-color: red;
    display: flex;
    position: fixed;
    top: 54px;
`;
