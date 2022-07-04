import React ,{useEffect,useState} from "react";
import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";
import { actionCreators as characterAction } from "../redux/moduels/characters";


const Character = () => {
    const dispatch = useDispatch();
    const characterObj = useSelector(state => state.characters)
    console.log("characterObj",characterObj);

     //금액을 콤마로 구분해줄 함수
     const addComma = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    useEffect(()=>{
        dispatch(characterAction.getCharacterDB());
    },[])

    if (Object.keys(characterObj).length === 0) return null; 
    return (
    
        <CharacterWrap>
            <div>
                {/* 안에 이큅아이템들 겹쳐서 놓기  */}
                <div><img src={characterObj.charImg}/></div>
            </div>

            <div>
                <StatusBar>Lv.{characterObj.level}</StatusBar>
                <StatusBar>
                    <span>HP</span>
                    <div>
                        <Bar 
                        width={(characterObj.hp/100)*100 + "%"}
                        color = "HPColor"
                        >
                        <div>
                            {characterObj.hp}/100
                        </div>
                        </Bar>
                    </div>
                </StatusBar>
                <StatusBar>
                    <span>EXP</span>
                    <div>
                        <Bar 
                        width={(characterObj.exp/100)*100 + "%"}
                        color = "EXPColor"
                        >
                            <div>
                            {characterObj.exp}/100
                            </div>
                        </Bar>     
                    </div>
                </StatusBar>
                <MoneyBar>
                    <div></div>
                    <div>
                        {addComma(characterObj.money)}
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

const Bar = styled.div`
    position: relative;
    width: ${(props) => props.width};
    background: ${(props) => props.theme[props.color]};
    & > div:nth-child(1){
        position: absolute;
        width: 100px !important;
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

    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        background: #C2C2C2;
        width: 184px;
        height: 16px;
        border-radius: 15px;
        font-size: 12px;

        & > div:nth-child(1){
        display: flex;
        align-items: center;
        padding-left: 12px;
        height: 16px;
        border-radius: 15px;
        font-size: 12px;
        ${Bar}
        }

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
