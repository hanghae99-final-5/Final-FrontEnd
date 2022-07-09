import React, { useState, useEffect } from "react";
import styled from "styled-components";
import coinIconPng from "../assets/images/icons/coin.png";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as shopAction } from "../redux/modules/shop";
import { ShopItemBox } from "../element/ItemBox";

// styled-components 수정
const ShopContent = () => {
  const dispatch = useDispatch();
  const { items, inventories } = useSelector((state) => state.shop);

  const categoryObj = {
    HAIR: "Hair",
    CLOTH: "Top",
    ACCESSORY: "Accessory",
  };

  useEffect(() => {
    dispatch(shopAction.getItemsMiddleware());
  }, []);
  return (
    <ShopContentContainer>
      {Object.entries(categoryObj).map((category) => {
        return (
          <div key={category[1]}>
            <ItemCategory>
              <CategoryDiv>{category[1]}</CategoryDiv>
            </ItemCategory>
            <InventoryBoxWrapper>
              {items
                ? items
                    .filter((item) => item.category === category[0])
                    .map((item) => {
                      return (
                        <InventoryBox key={item.itemId}>
                          <ShopItemBox img={item.viewImg} />
                          <ExpenseBox>
                            <CoinIcon>
                              <img src={coinIconPng} />
                            </CoinIcon>
                            <CoinValueDiv>{item.price}</CoinValueDiv>
                          </ExpenseBox>
                        </InventoryBox>
                      );
                    })
                : null}
            </InventoryBoxWrapper>
          </div>
        );
      })}
    </ShopContentContainer>
  );
};
export default ShopContent;

const ShopContentContainer = styled.div`
  overflow: auto;
  max-width: 360px;
  width: 100%;
  height: 402px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 174px;
  padding: 10px 10px 0 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemCategory = styled.div`
  width: 100%;
  height: 36px;
  background-color: #f6f6f6;
  border-radius: 6px;
  padding: 5px 0 5px 14px;
  margin: 0 0 6px 0;
`;

const CategoryDiv = styled.div`
  width: 100%;
  height: 26px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #2d2d2d;
`;

const InventoryBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const InventoryBox = styled.div`
  witdh: 100%;
  margin-right: 8px;
  &:last-child {
    margin-right: 0px;
  }
`;

const ExpenseBox = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 0 4px 17px;
`;

const CoinIcon = styled.div`
  margin-right: 4px;
`;

const CoinValueDiv = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
