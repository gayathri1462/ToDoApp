import { expect } from "chai";
import actionTypes from "../../actionTypes";
import { todosReducer } from "../todosReducer";

describe("The Todos Reducer", () => {
  it("Adds a new todo when CREATE_TO_DO Action is dispatched", () => {
    const fakeTodo = { todoName: "complete adding tests", isComplete: false };
    const fakeAction = {
      type: actionTypes.CREATE_TO_DO,
      payload: { todo: fakeTodo }
    };
    const actualState = { isLoading: false, data: [] };
    const expected = { isLoading: false, data: [fakeTodo] };
    const actual = todosReducer(actualState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
