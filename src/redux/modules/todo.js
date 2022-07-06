import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";

//action type
const GET_TODOLIST = "GET_TODOLIST";
const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";

//action creater
const getTodolist = createAction(GET_TODOLIST,(todo) => ({todo}));
const addTodolist = createAction(ADD_TODOLIST,(todo) => ({todo}));
const deleteTodolist = createAction(DELETE_TODOLIST,(todoId) => ({todoId}));

//initail state
const initailState = {}

//middlewares
const getTodolistDB =  () => {
    return async function(dispatch,getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/mytodos`,
            headers: {     
                'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRlc3QiLCJ1c2VybmFtZSI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY1NzA5Njk2NCwiZXhwIjoxNjU3MTMyOTY0fQ.UIoaZMK3ZPAyxmgyybXjfMdh5uLpb9OMnNERpkn9Ils" 
            }
            }).then((res)=> {
                console.log('Todolist조회미들웨어::',res.data);
                dispatch(getTodolist(res.data))
            }).catch((err)=>{
                console.log("Todolist조회err::",err);
            })
        // dispatch(getTodolist({
        //     "member": [
        //         {
        //             "matchingState": false
        //         }
        //     ],
        //     "todos": [
        //         {
        //             "todoId": 1,
        //             "content": "test",
        //             "proofImg": null,
        //             "startDate": "2022-06-30",
        //             "endDate": "2022-07-01",
        //             "confirmDate": "2022-07-01",
        //             "difficulty": 3,
        //             "confirmState": false,
        //             "completionState": false,
        //             "todoType" : 0  // (0: 개인, 1: 매칭)
        //         },
        //         {
        //             "todoId": 2,
        //             "content": "matchingtest",
        //             "proofImg": null,
        //             "startDate": "2022-06-30",
        //             "endDate": "2022-07-01",
        //             "confirmDate": "2022-07-01",
        //             "difficulty": 3,
        //             "confirmState": false,
        //             "completionState": false,
        //             "todoType" : 1  // (0: 개인, 1: 매칭)
        //         }
        //     ],
        // }))
    }
}
const addTodolistDB = (todoObj) => {
    return async function(dispatch,getState){
        console.log("addtodo",{
            "content" : todoObj.todoText,
            "startDate" : todoObj.convertedStartDate,
            "endDate" : todoObj.convertedEndDate,
            "difficulty" : todoObj.diff,
            "todoType" : Number(todoObj.todoType)
        })
        await axios({
            method: "post",
            url: `${BASE_URL}/api/todos`,
            data: {
                "content" : todoObj.todoText,
                "startDate" : todoObj.convertedStartDate,
                "endDate" : todoObj.convertedEndDate,
                "difficulty" : todoObj.diff,
                "todoType" : Number(todoObj.todoType)
            },
            headers: {     
                'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRlc3QiLCJ1c2VybmFtZSI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY1NzA5Njk2NCwiZXhwIjoxNjU3MTMyOTY0fQ.UIoaZMK3ZPAyxmgyybXjfMdh5uLpb9OMnNERpkn9Ils" 
            },
            }).then((res)=> {
                console.log('Todolist추가미들웨어::',res.data);
                // dispatch(addTodolist(res.data))
            }).catch((err)=>{
                console.log("Todolist추가err::",err);
            })
    }
}
const deleteTodolistDB = (todoId) => {
    return async function(dispatch,getState){
        console.log(todoId);
        await axios({
            method: "delete",
            url: `${BASE_URL}/api/todos/${todoId}`,
            headers: {     
                'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRlc3QiLCJ1c2VybmFtZSI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY1NzA5Njk2NCwiZXhwIjoxNjU3MTMyOTY0fQ.UIoaZMK3ZPAyxmgyybXjfMdh5uLpb9OMnNERpkn9Ils" 
            },
            }).then((res)=> {
                console.log('Todolist삭제미들웨어::',res.data);
                dispatch(deleteTodolist(todoId));
            }).catch((err)=>{
                console.log("Todolist삭제err::",err);
            })
    }
}



//reducer
export default handleActions(
    {
        //처음 투두리스트 조회
        [GET_TODOLIST]:(state,action) => {
            console.log("GET_TODOLIST reducer:::", state,action);
            return action.payload.todo;
        },
        [DELETE_TODOLIST]:(state,action) => 
            produce(state,(draft)=>{
                const newTodos =  state.todos.filter((todo,idx)=>{
                    return todo.todoId !== parseInt(action.payload.todoId)
                })
                // console.log(newTodos);
                draft.todos = newTodos;

            })
    },
    initailState
)

const actionCreators = {
    getTodolist,
    getTodolistDB,
    addTodolist,
    addTodolistDB,
    deleteTodolist,
    deleteTodolistDB,
}

export {actionCreators};


