import { crystals } from "../../../constants/constants";
const ExploreContent = ({
  collection,
  setCollection,
  wishlist,
  setWishlist,
}) => {
  const handleAddCol = (cry) => {
    setCollection((prev) => [...prev, cry]);
  };
  const handleAddWish = (cry) => {
    setWishlist((prev) => [...prev, cry]);
  };
  return (
    <div id="ExploreContent" style={{ width: "calc(255px*3)" }}>
      <table style={{ width: "100%" }}>
        <tr>
          <th>type of crystal</th>
          <th>all of its benefits</th>
          <th>what to do??</th>
        </tr>
        {crystals.map((cry) => {
          return (
            <tr>
              <td>{cry.name}</td>
              <td>{cry.describe}</td>
              <td>
                <button onClick={() => handleAddCol(cry)}>+collection</button>
                <button onClick={() => handleAddWish(cry)}>+wishlist</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ExploreContent;
