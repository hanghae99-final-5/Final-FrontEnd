import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { BASE_URL } from "../../assets/config";
import { logoutAccountByError } from "../modules/user";
import { actionCreators as characterAction } from "../modules/characters";


//action type
const GET_INVENTORIES = "GET_INVENTORIES";
//action creater
const getInventories = createAction(GET_INVENTORIES, (items) => ({
  items,
}));

//initail state
const initailState = [];

//middlewares
const getInventoriesMiddleware = (callback) => {
  return async function (dispatch, getState) {
    await axios({
      method: "get",
      url: `${BASE_URL}/api/inventories`,
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        dispatch(getInventories(res.data));
      })
      .catch((err) => {
        dispatch(logoutAccountByError(err));
      });
  };
};

const wearItemsMiddleware = (itemId) => {
    return async function (dispatch, getState) {
        await axios({
          method: "patch",
          url: `${BASE_URL}/api/items/${itemId}`,
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        })
          .then((res) => {
            dispatch(characterAction.getCharacterDB());
          })
          .catch((err) => {
            dispatch(logoutAccountByError(err));
          });
      };
}


//reducer
export default handleActions(
  {
    [GET_INVENTORIES]: (state, action) => {
      return action.payload.items;
    },
  },
  initailState
);

const actionCreators = {
    getInventories,
  getInventoriesMiddleware,
  wearItemsMiddleware
};

export { actionCreators };
