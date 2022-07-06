import React from "react";
import styled from "styled-components";

const Difficulty = ({setDiff}) => {

    return(
        <Container>
            <div>Difficulty</div>
            <div className="wrap">
                <div onClick={()=>{setDiff(1)}}>Easy</div>
                <div onClick={()=>{setDiff(2)}}>Normal</div>
                <div onClick={()=>{setDiff(3)}}>Hard</div>
                <div onClick={()=>{setDiff(4)}}>Hard Core</div>
            </div>
        </Container>
    )
}

export default Difficulty;

const Container = styled.div`
    width: 100%;
    height: 25%;
    padding: 12px;

    // Text
    & > div:nth-child(1) {
        font-weight: 400;
        font-size: 16px;
        padding: 0 0 12px 0;
    }
    .wrap {
        display: flex;
        justify-content: space-around;
        font-weight: 400;
        font-size: 12px;
    }
`;


