import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { BASE_URL } from "../../assets/config";
import { logoutAccountByError } from "../modules/user";
import { actionCreators as characterAction } from "../modules/characters";

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

const buyItemsMiddleware = (itemId, errCallback) => {
  return async function (dispatch, getState) {
    await axios({
      method: "post",
      url: `${BASE_URL}/api/items/${itemId}`,
      headers: {
        authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        dispatch(getItemsMiddleware());
        dispatch(characterAction.getCharacterDB());
      })
      .catch((err) => {
        dispatch(logoutAccountByError(err));
        errCallback(err.response.data.message);
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
