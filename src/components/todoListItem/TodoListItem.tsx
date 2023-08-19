import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import {
  TodoItemContainer,
  CompletedContainer
} from "../../styledComponents/index";
import { TodoItem } from "../types";

interface TodoListItemProps {
  todo: TodoItem;
  onClickRemove: () => void;
  onClickMarkAsComplete: () => void;
}

export const TodoListItem = ({
  todo,
  onClickRemove,
  onClickMarkAsComplete
}: TodoListItemProps) => {
  const handleDateFormat = (createdDate: string) => {
    const date = new Date(createdDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  };

  const ItemContainer = todo?.isComplete
    ? CompletedContainer
    : TodoItemContainer;

  return (
    <ItemContainer isComplete={true}>
      <div className="topContentDiv">
        <h3>{todo?.todoName}</h3>
        <div className={"buttonContainer"}>
          {todo?.isComplete ? null : (
            <MdFileDownloadDone
              onClick={onClickMarkAsComplete}
              style={{ color: "green", fontSize: "30px", cursor: "pointer" }}
            />
          )}

          <AiTwotoneDelete
            onClick={onClickRemove}
            style={{ color: "red", fontSize: "28px", cursor: "pointer" }}
          />
        </div>
      </div>
      <h5 className="btmContentDiv">
        Created At: {handleDateFormat(todo.createdAt)}
      </h5>
    </ItemContainer>
  );
};
