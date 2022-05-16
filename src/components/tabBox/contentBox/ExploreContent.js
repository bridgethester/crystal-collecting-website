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
      <table style={{ width: "100%", border: "1px solid black " }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>type of crystal</th>
          <th style={{ border: "1px solid black" }}>purpose</th>
          <th style={{ border: "1px solid black" }}>all of its benefits</th>
          <th style={{ border: "1px solid black" }}>what to do??</th>
        </tr>
        {crystals.map((cry) => {
          return (
            <tr>
              <td style={{ border: "1px solid black" }}>{cry.name}</td>
              <td style={{ border: "1px solid black" }}>{cry.purp}</td>
              <td style={{ border: "1px solid black" }}>{cry.describe}</td>
              <td style={{ border: "1px solid black" }}>
                <button
                  style={{
                    backgroundColor: "#6F4E37",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleAddCol(cry)}
                >
                  + collection
                </button>
                <button
                  style={{
                    backgroundColor: "#6F4E37",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleAddWish(cry)}
                >
                  + wishlist
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ExploreContent;
