import React from "react";
import styled from "styled-components";
import NotificationHeader from "../components/Notification/NotificationHeader";
import NotificationList from "../components/Notification/NotificationList";


const Notification = () => {
    return(
        <Container>
            <NotificationHeader/>
            <NotificationList/>
        </Container>
    )
}

export default Notification;

const Container = styled.div`
    min-width: 360px;
    height: 640px;
    background: #FFFFFF;
`;