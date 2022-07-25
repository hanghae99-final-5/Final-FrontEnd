import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import shopImg from "../assets/images/icons/footer_shop_24.png";
import inventoryImg from "../assets/images/icons/footer_inven_24.png";
import writeImg from "../assets/images/icons/write.png";
import mypageImg from "../assets/images/icons/footer_my_page_24.png"
import friendImg from "../assets/images/icons/footer_friend.png"

const MainFooter = () => {
  const navigate = useNavigate();
  return (
    <MainFooterWrap>
      <ButtonGroup onClick={() => navigate("/main")}>
        <Button>
          <img src={mypageImg}/>
        </Button>
        <Text>My page</Text>
      </ButtonGroup>
      <ButtonGroup onClick={() => navigate("/friend")}>
        <Button>
          <img src={friendImg}/>
        </Button>
        <Text>Friend</Text>
      </ButtonGroup>
      <ButtonGroup>
        <WriteButton onClick={() => navigate("/write")}>
          <img src={writeImg} />
        </WriteButton>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => navigate("/shop")}>
          <img src={shopImg} />
        </Button>
        <Text>Shop</Text>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => navigate("/inventory")}>
          <img src={inventoryImg} />
        </Button>
        <Text>Inventory</Text>
      </ButtonGroup>
    </MainFooterWrap>
  );
};
export default MainFooter;

const MainFooterWrap = styled.nav`
  max-width: 360px;
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding: 7px 12px;
  gap: 10px;
  border-top: 1px solid ${(props) => props.theme.gray4};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
`;
const WriteButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  & > button {
    position: fixed;
    bottom: 30px;
    width: 24px;
    height: 24px;
    background: white;
  }
  & > img {
    width: 56px;
  }
`;

const Button = styled.button`
  height: 24px;
  background: #ffffff;
  border: transparent;
  position: fixed;
  bottom: 25px;
`;

const Text = styled.span`
  position: fixed;
  bottom: 3px;
  font-size: 12px;
  height: 18px;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: ${(props) => props.theme.gray1};
`;
