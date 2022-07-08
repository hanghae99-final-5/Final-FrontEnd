import {
    createAction,
    handleActions
} from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";


//action type
const GET_CHARACTER = "GET_CHARACTER";
const GET_FRIEND_CHARACTER = "GET_FRIEND_CHARACTER";
//action creater
const getCharacter = createAction(GET_CHARACTER, (character) => ({character}));
const getFriendCharacter = createAction(GET_FRIEND_CHARACTER, (character) => ({character}));

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
    }
}
const getFriendCharacterDB = () => {
    return async function (dispatch, getState) {
        await axios({
            method: "get",
            url: `${BASE_URL}/api/characters/partners`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('Friendcharacter조회미들웨어::',res.data);
                dispatch(getFriendCharacter(res.data));
            }).catch((err)=>{
                console.log("Friendcharacter조회err::",err);
            })
    }
}

//reducer
export default handleActions(
    {
        [GET_CHARACTER]:(state,action) => {
            console.log("character reducer:::" ,action)
            return action.payload.character
        },
        [GET_FRIEND_CHARACTER]:(state,action) => {
            console.log("Friend character reducer:::" ,action)
            return action.payload.character
        }
    },
    initailState
)

const actionCreators = {
    getCharacter,
    getCharacterDB,
    getFriendCharacter,
    getFriendCharacterDB,
}

export {
    actionCreators
};