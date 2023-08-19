import "./TabsList.css";
import { Tab } from "../../styledComponents/index";
import { TabItem } from "../types";

export const TabsList = ({ tabs, selectedTab, currentTab }: any) => {
  return (
    <div className="tabsListWrapper">
      {tabs?.map((tab: TabItem, index: number) => (
        <Tab
          key={index}
          onClick={() => {
            selectedTab(tab);
          }}
          selected={tab.name === currentTab}
        >
          {tab.name} <span>{tab.count}</span>
        </Tab>
      ))}
    </div>
  );
};
