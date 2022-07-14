import { createAction, handleActions } from "redux-actions";
import { actionCreators as characterAction } from "./characters";
import axios from "axios";
import produce from "immer";
import { BASE_URL } from "../../assets/config";

//action type
const GET_TODOLIST = "GET_TODOLIST";
const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";
const GET_FRIEND_TODOLIST = "GET_FRIEND_TODOLIST";
const GET_EDIT_TODOLIST = "GET_EDIT_TODOLIST";

//action creater
const getTodolist = createAction(GET_TODOLIST,(todo) => ({todo}));
const addTodolist = createAction(ADD_TODOLIST,(todo) => ({todo}));
const deleteTodolist = createAction(DELETE_TODOLIST,(todoId) => ({todoId}));
const getFriendTodolist = createAction(GET_FRIEND_TODOLIST, (todo) => ({todo}));
const getEditTodolist = createAction(GET_EDIT_TODOLIST,(todo)=>({todo}))


//initail state
const initailState = {
    todo:{},
    friendTodo:{},
    EditTodo:{},
}

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
                dispatch(getTodolist(res.data))
            }).catch((err)=>{
                console.log("Todolist조회err::",err);
            })
        
    }
}
const addTodolistDB = (todoObj,modalCallback,navigate) => {
    return async function(dispatch,getState){
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
                dispatch(getTodolistDB());
                navigate();
                
            }).catch((err)=>{
                console.log("Todolist추가err::",err);
                const errMsg = err.response.data.message
                modalCallback(errMsg);
            })
    }
}
const editTodolistDB = (todoObj,todoId,modalCallback,navigate) => {
    return async function(dispatch,getState){
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/todos/${todoId}`,
            data: {
                "content" : todoObj.todoText,
                "difficulty" : todoObj.diff,
                "todoType" : Number(todoObj.todoType)
            },
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
                dispatch(getTodolistDB());
                navigate();
                
            }).catch((err)=>{
                console.log("Todolist수정err::",err);
                const errMsg = err.response.data.message
                modalCallback(errMsg);
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
                dispatch(deleteTodolist(todoId));
            }).catch((err)=>{
                console.log("Todolist삭제err::",err);
            })
    }
}
const completeTodolistDB = (todoId) => {
    return async function(dispatch,getState) {
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/todos/completion/${todoId}`,
            headers: {     
                authorization: "Bearer " + localStorage.getItem("jwtToken")
            },
            }).then((res)=> {
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
                dispatch(getFriendTodolist(res.data))
            }).catch((err)=>{
                console.log("Friend Todolist조회err::",err);
            }) 
    }
}
const ProofImgUploadDB = (img,todoId) => {
    return async function(dispatch, getState){
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
            dispatch(getTodolistDB())
        }).catch((err)=>{
            console.log("proof img업로드 err::",err);
        }) 
    }
}
const ConfirmProofImg = (todoId) => {
    return async function(dispatch, getState){
        await axios({
            method: "patch",
            url: `${BASE_URL}/api/todos/confirm/${todoId}`,
            headers: {     
                'Authorization': "Bearer " + localStorage.getItem("jwtToken") ,
            },
            }).then((res)=> {
                dispatch(getFriendTodolistDB());
            }).catch((err)=>{
                console.log("proof Img 인증요청 err::",err);
            }) 
    }
}
const getEditTodolistDB = (todoId) => {
    return async function(dispatch, getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/todos/${todoId}`,
            headers: {     
                'Authorization': "Bearer " + localStorage.getItem("jwtToken") ,
            },
            }).then((res)=> {
                dispatch(getEditTodolist(res.data))
            }).catch((err)=>{
                console.log("get editTotolist err::",err);
            }) 
    }
}


//reducer
export default handleActions(
    {
        //처음 투두리스트 조회
        [GET_TODOLIST]:(state,action) => 
            produce(state,(draft)=>{
                draft.todo = action.payload.todo
            })
        ,
        [DELETE_TODOLIST]:(state,action) => 
            produce(state,(draft)=>{
                const newTodos =  state.todo.todos.filter((todo,idx)=>{
                    return todo.todoId !== parseInt(action.payload.todoId)
                })
                draft.todo.todos = newTodos;
        }),
        //friend depth 수정하기
        [GET_FRIEND_TODOLIST]:(state,action) => 
            produce(state,(draft)=>{
                draft.friendTodo = action.payload.todo
            })
        ,
        [GET_EDIT_TODOLIST]:(state,action) => 
            produce(state,(draft)=>{
                draft.EditTodo = action.payload.todo
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
    getFriendTodolist,
    getFriendTodolistDB,
    ProofImgUploadDB,
    ConfirmProofImg,
    completeTodolistDB,
    getEditTodolistDB,
    editTodolistDB,
}

export {actionCreators};


