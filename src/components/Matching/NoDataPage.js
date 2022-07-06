import React from "react";
import warning from "../../assets/images/icons/warning_40.png"
import styled from "styled-components";


const NoDataPage = () => {

    return(
        <NoData>
                <img src={warning}/>
                <div>NO results found.</div>
        </NoData>
    )
}

export default NoDataPage;

const NoData = styled.div`
    width: 100%;
    height: 570px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:  ${props => props.theme.gray2} ;
`;