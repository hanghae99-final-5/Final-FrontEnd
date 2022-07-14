import React ,{useEffect} from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as characterAction } from "../../redux/modules/characters";
import coin from "../../assets/images/icons/coin_24.png"

const FriendCharacter = () => {
    const dispatch = useDispatch();
    const friendObj = useSelector(state => state.characters.friendCharacter);

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
                <Avartar url={friendObj.charImg} >
                    <Equip1 url1={friendObj.equipItems[0].equipImg} >
                        <Equip2 url2={friendObj.equipItems[1].equipImg}>
                            <Equip3 url3={friendObj.equipItems[2].equipImg}/>
                        </Equip2>
                    </Equip1>
                </Avartar>
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
                        {addComma(friendObj.money)}
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
    .nickName {
        font-family: "Noto Sans Korean 400"
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

    //vertical align 조절
    & > div:nth-child(1) {
    width: 16px;
    height: 16px;
    background-image: url(${coin});
    vertical-align: bottom;
    }
    
`;
