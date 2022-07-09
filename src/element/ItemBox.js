import styled from "styled-components";

const ItemBox = styled.div`
  width: ${(props) => props.width};
  height: 72px;
  background: #f6f6f6;
  border-radius: 8px;
  padding: ${(props) => props.padding};
`;

const CustomImg = styled.img`
  width: 100%;
  min-height: 100%;
`;
export default function ItemBoxContainer({ img, width, padding }) {
  return (
    <ItemBox width={width} padding={padding}>
      <CustomImg src={img} />
    </ItemBox>
  );
}

export const ShopItemBox = ({ img }) => (
  <ItemBoxContainer img={img} width={"78px"} padding={"10px 13px 10px 13px"} />
);

export const DifficultyItemBox = ({ img }) => (
  <ItemBoxContainer img={img} width={"72px"} padding={"10px 10px 10px 10px"} />
);
