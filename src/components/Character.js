import React from "react";
import styled from "styled-components";

const Character = () => {
    return (
        <CharacterWrap>
            <div>
                <div></div>
            </div>

            <div>
                <StatusBar>Lv.100</StatusBar>
                <StatusBar>
                    <span>HP</span>
                    <div>100/100</div>
                </StatusBar>
                <StatusBar>
                    EXP
                    <div>100/100</div>
                </StatusBar>
                <MoneyBar>
                    <div></div>
                    {/* 정규식으로 돈단위 쉼표만들기 */}
                    <div>
                        10,000
                    </div>
                </MoneyBar>
            </div>
        </CharacterWrap>
    )
}

export default Character;


//fontweight 수정하기 
const CharacterWrap = styled.div`
    max-width: 360px;
    width: 100%;
    height: 120px;
    background-color: #EFEFEF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 54px;


    & > div:nth-child(1) {
    width: 100px;
    height: 100px;
    border: 1px solid; 
    background: #C2C2C2;
    display: flex;
    align-items: center;
    justify-content: center;

        & div {
        width: 52px;
        height: 64px;
        background: #EFEFEF;
        }
    }

    & > div:nth-child(2) {
    width: 218px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

`;

const StatusBar = styled.div`
    width: 218px;
    height: 22px;
    background: white;
    padding-left: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    div {
        display: flex;
        align-items: center;
        padding-left: 12px;
        background: #C2C2C2;
        width: 184px;
        height: 16px;
        border-radius: 15px;
        font-size: 12px;
    }

`;
const MoneyBar = styled.div`
    width: 218px;
    height: 22px;
    background: white;
    padding-right: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    gap: 6px;

    & > div:nth-child(1) {
    width: 16px;
    height: 16px;
    background: #C2C2C2;
    }
`;
