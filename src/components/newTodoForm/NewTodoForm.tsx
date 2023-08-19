import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDos } from "../../redux/thunks/thunks";
import { IoIosAddCircle } from "react-icons/io";
import "./NewTodoForm.css";
import { Input, Button } from "../../styledComponents/index";
import { TodoItem } from "../types";

export const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((store: any) => store.todos.data);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const handleButtonClick = () => {
    const duplicateText = todos?.some(
      (todo: TodoItem) => todo?.todoName === inputValue
    );
    if (!duplicateText) {
      dispatch(addToDos({ todoName: inputValue, isComplete: false }));
      setInputValue("");
    }
  };

  return (
    <div className="newTodoFormWrapper">
      <Input
        type="text"
        className="todoInput"
        value={inputValue}
        placeholder="Enter the task here"
        onChange={handleInputChange}
      />
      <Button
        inputValue={inputValue}
        className="createButton"
        onClick={handleButtonClick}
      >
        <IoIosAddCircle /> <span>New Task </span>
      </Button>
    </div>
  );
};
