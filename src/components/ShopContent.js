import React, { useState } from "react";
import styled from "styled-components";
import coinIconPng from "../assets/images/icons/coin.png";

// styled-components 수정, api 연결 해야함
const ShopContent = () => {
  return (
    <ShopContentContainer>
      <div>
        <ItemCategory>
          <CategoryDiv>Hair</CategoryDiv>
        </ItemCategory>
        <InventoryBoxWrapper>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
        </InventoryBoxWrapper>
      </div>

      <div>
        <ItemCategory>
          <CategoryDiv>Top</CategoryDiv>
        </ItemCategory>
        <InventoryBoxWrapper>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
        </InventoryBoxWrapper>
      </div>

      <div>
        <ItemCategory>
          <CategoryDiv>Accessory</CategoryDiv>
        </ItemCategory>
        <InventoryBoxWrapper>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
          <InventoryBox>
            <ItemBox>
              <InventoryContent></InventoryContent>
            </ItemBox>
            <ExpenseBox>
              <CoinIcon>
                <img src={coinIconPng} />
              </CoinIcon>
              <CoinValueDiv>100</CoinValueDiv>
            </ExpenseBox>
          </InventoryBox>
        </InventoryBoxWrapper>
      </div>
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
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 174px;
  padding: 10px 10px 0 10px;
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
  justify-content: space-between;
`;

const InventoryBox = styled.div`
  witdh: 100%;
`;

const ItemBox = styled.div`
  width: 78px;
  height: 72px;

  background: #f6f6f6;
  border-radius: 8px;
  padding: 10px 13px 10px 13px;
`;

const InventoryContent = styled.div`
  width: 52px;
  height: 52px;
  background: #e4e4e4;
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
