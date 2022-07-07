import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";


//action type
const GET_SEARCHED_USER = "GET_SEARCHED_USER";
const MATCHING_INVITATION= "MATCHING_INVITATION"


//action creater
const getSearchedUser = createAction(GET_SEARCHED_USER, (searchedUser) => ({searchedUser}));
const matchingInvitation = createAction(MATCHING_INVITATION, (memberId) => ({memberId}));

//initail state
const initailState = {}

//middlewares
const getSearchedUserDB = (username) => {
    return async function (dispatch, getState) {
        console.log(username);
        await axios({
            method: "get",
            url: `${BASE_URL}/api/users/${username}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('matching user조회 미들웨어::',res.data);
                dispatch(getSearchedUser(res.data))
            }).catch((err)=>{
                console.log("matching user조회 err::",err);
            })
    }
}

const matchingInvitationDB = (memberId) => {
    return async function (dispatch, getState) {
        console.log(memberId);
        await axios({
            method: "post",
            url: `${BASE_URL}/api/users/invitation/${memberId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('matching 초대 미들웨어::',res.data);
                dispatch(matchingInvitation(res.data))
            }).catch((err)=>{
                console.log("matching 초대 err::",err);
            })
    }
}


//reducer
export default handleActions(
    {
        [GET_SEARCHED_USER]:(state,action) => {
            console.log("search user reducer:::",action);
            return action.payload.searchedUser;
        }
    },
    initailState
)

const actionCreators = {
    getSearchedUser,
    getSearchedUserDB,
    matchingInvitationDB,
}

export {
    actionCreators
};