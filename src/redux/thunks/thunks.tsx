import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  createToDo,
  removeToDo,
  markAsCompleted
} from "../actions/actions";
import { TodoItem } from "../../types";

export const displayAlert = (todoName: string) => {
  alert(todoName);
};

export const getToDos = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getTodosRequest());
    const response = await axios.get(
      "https://calm-plum-jaguar-tutu.cyclic.app/todos"
    );

    if (response?.data?.code === 200) {
      const todos = response?.data?.data;
      dispatch(getTodosSuccess(todos));
    } else {
      dispatch(getTodosSuccess([]));
    }
  } catch (e) {
    dispatch(getTodosFailure());
    // dispatch(displayAlert(e));
  }
};

export const addToDos = (taskData: TodoItem) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post(
      "https://calm-plum-jaguar-tutu.cyclic.app/todos",
      taskData
    );
    const todos = response?.data?.data;
    dispatch(createToDo(todos));
  } catch (e) {
    // dispatch(displayAlert(e));
  }
};

export const removeToDos = (_id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.delete(
      `https://calm-plum-jaguar-tutu.cyclic.app/todos/${_id}`
    );
    const todo = response?.data?.data;
    dispatch(removeToDo(todo));
    dispatch(getTodosRequest());
    const res = await axios.get(
      "https://calm-plum-jaguar-tutu.cyclic.app/todos"
    );

    if (res?.data?.code === 200) {
      const todos = res?.data?.data;
      dispatch(getTodosSuccess(todos));
    } else {
      dispatch(getTodosSuccess([]));
    }
  } catch (e) {
    // dispatch(displayAlert(e));
  }
};

export const removeAllClosedTodos = (todos: TodoItem[]) => async (
  dispatch: Dispatch
) => {
  try {
    const idsArray = todos.map((todo) => todo._id);
    for (const data of idsArray) {
      const response = await axios.delete(
        `https://calm-plum-jaguar-tutu.cyclic.app/todos/${data}`
      );

      const todo = response?.data?.data;
      dispatch(removeToDo(todo));
    }

    dispatch(getTodosRequest());
    const res = await axios.get(
      "https://calm-plum-jaguar-tutu.cyclic.app/todos"
    );

    if (res?.data?.code === 200) {
      const todos = res?.data?.data;
      dispatch(getTodosSuccess(todos));
    } else {
      dispatch(getTodosSuccess([]));
    }
  } catch (e) {
    // dispatch(displayAlert(e));
  }
};

export const updateTodo = (taskData: TodoItem) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.put(
      `https://calm-plum-jaguar-tutu.cyclic.app/todos/${taskData._id}`,
      {
        isComplete: true
      }
    );

    const todo = response?.data?.data;
    dispatch(markAsCompleted(todo));
  } catch (e) {
    // dispatch(displayAlert(e));
  }
};
