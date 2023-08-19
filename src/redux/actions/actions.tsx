import actionTypes from "../actionTypes";
import { TabItem, TodoItem } from "../../types";

//getActions

export const getTodosRequest = () => {
  return {
    type: actionTypes.GET_TODOS_API_REQUEST
  };
};

export const getTodosSuccess = (todos: TodoItem[]) => {
  return {
    type: actionTypes.GET_TODOS_API_SUCCESS,
    payload: { todos }
  };
};

export const getTodosFailure = () => {
  return {
    type: actionTypes.GET_TODOS_API_FAILURE
  };
};

// createActions

export const createToDo = (todo: TodoItem) => {
  return { type: actionTypes.CREATE_TO_DO, payload: { todo } };
};

// deleteActions

export const removeToDo = (_id: string) => {
  return { type: actionTypes.REMOVE_TO_DO, payload: { _id } };
};

// updateActions

export const markAsCompleted = (todo: TodoItem) => {
  return { type: actionTypes.MARK_AS_COMPLETED, payload: { todo } };
};

// updateTabs

export const updateTabs = (tabs: TabItem) => {
  return { type: actionTypes.SET_UPDATE_TABS, payload: { tabs } };
};
