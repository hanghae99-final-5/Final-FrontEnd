import styled from "styled-components";

export const ItemBox = styled.div`
  width: ${(props) => (props.category === "shop" ? "78px" : "72px")};
  height: 72px;
  background: ${(props) =>
    props.selected ? props.theme.gray4 : props.theme.gray5};
  border-radius: 8px;
  padding: ${(props) =>
    props.category === "shop" ? "10px 13px 10px 13px" : "10px 10px 10px 10px"};
`;

export const CustomImg = styled.img`
  width: 100%;
  min-height: 100%;
`;

export const ShopItemBox = ({ img }) => (
  <ItemBoxContainer img={img} category={"shop"}/>
);

export const DifficultyItemBox = ({ img, selected }) => (
  <ItemBoxContainer img={img} category={"difficulty"} selected={selected} />
);

const ItemBoxContainer = ({ img, category, selected }) => (
  <ItemBox category={category} selected={selected}>
    <CustomImg src={img} />
  </ItemBox>
);

export default ItemBoxContainer;
