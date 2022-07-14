import React ,{useEffect} from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as characterAction } from "../../redux/modules/characters";

const FriendCharacter = () => {
    const dispatch = useDispatch();
    const friendObj = useSelector(state => state.characters.friendCharacter);
    console.log("friendObj",friendObj);

     const addComma = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    useEffect(()=>{
        dispatch(characterAction.getFriendCharacterDB());
    },[])

    if (Object.keys(friendObj).length === 0) return null; 
    return (
        <CharacterWrap>
            <div>
                <div><img src={friendObj.charImg}/></div>
            </div>

            <div>
                <LevelBar>
                   <span className="nickName">{friendObj.nickname}</span>
                   <span>Lv.{friendObj.level}</span>
                </LevelBar>
                <StatusBar>
                    <span>HP</span>
                    <div>
                        <Bar 
                        width={(friendObj.hp/100)*100 + "%"}
                        color = "HPColor"
                        >
                        <div>
                            {friendObj.hp}/{friendObj.maxHp}
                        </div>
                        </Bar>
                    </div>
                </StatusBar>
                <StatusBar>
                    <span>EXP</span>
                    <div>
                        <Bar 
                        width={(friendObj.exp/friendObj.maxExp)*100 + "%"}
                        color = "EXPColor"
                        >
                            <div>
                            {friendObj.exp}/{friendObj.maxExp}
                            </div>
                        </Bar>     
                    </div>
                </StatusBar>
                <MoneyBar>
                    <div></div>
                    <div>
                        {friendObj.money}
                    </div>
                </MoneyBar>
            </div>
        </CharacterWrap>
    )
}

export default FriendCharacter;


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
    .nickName {
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
