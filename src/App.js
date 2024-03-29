import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import FirstPage from "./pages/FirstPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FriendMain from "./pages/FriendMain";
import Write from "./pages/Write";
import Matching from "./pages/Matching";
import Shop from "./pages/Shop";
import Logout from "./pages/Logout";
import Notification from "./pages/Notification";
import Inventory from "./pages/Inventory";
import LoginProcess from "./pages/LoginProcess";
import Statistics from "./pages/Statistics";
import Guide from "./pages/Guide";

import background from "./assets/images/logos/web_bg_1920x1080_final.jpg"

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Container>
        <div id="wrap">
          <Setting>
            <Routes>
              <Route exact path="/main" element={<Main />} />
              <Route exact path="/friend" element={<FriendMain />} />
              <Route exact path="/" element={<FirstPage />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/write" element={<Write />} />
              <Route exact path="/edit/:id" element={<Write />} />
              <Route exact path="/matching" element={<Matching />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/notification" element={<Notification />} />
              <Route exact path="/inventory" element={<Inventory />} />
              <Route exact path="/login-process" element={<LoginProcess />} />
              <Route exact path="/statistics" element={<Statistics />} />
              <Route exact path="/guide" element={<Guide />} />
            </Routes>
          </Setting>
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  background-color: #eee;
  @media (min-width: 500px) {
    background: url(${background}) 0% 0% / cover no-repeat;
  }
  #wrap {
    width: 100%;
    max-width: 360px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    position: relative;
    background-color: #fff;
  }
`;
const Setting = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
`;
