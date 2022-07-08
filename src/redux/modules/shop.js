import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { BASE_URL } from "../../assets/config";

//action type
const GET_ITEMS = "GET_ITEMS";
//action creater
const getItems = createAction(GET_ITEMS, (items) => ({
  items,
}));



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
        authorization: "Bearer " + localStorage.getItem("jwtToken")
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