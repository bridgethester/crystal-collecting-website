const WishlistBox = ({ wishlist, setWishlist }) => {
  console.log("wishlist", wishlist);
  const handleDelete = (cry) => {
    const newWishlist = [];
    let foundInst = false;
    wishlist.forEach((el) => {
      if (foundInst === false) {
        if (el.name === cry.name) {
          foundInst = true;
        } else newWishlist.push(el);
      } else newWishlist.push(el);
    });

    setWishlist(newWishlist);
  };
  return (
    <div id="ExploreContent" style={{ width: "calc(255px*3)" }}>
      <table style={{ width: "100%", border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>type of crystal</th>
          <th style={{ border: "1px solid black" }}>purpose</th>
          <th style={{ border: "1px solid black" }}>all of its benefits</th>
          <th style={{ border: "1px solid black" }}>what to do??</th>
        </tr>
        {wishlist.map((cry) => {
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
                  onClick={() => handleDelete(cry)}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WishlistBox;
