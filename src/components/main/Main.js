import { useEffect, useState } from "react";
import Header from "../header/Header";
import TabBox from "../tabBox/TabBox";

const Main = () => {
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (collection.length > 0)
      localStorage.collection = JSON.stringify(collection);
  }, [collection]);

  useEffect(() => {
    if (wishlist.length > 0) localStorage.wishlist = JSON.stringify(wishlist);
  }, [wishlist]);

  useEffect(() => {
    if (localStorage.collection) {
      setCollection(JSON.parse(localStorage.collection));
    }
    if (localStorage.wishlist) {
      setWishlist(JSON.parse(localStorage.wishlist));
    }
  }, []);

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
