import React, { useEffect } from 'react';
import styled from 'styled-components';

import Main from './pages/Main';
import FirstPage from './pages/FirstPage';
import FriendMain from './pages/FriendMain';

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
            <Main />
            <FirstPage />
            {/* <FriendMain /> */}
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
  #wrap {
    width: 100%;
    max-width: 360px;
    height: 100%;
    min-height: 100vh;
    background: grey;
    margin: 0 auto;
    padding: 0 auto;
    position: relative;
  }
`;
const Setting = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  `;
