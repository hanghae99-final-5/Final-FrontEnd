import React, {useState, useEffect} from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as inventotyAction } from "../redux/modules/inventories";
import styled from "styled-components";
import { ShopItemBox } from "../element/ItemBox";
import Character from "../components/Character";
import CommonModal from "../element/CommonModal";
import { useNavigate } from "react-router-dom";


const Inventory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.inventories);

  const onConfirm = () => {
    dispatch(inventotyAction.wearItemsMiddleware(selectedId, () => navigate("/login")))
    setModal(false);
}
const onCancel = () => {
  setModal(false);
}

  useEffect(() => {
    dispatch(inventotyAction.getInventoriesMiddleware(selectedId, () => navigate("/login")));
  }, []);

  const categoryObj = {
    HAIR: "Hair",
    CLOTH: "Top",
    ACCESSORY: "Accessory",
  };

  const [modal,setModal] = useState(false);
  const [selectedId,setSelectedId] = useState(null);
    const openModal = (e) => {
        setModal(true);
        setSelectedId(e.target.getAttribute("value"))
    }

  return (
    <>
    <MainHeader headerName={"Inventory"} />
    <Character />

    <ShopContentContainer>
    <CommonModal 
            title={"notice"}
            visible={modal}
            modalText={"장착하시겠습니까?"}
            onConfirm={onConfirm}
            onCancel={onCancel}
            confirmText="장착하기"
            />
      {Object.entries(categoryObj).map((category) => {
        return (
          <div key={category[1]}>
            <ItemCategory>
              <CategoryDiv>{category[1]}</CategoryDiv>
            </ItemCategory>
            <InventoryBoxWrapper >
              {items && items.length !== 0
                ? items
                    .filter((item) => item.category === category[0])
                    .map((item) => {
                      return (
                        <InventoryBox key={item.itemId} onClick={openModal}>
                          <ShopItemBox img={item.viewImg} value={item.itemId}/>
                        </InventoryBox>
                      );
                    })
                : null}
            </InventoryBoxWrapper>
          </div>
        );
      })}
    </ShopContentContainer>
    <MainFooter />
    </>
  );
};

export default Inventory;

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
  margin-bottom: 6px;
`;

const CategoryDiv = styled.div`
  width: 100%;
  height: 26px;
  font-family: "Noto Sans Korean 400";
  font-size: 18px;
  line-height: 26px;
  color: #2d2d2d;
`;

const InventoryBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 6px;
`;

const InventoryBox = styled.div`
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
