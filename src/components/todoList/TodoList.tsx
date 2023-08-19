import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TodoListItem } from "../todoListItem/TodoListItem";
import "./TodoList.css";
import { ImSpinner3 } from "react-icons/im";
import { noData } from "../../assets/index";
import { getToDos, removeToDos, updateTodo } from "../../redux/thunks/thunks";
import { TodoItem } from "../types";

interface TodoListProps {
  todos: TodoItem[];
  isLoading: boolean;
}

export const TodoList = ({ todos, isLoading }: TodoListProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDos());
  }, [dispatch]);

  const loadingMessage = (
    <div className="loadingWrapper">
      <ImSpinner3 /> <h1>Loading ....</h1>
    </div>
  );

  const content = (
    <div className={"todoListWrapper"}>
      {todos?.length ? (
        todos?.map((todo: TodoItem, tabIndex: number) => {
          return (
            <div key={tabIndex}>
              <TodoListItem
                todo={todo}
                onClickRemove={() => {
                  dispatch(removeToDos(todo._id));
                }}
                onClickMarkAsComplete={() => {
                  dispatch(updateTodo(todo));
                }}
              />
            </div>
          );
        })
      ) : (
        <div className="noDataWrapper">
          <img src={noData} alt={"No Data"} width={250} height={250} />
        </div>
      )}
    </div>
  );
  return isLoading ? loadingMessage : content;
};
