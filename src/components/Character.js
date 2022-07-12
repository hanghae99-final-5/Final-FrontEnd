import React ,{useEffect} from "react";
import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";
import { actionCreators as characterAction } from "../redux/modules/characters";
import coin from "../assets/images/icons/coin_24.png"


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
                <Avartar url={characterObj.charImg} >
                    <Equip1 url1={characterObj.equipItems[0].equipImg} >
                        <Equip2 url2={characterObj.equipItems[1].equipImg}>
                            <Equip3 url3={characterObj.equipItems[2].equipImg}/>
                        </Equip2>
                    </Equip1>
                </Avartar>
            </div>

            <div>
                <LevelBar>
                   <span className="nickName">{characterObj.nickname}</span>
                   <span>Lv.{characterObj.level}</span>
                </LevelBar>
                <StatusBar>
                    <span>HP</span>
                    <div>
                        <Bar 
                        width={(characterObj.hp/characterObj.maxHp)*100 + "%"}
                        color = "HPColor"
                        >
                        <div>
                            {characterObj.hp}/{characterObj.maxHp}
                        </div>
                        </Bar>
                    </div>
                </StatusBar>
                <StatusBar>
                    <span>EXP</span>
                    <div>
                        <Bar 
                        width={(characterObj.exp/characterObj.maxExp)*100 + "%"}
                        color = "EXPColor"
                        >
                            <div>
                            {characterObj.exp}/{characterObj.maxExp}
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
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 54px;


    & > div:nth-child(1) {
    width: 100px;
    height: 100px;
    border: 1px solid ${props=>props.theme.gray4}; 
    background: #FDFFFA;
    display: flex;
    align-items: center;
    justify-content: center;     
    }

    & > div:nth-child(2) {
    width: 218px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

`;

const Avartar = styled.div`
    width: 52px;
    height: 64px;
    background-color: #FDFFFA;
    background-image: url(${props=>props.url});        
`;
const Equip1 = styled.div`
    width: 52px;
    height: 64px;
    background-image: url(${props=>props.url1});    
`;
const Equip2 = styled.div`
    width: 52px;
    height: 64px;
    background-image: url(${props=>props.url2});    
`;
const Equip3 = styled.div`
    width: 52px;
    height: 64px;
    background-image: url(${props=>props.url3});    
`;

const Bar = styled.div`
    position: relative;
    width: ${(props) => props.width};
    background: ${(props) => props.theme[props.color]};
    & > div:nth-child(1){
        position: absolute;
        width: 100px !important;
        color: #fff;
    }
`;
const LevelBar = styled.div`
    width: 218px;
    height: 22px;
    background: white;
    padding-left: 6px;
    padding-right: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    
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

    //vertical align 조절
    & > div:nth-child(1) {
    width: 16px;
    height: 16px;
    background-image: url(${coin});
    vertical-align: bottom;
    }
    
`;
