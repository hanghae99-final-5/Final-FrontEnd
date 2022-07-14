import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";



//action type
const GET_SEARCHED_USER = "GET_SEARCHED_USER";
const MATCHING_INVITATION= "MATCHING_INVITATION"
const MATCHING_CANCEL= "MATCHING_INVITATION"


//action creater
const getSearchedUser = createAction(GET_SEARCHED_USER, (searchedUser) => ({searchedUser}));
const matchingInvitation = createAction(MATCHING_INVITATION, (memberId) => ({memberId}));
const matchingCancle = createAction(MATCHING_CANCEL, (memberId) => ({memberId}));

//initail state
const initailState = {}

//middlewares
const getSearchedUserDB = (username,callback) => {
    return async function (dispatch, getState) {
        if(username === "") 
            return callback("검색한 사용자의 이메일을 입력해주세요")
        await axios({
            method: "get",
            url: `${BASE_URL}/api/users/${username}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                dispatch(getSearchedUser(res.data))
            }).catch((err)=>{
                const errMsg = err.response.data.message
                // errMsg === "이메일 형식이 아닙니다." && alert("이메일 형식이 아닙니다.") 
                // errMsg === "검색한 유저가 존재하지 않습니다." && alert("검색한 유저가 존재하지 않습니다.")
                console.log("errMsg",errMsg);
                callback(errMsg);   
            })
       
    }
}
const matchingInvitationDB = (memberId) => {
    return async function (dispatch, getState) {
        await axios({
            method: "post",
            url: `${BASE_URL}/api/users/invitation/${memberId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                // dispatch(matchingInvitation(res.data))
            }).catch((err)=>{
                console.log("matching 초대 err::",err);
            })
    }
}
const matchingCancleDB = (memberId) => {
    return async function (dispatch, getState) {
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/users/cancel/${memberId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                dispatch(matchingInvitation(res.data))
            }).catch((err)=>{
                console.log("matching 취소 err::",err);
            })
    }
}

//reducer
export default handleActions(
    {
        [GET_SEARCHED_USER]:(state,action) => {
            return action.payload.searchedUser;
        },
       
    },
    initailState
)

const actionCreators = {
    getSearchedUser,
    getSearchedUserDB,
    matchingInvitationDB,
    matchingCancleDB,
}

export {
    actionCreators
};