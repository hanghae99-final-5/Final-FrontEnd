import styled from "styled-components";

export const ItemBox = styled.div`
  width: ${(props) => (props.category === "shop" ? "78px" : "72px")};
  height: 72px;
  background: ${(props) =>
    props.selected ? props.theme.gray4 : props.theme.gray5};
  border-radius: 8px;
  padding: ${(props) =>
    props.category === "shop" ? "10px 13px 10px 13px" : "10px 10px 10px 10px"};
  opacity: ${(props) => (props.is_inventory ? 0.4 : 1)};
`;

export const CustomImg = styled.img`
  width: 100%;
  min-height: 100%;
  opacity: ${(props) => (props.is_inventory ? 0.4 : 1)};
`;

export const ShopItemBox = ({ img, value, is_inventory }) => (
  <ItemBoxContainer
    img={img}
    category={"shop"}
    value={value}
    is_inventory={is_inventory}
  />
);

export const DifficultyItemBox = ({ img, selected }) => (
  <ItemBoxContainer img={img} category={"difficulty"} selected={selected} />
);

const ItemBoxContainer = ({ img, category, selected, value, is_inventory }) => (
  <ItemBox
    category={category}
    selected={selected}
    value={value}
    is_inventory={is_inventory}
  >
    <CustomImg src={img} value={value} is_inventory={is_inventory} />
  </ItemBox>
);

export default ItemBoxContainer;
