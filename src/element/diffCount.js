import React from "react"
import styled from "styled-components"
import diffIcon from "../assets/images/icons/leaf_difficulty_16px.png"

const diffCount = (count) => {
    return [...Array(count).keys()].map((Icon,idx)=> <DifficultyIcon/>)
}

export default diffCount;

const DifficultyIcon = styled.div`
    width: 16px;
    height: 16px;
    background-image: url( ${diffIcon} );
`;