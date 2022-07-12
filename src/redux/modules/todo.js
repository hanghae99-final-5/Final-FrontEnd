import { createAction, handleActions } from "redux-actions";
import { actionCreators as characterAction } from "./characters";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";

//action type
const GET_TODOLIST = "GET_TODOLIST";
const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";
const COMPLETE_TODOLIST = "COMPLETE_TODOLIST";
const GET_FRIEND_TODOLIST = "GET_FRIEND_TODOLIST";

//action creater
const getTodolist = createAction(GET_TODOLIST,(todo) => ({todo}));
const addTodolist = createAction(ADD_TODOLIST,(todo) => ({todo}));
const deleteTodolist = createAction(DELETE_TODOLIST,(todoId) => ({todoId}));
const completeTodolist = createAction(COMPLETE_TODOLIST,(todoId) => ({todoId}))
const getFriendTodolist = createAction(GET_FRIEND_TODOLIST, (todo) => ({todo}));


//initail state
const initailState = {}

//middlewares
const getTodolistDB =  () => {
    return async function(dispatch,getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/mytodos`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            }
            }).then((res)=> {
                console.log('Todolist조회미들웨어::',res.data);
                dispatch(getTodolist(res.data))
            }).catch((err)=>{
                console.log("Todolist조회err::",err);
            })
        
    }
}
const addTodolistDB = (todoObj,callback) => {
    return async function(dispatch,getState){
        console.log("callback",callback)
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
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('Todolist추가미들웨어::',res.data);
                
                // dispatch(addTodolist(res.data))
            }).catch((err)=>{
                callback("ddd");
                console.log("Todolist추가err::",err);
                console.log(err.response.data.message)
                const errMsg = err.response.data.message
                
            })
    }
}
const deleteTodolistDB = (todoId) => {
    return async function(dispatch,getState){
        await axios({
            method: "delete",
            url: `${BASE_URL}/api/todos/${todoId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('Todolist삭제미들웨어::',res.data);
                dispatch(deleteTodolist(todoId));
            }).catch((err)=>{
                console.log("Todolist삭제err::",err);
            })
    }
}
const completeTodolistDB = (todoId) => {
    return async function(dispatch,getState) {
        console.log(todoId);
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/todos/completion/${todoId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                console.log('Todolist완료미들웨어::',res.data);
                dispatch(characterAction.getCharacterDB());
                dispatch(getTodolistDB());
                
            }).catch((err)=>{
                console.log("Todolist완료err::",err);
            })
    }
}

const getFriendTodolistDB = () => {
    return async function(dispatch,getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/todos/pair/`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            }
            }).then((res)=> {
                console.log('Friend Todolist조회미들웨어::',res.data);
                dispatch(getFriendTodolist(res.data))
            }).catch((err)=>{
                console.log("Friend Todolist조회err::",err);
            }) 
    }
}
const ProofImgUploadDB = (img,todoId) => {
    return async function(dispatch, getState){
        console.log(img,todoId);
        const formData = new FormData();
        formData.append("proofImg",img);
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        //   }
        await axios({
        method: "patch",
        url: `${BASE_URL}/api/proofimgs/${todoId}`,
        data: formData,
        headers: {     
            "Content-Type": "multipart/form-data",
            'Authorization': "Bearer " + localStorage.getItem("jwtToken") ,
        },
        }).then((res)=> {
            console.log("proof img업로드 성공 res.data::",res.data)
            dispatch(getTodolistDB())
        }).catch((err)=>{
            console.log("proof img업로드 err::",err);
        }) 
    }
}
const ConfirmProofImg = (todoId) => {
    return async function(dispatch, getState){
        console.log(todoId);
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/todos/confirm/${todoId}`,
            headers: {     
                'Authorization': "Bearer " + localStorage.getItem("jwtToken") ,
            },
            }).then((res)=> {
                console.log("proof Img 인증요청 성공 res.data::",res.data)
                dispatch(getFriendTodolistDB());
                //plus버튼 접근가능하게 만들어야함;
            }).catch((err)=>{
                console.log("proof Img 인증요청 err::",err);
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

        }),
        [GET_FRIEND_TODOLIST]:(state,action) => {
            console.log("GET_FRIEND_TODOLIST reducer:::",action)
            return action.payload.todo;
        }
        
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
    getFriendTodolist,
    getFriendTodolistDB,
    ProofImgUploadDB,
    ConfirmProofImg,
    completeTodolist,
    completeTodolistDB,
}

export {actionCreators};


