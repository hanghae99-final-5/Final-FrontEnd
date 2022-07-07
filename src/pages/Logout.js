import { useDispatch } from "react-redux";
import { logoutAccount } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div>멤버 소개 컴포넌트</div>
      <button
        onClick={() => {
          dispatch(
            logoutAccount(() => {
              navigate("/login");
            })
          );
        }}
      >
        logout
      </button>
    </>
  );
};

export default Logout;
