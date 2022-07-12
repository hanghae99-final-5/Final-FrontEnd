import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJwtByGoogleOauth } from "../redux/modules/user";

const LoginProcess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("code ::", code);
    dispatch(getJwtByGoogleOauth(code, () => navigate("/")));
  }, []);
  return <div>승인요청중</div>;
};

export default LoginProcess;
