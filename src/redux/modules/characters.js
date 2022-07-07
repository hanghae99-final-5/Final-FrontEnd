import {
    createAction,
    handleActions
} from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";


//action type
const GET_CHARACTER = "GET_CHARACTER";
//action creater
const getCharacter = createAction(GET_CHARACTER, (character) => ({character}));

//initail state
const initailState = {}

//middlewares
const getCharacterDB = () => {
    return async function (dispatch, getState) {
        await axios({
            method: "get",
            url: `${BASE_URL}/api/characters`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('character조회미들웨어::',res.data);
                dispatch(getCharacter(res.data))
            }).catch((err)=>{
                console.log("character조회err::",err);
            })
        // dispatch(getCharacter({
        //     "matchingState": true,
        //     "level": 1,
        //     "hp": 60,
        //     "maxHp": 100,
        //     "exp": 80,
        //     "maxExp": 100,
        //     "money": 10000,
        //     "charImg": "기본charImgUrl",
        //     "equipItems": [{
        //             "itemId": 1,
        //             "equipImg": "흰머리_장착",
        //             "category": "HAIR"
        //         },
        //         {
        //             "itemId": 2,
        //             "equipImg": "흰옷_장착",
        //             "category": "TOP"
        //         }
        //     ]
        // }))
    }
}

//reducer
export default handleActions(
    {
        [GET_CHARACTER]:(state,action) => {
            console.log("character reducer:::" ,action)
            return action.payload.character
        }
    },
    initailState
)

const actionCreators = {
    getCharacter,
    getCharacterDB,
}

export {
    actionCreators
};