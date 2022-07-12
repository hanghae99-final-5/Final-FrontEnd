import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { BASE_URL } from "../../assets/config";
import { logoutAccountByError } from "../modules/user";

//action type
const GET_ITEMS = "GET_ITEMS";
//action creater
const getItems = createAction(GET_ITEMS, (items) => ({
  items,
}));

//initail state
const initailState = {};

//middlewares
const getItemsMiddleware = (callback) => {
  return async function (dispatch, getState) {
    await axios({
      method: "get",
      url: `${BASE_URL}/api/items`,
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        dispatch(getItems(res.data));
      })
      .catch((err) => {
        dispatch(logoutAccountByError(err));
        console.log("item조회 err::", err.response.status);
      });
  };
};

const buyItemsMiddleware = (itemId) => {
  return async function (dispatch, getState) {
    console.log("itemId::",itemId)
    await axios({
      method: "post",
      url: `${BASE_URL}/api/items/${itemId}`,
      headers: {
        authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        dispatch(getItemsMiddleware());
      })
      .catch((err) => {
        dispatch(logoutAccountByError(err));
        console.log("item조회 err::", err);
      });

  };
};


//reducer
export default handleActions(
  {
    [GET_ITEMS]: (state, action) => {
      return action.payload.items;
    },
  },
  initailState
);

const actionCreators = {
  getItems,
  getItemsMiddleware,
  buyItemsMiddleware,
};

export { actionCreators };
