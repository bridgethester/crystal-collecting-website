import { useState } from "react";
import Tab from "./tab/Tab";

const TabBox = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% - 75px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tab
        text="explore tehe"
        onClick={() => setActiveTab(0)}
        isActive={activeTab === 0}
      ></Tab>
      <Tab
        text="My Crystals"
        onClick={() => setActiveTab(1)}
        isActive={activeTab === 1}
      ></Tab>
      <Tab
        text="Wishlist"
        onClick={() => setActiveTab(2)}
        isActive={activeTab === 2}
      ></Tab>
    </div>
  );
};

export default TabBox;
