import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Header from "../header/Header";
import TabBox from "../tabBox/TabBox";
import crystalpicture from "./Users/bridgethester/Downloads/crystalpicture.svg";

const Main = () => {
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (!firstRender.current) return;
    if (localStorage.collection) {
      setCollection(JSON.parse(localStorage.collection));
    }
    if (localStorage.wishlist) {
      setWishlist(JSON.parse(localStorage.wishlist));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) firstRender.current = false;
    localStorage.collection = JSON.stringify(collection);
  }, [collection]);

  useEffect(() => {
    if (firstRender.current) firstRender.current = false;
    localStorage.wishlist = JSON.stringify(wishlist);
  }, [wishlist]);

  return (
    <div
      id="maindiv"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#B2AC88",
        //animation: "bgColorKeyframes 10s infinite linear",
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

<img>src={"./Users/bridgethester/Downloads/crystalpicture.svg"}</img>;

export default Main;
