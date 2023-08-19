import actionTypes from "../actionTypes";

export const tabsReducer = (state = [], action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_UPDATE_TABS: {
      const { tabs } = payload;
      return tabs;
    }
    default:
      return state;
  }
};
