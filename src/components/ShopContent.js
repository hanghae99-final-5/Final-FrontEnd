import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import coinIconPng from "../assets/images/icons/coin.png";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as shopAction } from "../redux/modules/shop";
import { ShopItemBox } from "../element/ItemBox";
import CommonModal from "../element/CommonModal";

// styled-components 수정
const ShopContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, inventories } = useSelector((state) => state.shop);

  const inventoryItems = inventories ? inventories.map((x) => x.itemId) : null;
  console.log("inventoryItems::", inventoryItems);

  const categoryObj = {
    HAIR: "Hair",
    CLOTH: "Top",
    ACCESSORY: "Accessory",
  };
  //모달 상태관리
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const openModal = (e) => {
    if (inventoryItems.includes(Number(e.target.getAttribute("value")))) {
      return;
    }
    setModal(true);
    setSelectedId(e.target.getAttribute("value"));
  };
  const onConfirm = () => {
    dispatch(shopAction.buyItemsMiddleware(selectedId));
    setModal(false);
  };
  const onCancel = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(shopAction.getItemsMiddleware(() => navigate("/login")));
  }, []);
  return (
    <ShopContentContainer>
      <CommonModal
        title={"notice"}
        visible={modal}
        modalText={"정말 구입하시겠습니까?"}
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmText="구입하기"
        style={{ opacity: 1 }}
      />
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
                        <InventoryBox
                          key={item.itemId}
                          value={item.itemId}
                          onClick={openModal}
                        >
                          <ShopItemBox
                            img={item.viewImg}
                            value={item.itemId}
                            is_inventory={inventoryItems.includes(item.itemId)}
                          />
                          <ExpenseBox value={item.itemId}>
                            <CoinIcon value={item.itemId}>
                              <img src={coinIconPng} value={item.itemId} />
                            </CoinIcon>
                            <CoinValueDiv value={item.itemId}>
                              {item.price}
                            </CoinValueDiv>
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
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 174px;
    bottom: 70px;
    ::-webkit-scrollbar {
    display: none;
    }
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
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const InventoryBox = styled.div`
  margin-right: 6.5px;
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

// (
//   <>
//     {inventoryItems.includes(item.itemId) ? null : (
//       <InventoryBox
//         key={item.itemId}
//         value={item.itemId}
//         onClick={openModal}
//       >
//         <ShopItemBox
//           img={item.viewImg}
//           value={item.itemId}
//         />
//         <ExpenseBox value={item.itemId}>
//           <CoinIcon value={item.itemId}>
//             <img src={coinIconPng} value={item.itemId} />
//           </CoinIcon>
//           <CoinValueDiv value={item.itemId}>
//             {item.price}
//           </CoinValueDiv>
//         </ExpenseBox>
//       </InventoryBox>
//     )}
//   </>
// );
