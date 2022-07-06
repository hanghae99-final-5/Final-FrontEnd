import { createAction, handleActions } from "redux-actions";
import axios from "axios";

//action type
const GET_ITEMS = "GET_ITEMS";
//action creater
const getItems = createAction(GET_ITEMS, (items) => ({
  items,
}));

const BASE_URL = "http://54.180.140.222";

//initail state
const initailState = {};

//middlewares
const getItemsMiddleware = () => {
  return async function (dispatch, getState) {
    await axios({
      method: "get",
      url: `${BASE_URL}/api/items`,
      headers: {
        "content-type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRlc3QiLCJ1c2VybmFtZSI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY1NzA2NzM1NSwiZXhwIjoxNjU3MTAzMzU1fQ.fFK6uyFN1aswBLDOT9Dbb9KL4zQ_l5ochu2Fv_djG9o",
      },
    })
      .then((res) => {
        console.log("item조회 success!::", res.data);
        dispatch(getItems(res.data));
      })
      .catch((err) => {
        console.log("item조회 err::", err);
      });
  };
};

//reducer
export default handleActions(
  {
    [GET_ITEMS]: (state, action) => {
      console.log("item reducer action:::", action);
      return action.payload.items;
    },
  },
  initailState
);

const actionCreators = {
  getItems,
  getItemsMiddleware,
};

export { actionCreators };
