import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TodoList } from "../components/todoList/TodoList";
import { NewTodoForm } from "../components/newTodoForm/NewTodoForm";
import { TabsList } from "../components/tabsList/TabsList";

import { TfiWrite } from "react-icons/tfi";
import "./TodoListScreen.css";

import { updateTabs } from "../redux/actions/actions";
import { removeAllClosedTodos } from "../redux/thunks/thunks";
import { RemoveAllButton } from "../styledComponents/index";
import { TabItem } from "../types";

export const TodoListScreen = () => {
  const dispatch = useDispatch();
  const tabsData: any[] = useSelector((store: any) => store.tabs);
  const todos: any[] = useSelector((store: any) => store.todos.data);
  const isLoading: boolean = useSelector((store: any) => store.todos.isLoading);
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);

  useEffect(() => {
    let tabs;
    if (todos) {
      // Create the tabs array with counts and todos
      tabs = [
        { name: "All", count: todos?.length, todos: todos },
        {
          name: "Open",
          count: todos?.filter((todo) => !todo?.isComplete).length,
          todos: todos?.filter((todo) => !todo?.isComplete)
        },
        {
          name: "Closed",
          count: todos?.filter((todo) => todo.isComplete).length,
          todos: todos?.filter((todo) => todo.isComplete)
        }
      ];
    } else {
      tabs = [
        { name: "All", count: 0, todos: [] },
        {
          name: "Open",
          count: 0,
          todos: []
        },
        {
          name: "Closed",
          count: 0,
          todos: []
        }
      ];
    }

    dispatch(updateTabs(tabs));
  }, [todos, dispatch]);

  useEffect(() => {
    setSelectedTab(tabsData?.find((tab) => tab?.name === selectedTab?.name)); // Use tabsData
  }, [tabsData, selectedTab]);

  return (
    <div className="todoListScreenWrapper">
      <h1 className="headerText">
        <TfiWrite /> TaskHarbor
      </h1>
      <NewTodoForm />
      <TabsList
        tabs={tabsData}
        selectedTab={(tab: TabItem) => setSelectedTab(tab)}
        currentTab={selectedTab?.name}
      />
      <TodoList todos={selectedTab?.todos} isLoading={isLoading} />
      {selectedTab?.name.includes("Closed") && selectedTab?.todos?.length ? (
        <RemoveAllButton
          onClick={() => dispatch(removeAllClosedTodos(selectedTab?.todos))}
        >
          Remove All
        </RemoveAllButton>
      ) : null}{" "}
    </div>
  );
};
