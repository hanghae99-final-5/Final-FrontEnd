import React, {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import MainFooter from "../components/MainFooter";
import FriendMainHeader from "../components/Friend/FriendMainHeader";
import FriendCharacter from "../components/Friend/FriendCharacter";
import FriendTodoList from "../components/Friend/FriendTodoList";
import CommonModal from "../element/CommonModal"
import { actionCreators as matchingAction } from "../redux/modules/matching";
import NoDataPage from "../components/Matching/NoDataPage";


const FriendMain = () => {
    const dispatch = useDispatch();
    const friendObj = useSelector(state=>state.characters.friendCharacter);
    //matching상태로 friend페이지 뷰 다르게 보여주기 
    const isMatching =friendObj.matchingState;
    console.log(isMatching);


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
        {isMatching === undefined ? 
            <>
                <FriendMainHeader openModal={openModal}/>
                <NoDataPage/>
                <MainFooter/>
            </>
            :
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
        }
        </>
    )
}

export default FriendMain;


