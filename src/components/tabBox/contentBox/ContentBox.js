import CollectionBox from "./CollectionBox";
import WishlistBox from "./WishlistBox";
import ExploreContent from "./ExploreContent";

const ContentBox = ({
  activeTab,
  collection,
  setCollection,
  wishlist,
  setWishlist,
}) => {
  const makeTabContent = () => {
    if (activeTab === 0) {
      return (
        <ExploreContent
          setCollection={setCollection}
          setWishlist={setWishlist}
        ></ExploreContent>
      );
    }
    if (activeTab === 1) {
      return (
        <CollectionBox collection={collection} setCollection={setCollection} />
      );
    }
    if (activeTab === 2) {
      return <WishlistBox wishlist={wishlist} setWishlist={setWishlist} />;
    }
  };

  return (
    <div style={{ backgroundColor: "transparent" }}>{makeTabContent()}</div>
  );
};
export default ContentBox;
