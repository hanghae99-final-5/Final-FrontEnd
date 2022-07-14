import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";
import styled from "styled-components";
import DateRange from "../components/Write/DateRange";
import Difficulty from "../components/Write/Difficulty";
import TodoWrite from "../components/Write/TodoWrite";
import WriteHeader from "../components/Write/WriteHeader";
import CommonModal from "../element/CommonModal";

const Write = () => {
  const dispatch = useDispatch();
  const todoId = useParams().id;

    //todo 수정 조회 데이터
    const editTodoObj = useSelector(state => state.todo.EditTodo);

  const [todoType, setTodoType] = useState(null);
  const [todoText, setTodoText] = useState(null);
  const [diff, setDiff] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const convertedStartDate = startDate.toISOString().split("T")[0];
  const convertedEndDate = endDate.toISOString().split("T")[0];

  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);
  const openErrModal = (modalText) => {
    setModal(true);
    setModalText(modalText);
  };
  const onConfirm = () => {
    setModal(false);
  };

  useEffect(() => {
    {
      todoId && dispatch(todoAction.getEditTodolistDB(todoId));
    }
  }, []);
  useEffect(() => {
    setTodoType(editTodoObj.todoType);
    setTodoText(editTodoObj.content);
    setDiff(editTodoObj.difficulty);
  }, [editTodoObj]);

  if (Object.keys(editTodoObj).length === 0 && todoId) return null;
  return (
    <>
      <WriteContainer>
        <CommonModal
          title={"notice"}
          visible={modal}
          modalText={modalText}
          onConfirm={onConfirm}
          isSingleBtn
        />
        <WriteHeader
          todoObj={{
            todoType,
            todoText,
            diff,
            convertedStartDate,
            convertedEndDate,
          }}
          openErrModal={openErrModal}
          onConfirm={onConfirm}
        />
        <TodoWrite
          setTodoType={setTodoType}
          setTodoText={setTodoText}
          todoText={todoText}
          todoType={todoType}
        />
        <Difficulty setDiff={setDiff} diff={diff} todoType={todoType} />
        {/* 수정페이지에서는 DATE수정불가 */}
        {!todoId && (
          <DateRange
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        )}
      </WriteContainer>
    </>
  );
};

export default Write;

const WriteContainer = styled.div`
  min-width: 360px;
  height: 640px;
  background: #ffffff;
`;
