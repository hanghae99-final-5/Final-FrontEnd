import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJwtByGoogleOauth } from "../redux/modules/user";
import { FirstPageWrapper } from "../components/FirstPageCSS";

const LoginProcess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    dispatch(getJwtByGoogleOauth(code, () => navigate("/main")));
  }, []);
  return (
    <FirstPageWrapper>
      <div>승인 요청 중</div>
    </FirstPageWrapper>
  );
};

export default LoginProcess;
