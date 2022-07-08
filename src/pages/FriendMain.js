import React, {useState} from "react";
import { useDispatch } from "react-redux";
import MainFooter from "../components/MainFooter";
import FriendMainHeader from "../components/Friend/FriendMainHeader";
import FriendCharacter from "../components/Friend/FriendCharacter";
import FriendTodoList from "../components/Friend/FriendTodoList";
import CommonModal from "../element/CommonModal"
import { actionCreators as matchingAction } from "../redux/modules/matching";


const FriendMain = () => {
    const dispatch = useDispatch();

    const [modal,setModal] = useState(false);
    const openModal = (modalText) => {
        setModal(true);
    }
    const onConfirm = () => {
        //프렌즈 메인에도 멤버아이디 줘야함
        dispatch(matchingAction.matchingCancleDB())
        setModal(false);
    }
    const onCancel = () => {
        setModal(false)
    }
    return(
        <>
        <FriendMainHeader openModal={openModal}/>
        <FriendCharacter/>
        <FriendTodoList/>
        <MainFooter/>
        <CommonModal 
            title={"notice"}
            visible={modal}
            modalText={"정말 매칭을 취소하시겠습니까?"}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </>
    )
}

export default FriendMain;


