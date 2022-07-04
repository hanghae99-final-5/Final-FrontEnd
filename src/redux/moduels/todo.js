import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from "immer";


//action type
const GET_TODOLIST = "GET_TODOLIST";

//action creater
const getTodolist = createAction(GET_TODOLIST,(todo) => ({todo}));

//initail state
const initailState = {}

//middlewares
const getTodolistDB =  () => {
    return async function(dispatch,getState){
        // await axios({
        //     method: "get",
        //     url: `${BASE_URL}/api/mytodos`,
        //     }).then((res)=> {
        //         console.log('Todolist조회미들웨어::',res.data);
        //         dispatch(getTodolist(res.data))
        //     }).catch((err)=>{
        //         console.log("Todolist조회err::",err);
        //     })
        dispatch(getTodolist({
            "member": [
                {
                    "matchingState": false
                }
            ],
            "todos": [
                {
                    "todoId": 1,
                    "content": "test",
                    "proofImg": null,
                    "startDate": "2022-06-30",
                    "endDate": "2022-07-01",
                    "confirmDate": "2022-07-01",
                    "difficulty": 3,
                    "confirmState": false,
                    "completionState": false,
                    "todoType" : 0  // (0: 개인, 1: 매칭)
                },
                {
                    "todoId": 2,
                    "content": "matchingtest",
                    "proofImg": null,
                    "startDate": "2022-06-30",
                    "endDate": "2022-07-01",
                    "confirmDate": "2022-07-01",
                    "difficulty": 3,
                    "confirmState": false,
                    "completionState": false,
                    "todoType" : 1  // (0: 개인, 1: 매칭)
                }
            ],
        }))
    }
}



//reducer
export default handleActions(
    {
        //처음 투두리스트 조회
        [GET_TODOLIST]:(state,action) => {
            console.log("GET_TODOLIST reducer:::", state,action);
            return action.payload.todo;
        }
    },
    initailState
)

const actionCreators = {
    getTodolist,
    getTodolistDB,
}

export {actionCreators};


