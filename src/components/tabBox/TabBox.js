import { useState } from "react";
import ContentBox from "./contentBox/ContentBox";
import Tab from "./tab/Tab";

const TabBox = ({ collection, setCollection, wishlist, setWishlist }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% - 75px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          // height: "calc(100% - 75px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tab
          text="Explore Crystals"
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

      <ContentBox
        collection={collection}
        setCollection={setCollection}
        wishlist={wishlist}
        setWishlist={setWishlist}
        activeTab={activeTab}
      ></ContentBox>
    </div>
  );
};

export default TabBox;
