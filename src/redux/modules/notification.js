import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";



//action type
const GET_NOTIFICATION = "GET_NOTIFICATION";


//action creater
const getNotification = createAction(GET_NOTIFICATION,(payload) => ({payload}));

//initail state
const initailState = []

//middlewares
const getNotificationDB = () => {
    return async function (dispatch, getState) {
        await axios({
            method: "get",
            url: `${BASE_URL}/api/alarms`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('알람조회 미들웨어::',res.data);
                dispatch(getNotification(res.data));
            }).catch((err)=>{
                console.log("알람 조회 err::",err);
                console.log(err.response.data);
                const errMsg = err.response.data;
            })
       
    }
}
const deleteNotificationDB = () => {
    return async function(dispatch,getState) {
        await axios({
            method: "delete",
            url: `${BASE_URL}/api/alarms`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
        }).then((res) => {
            console.log('알람삭제 미들웨어::',res.data);
            dispatch(getNotificationDB());
        }).catch((err) => {
            console.log("알람 삭제 err::",err);
            console.log(err.response.data);
            const errMsg = err.response.data
        })
    }
}
const acceptMatchingDB = (senderId) => {
    return async function(dispatch,getState) {
        console.log(senderId);
        await axios({
            method: "post",
            url: `${BASE_URL}/api/users/acceptance/${senderId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
        }).then((res) => {
            console.log('매칭수락 미들웨어::',res.data);
            dispatch(getNotificationDB());
        }).catch((err) => {
            console.log("매칭수락 err::",err);
            console.log(err.response.data);
            const errMsg = err.response.data
        })
    }
}



//reducer
export default handleActions(
    {
        [GET_NOTIFICATION]: (state,action) => {
            console.log("GET_NOTIFICATION reducer:::",action);
            console.log(action.payload.payload);
            return action.payload.payload
        }
    },
    initailState
)

const actionCreators = {
    getNotification,
    getNotificationDB,
    deleteNotificationDB,
    acceptMatchingDB,
}

export {
    actionCreators
};