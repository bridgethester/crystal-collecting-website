import { useState } from "react";
import Header from "../header/Header";
import TabBox from "../tabBox/TabBox";

const Main = () => {
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  return (
    <div
      id="maindiv"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "plum",
      }}
    >
      <Header />
      <TabBox
        collection={collection}
        setCollection={setCollection}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
};

export default Main;
