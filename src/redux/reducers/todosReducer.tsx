import actionTypes from "../actionTypes";
import { TodoItem } from "../../types";

const initialState = {
  data: [],
  isLoading: false
};

export const todosReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CREATE_TO_DO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }
    case actionTypes.REMOVE_TO_DO: {
      const { _id } = payload;
      return {
        ...state,
        data: state.data.filter((todo: TodoItem) => todo._id !== _id)
      };
    }

    case actionTypes.MARK_AS_COMPLETED: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.map((todoItem: TodoItem) =>
          todoItem._id === todo._id
            ? { ...todoItem, isComplete: true }
            : todoItem
        )
      };
    }

    case actionTypes.GET_TODOS_API_SUCCESS: {
      const { todos } = payload;
      return { ...state, data: todos, isLoading: false };
    }

    case actionTypes.GET_TODOS_API_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.GET_TODOS_API_FAILURE: {
      return { ...state, data: [], isLoading: false };
    }

    default:
      return state;
  }
};
